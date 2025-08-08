import { Footer } from '@/components/footer';
import { NavigationMenuComponent } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, TrendingUp, Users, BarChart3, Target, Loader2, type LucideIcon } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';

interface BlogSection {
    heading: string;
    content: string[];
}

interface BlogContent {
    introduction: string;
    sections: BlogSection[];
    conclusion: string;
}

interface BlogDetailContent {
    id: string;
    category: string;
    icon: LucideIcon;
    iconColor: string;
    title: string;
    description: string;
    author: string;
    publishedDate: string;
    readTime: string;
    image: string;
    imageAlt: string;
    tags: string[];
    content: BlogContent;
    relatedPosts?: string[];
}

// Define specific interface for API response to avoid 'any' type
interface BlogApiData {
    id?: number | string;
    category?: string;
    title?: string;
    description?: string;
    excerpt?: string;
    author?: string;
    published_date?: string;
    date?: string;
    read_time?: string;
    image?: string;
    featured_image?: string;
    imageAlt?: string;
    tags?: string | string[];
    content?: string | BlogContent;
    full_content?: string;
    related_posts?: string | string[];
}

// Icon mapping based on category
const getIconAndColor = (category: string): { icon: LucideIcon; iconColor: string } => {
    switch (category.toLowerCase()) {
        case 'featured article':
            return { icon: TrendingUp, iconColor: 'text-blue-600' };
        case 'talent acquisition':
            return { icon: Users, iconColor: 'text-green-600' };
        case 'market analysis':
            return { icon: BarChart3, iconColor: 'text-purple-600' };
        case 'best practices':
            return { icon: Target, iconColor: 'text-orange-600' };
        default:
            return { icon: TrendingUp, iconColor: 'text-gray-600' };
    }
};

// Transform API data to BlogDetailContent format - Fixed 'any' type issue
const transformApiDataToDetail = (apiData: BlogApiData): BlogDetailContent => {
    const { icon, iconColor } = getIconAndColor(apiData.category || 'Featured Article');
    
    // Parse content if it's a JSON string, otherwise create default structure
    let parsedContent: BlogContent | null = null;
    try {
        if (typeof apiData.content === 'string') {
            parsedContent = JSON.parse(apiData.content);
        } else {
            parsedContent = apiData.content as BlogContent;
        }
    } catch {
        // Removed unused 'e' parameter - Fixed unused variable issue
        // Fallback structure if content parsing fails
        parsedContent = {
            introduction: apiData.description || apiData.excerpt || '',
            sections: [],
            conclusion: ''
        };
    }

    // Ensure content has the proper structure
    const content: BlogContent = {
        introduction: parsedContent?.introduction || apiData.description || apiData.excerpt || '',
        sections: parsedContent?.sections || [],
        conclusion: parsedContent?.conclusion || ''
    };

    // If sections are empty, try to create sections from full content
    if (content.sections.length === 0 && apiData.full_content) {
        // Split content into paragraphs and create basic sections
        const paragraphs = apiData.full_content.split('\n\n').filter((p: string) => p.trim());
        if (paragraphs.length > 1) {
            content.sections = paragraphs.slice(0, -1).map((paragraph: string, index: number) => ({
                heading: `Section ${index + 1}`,
                content: [paragraph]
            }));
            content.conclusion = paragraphs[paragraphs.length - 1] || content.conclusion;
        }
    }

    return {
        id: apiData.id?.toString() || '',
        category: apiData.category || 'Featured Article',
        icon,
        iconColor,
        title: apiData.title || 'Untitled',
        description: apiData.description || apiData.excerpt || '',
        author: apiData.author || 'Anonymous',
        publishedDate: apiData.published_date || apiData.date || new Date().toLocaleDateString(),
        readTime: apiData.read_time || '5 min read',
        image: apiData.image || apiData.featured_image || 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop',
        imageAlt: apiData.imageAlt || apiData.title || 'Blog post image',
        tags: apiData.tags ? (Array.isArray(apiData.tags) ? apiData.tags : apiData.tags.split(',').map((tag: string) => tag.trim())) : [],
        content,
        relatedPosts: apiData.related_posts ? (Array.isArray(apiData.related_posts) ? apiData.related_posts : []) : []
    };
};

export const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [blogPost, setBlogPost] = useState<BlogDetailContent | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogDetailContent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            if (!id) {
                setError('Blog post ID not provided');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                
                // Fetch specific blog post
                const response = await fetch(`https://goldcorecpro.com/api/blogs.php?action=single&id=${id}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log('API Response:', data);
                
                // Handle different API response structures
                const blogData = data.blog || data.data || data;
                
                if (!blogData || Object.keys(blogData).length === 0) {
                    throw new Error('Blog post not found');
                }
                
                const transformedPost = transformApiDataToDetail(blogData);
                setBlogPost(transformedPost);

                // Fetch related posts if available
                if (transformedPost.relatedPosts && transformedPost.relatedPosts.length > 0) {
                    const relatedPromises = transformedPost.relatedPosts.map(async (relatedId: string) => {
                        try {
                            const relatedResponse = await fetch(`https://goldcorecpro.com/api/blogs.php?action=get&id=${relatedId}`);
                            if (relatedResponse.ok) {
                                const relatedData = await relatedResponse.json();
                                return transformApiDataToDetail(relatedData.blog || relatedData.data || relatedData);
                            }
                        } catch {
                            // Removed unused 'e' parameter - Fixed unused variable issue
                            console.error('Error fetching related post');
                            return null;
                        }
                        return null;
                    });

                    const relatedResults = await Promise.all(relatedPromises);
                    setRelatedPosts(relatedResults.filter(post => post !== null) as BlogDetailContent[]);
                }
                
            } catch (error) {
                // Removed unused 'err' parameter and renamed to 'error' - Fixed unused variable issue
                console.error('Error fetching blog detail:', error);
                setError(error instanceof Error ? error.message : 'Failed to load blog post');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogDetail();
    }, [id]);

    const handleGoBack = () => {
        navigate('/');
    };

    const handleShare = async () => {
        if (navigator.share && blogPost) {
            try {
                await navigator.share({
                    title: blogPost.title,
                    text: blogPost.description,
                    url: window.location.href,
                });
            } catch {
                // Removed unused error parameter - Fixed unused variable issue
                // Fallback to clipboard
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const handleRelatedPostClick = (relatedId: string) => {
        navigate(`/blog/${relatedId}`);
    };

    // Loading state
    if (loading) {
        return (
            <div className="mx-auto bg-[#64748b] bg-gradient-to-br from-slate-250 via-emerald-50/30 to-gray-100 min-h-screen">
                <NavigationMenuComponent />
                <div className="flex justify-center items-center h-64">
                    <div className="flex items-center gap-2">
                        <Loader2 className="h-8 w-8 animate-spin text-[#059669]" />
                        <span className="text-lg text-gray-600">Loading blog post...</span>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // Error state
    if (error || !blogPost) {
        return (
            <div className="mx-auto bg-[#64748b] bg-gradient-to-br from-slate-250 via-emerald-50/30 to-gray-100 min-h-screen">
                <NavigationMenuComponent />
                <div className="lg:px-24 px-4 py-8">
                    <Card>
                        <CardContent className="text-center py-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {error || 'Blog Post Not Found'}
                            </h2>
                            <p className="text-gray-600 mb-6">
                                {error === 'Blog post not found' || !blogPost ? 
                                    "The blog post you're looking for doesn't exist." : 
                                    "There was an error loading the blog post."
                                }
                            </p>
                            <button
                                onClick={handleGoBack}
                                className="px-4 py-2 bg-[#059669] text-white rounded-lg hover:bg-[#059669]/70 transition-colors"
                            >
                                Go Back to Blog
                            </button>
                        </CardContent>
                    </Card>
                </div>
                <Footer />
            </div>
        );
    }

    return (    
        <div className="mx-auto bg-[#64748b] bg-gradient-to-br from-slate-250 via-emerald-50/30 to-gray-100">
            <NavigationMenuComponent />
            <div className="mb-6 lg:px-24 px-4">
                <button
                    onClick={handleGoBack}
                    className="flex items-center gap-2 text-white font-outfit cursor-pointer hover:text-white/80 transition-colors mb-4"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </button>
            </div>

            {/* Main Article */}
            <Card className="mb-8 mx-4 lg:mx-24 font-outfit">
                <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                        <blogPost.icon className={`h-5 w-5 ${blogPost.iconColor}`} />
                        <span className="text-sm text-gray-500">{blogPost.category}</span>
                    </div>
                    <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                        {blogPost.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{blogPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{blogPost.publishedDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{blogPost.readTime}</span>
                        </div>
                        <button
                            onClick={handleShare}
                            className="flex items-center gap-1 text-[#059669] hover:text-[#059669]/80 transition-colors"
                        >
                            <Share2 className="h-4 w-4" />
                            <span>Share</span>
                        </button>
                    </div>
                    {blogPost.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blogPost.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </CardHeader>
                <CardContent>
                    <img
                        src={blogPost.image}
                        alt={blogPost.imageAlt}
                        className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
                        onError={(e) => {
                            // Fallback image if the API image fails to load
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop';
                        }}
                    />

                    {/* Introduction */}
                    {blogPost.content.introduction && (
                        <div className="prose prose-lg max-w-none mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {blogPost.content.introduction}
                            </p>
                        </div>
                    )}

                    {/* Sections */}
                    {blogPost.content.sections.length > 0 && (
                        <div className="space-y-8">
                            {blogPost.content.sections.map((section, index) => (
                                <div key={index}>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        {section.heading}
                                    </h2>
                                    <div className="space-y-4">
                                        {section.content.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="text-gray-700 leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Conclusion */}
                    {blogPost.content.conclusion && (
                        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                Key Takeaway
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {blogPost.content.conclusion}
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <Card className='m-4 lg:m-24 font-outfit'>
                    <CardHeader>
                        <CardTitle className="text-xl">Related Articles</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                            {relatedPosts.map(relatedPost => (
                                <div
                                    key={relatedPost.id}
                                    className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                                    onClick={() => handleRelatedPostClick(relatedPost.id)}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <relatedPost.icon className={`h-4 w-4 ${relatedPost.iconColor}`} />
                                        <span className="text-xs text-gray-500">{relatedPost.category}</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        {relatedPost.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {relatedPost.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
            <Footer />
        </div>
    );
};