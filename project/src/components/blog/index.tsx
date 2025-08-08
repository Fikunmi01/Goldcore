// BlogDetails.tsx - Updated to use slug instead of id
import { Footer } from '@/components/footer';
import { NavigationMenuComponent } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
    slug: string;
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

interface BlogApiData {
    id?: number | string;
    slug?: string;
    category?: string;
    title?: string;
    description?: string;
    excerpt?: string;
    author?: string;
    published_date?: string;
    date?: string;
    read_time?: string;
    image_url?: string;
    image?: string;
    featured_image?: string;
    image_alt?: string;
    imageAlt?: string;
    tags?: string | string[];
    content?: string | BlogContent;
    full_content?: string;
    related_posts?: string | string[];
    icon_name?: string;
    icon_color?: string;
}

interface BlogApiResponse {
    success: boolean;
    data: BlogApiData | BlogApiData[];
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

// Transform API data to BlogDetailContent format
const transformApiDataToDetail = (apiData: BlogApiData): BlogDetailContent => {
    const { icon, iconColor } = getIconAndColor(apiData.category || 'Featured Article');
    
    // Parse content if it's a JSON string, otherwise create default structure
    let parsedContent: BlogContent | null = null;
    try {
        if (typeof apiData.content === 'string') {
            parsedContent = JSON.parse(apiData.content);
        } else if (apiData.content && typeof apiData.content === 'object') {
            parsedContent = apiData.content;
        }
    } catch {
        console.error('Error parsing content');
        parsedContent = null;
    }

    // Ensure content has the proper structure
    const content: BlogContent = {
        introduction: parsedContent?.introduction || apiData.description || apiData.excerpt || '',
        sections: parsedContent?.sections || [],
        conclusion: parsedContent?.conclusion || ''
    };

    // If sections are empty but we have full_content, try to create sections
    if (content.sections.length === 0 && apiData.full_content) {
        const paragraphs = apiData.full_content.split('\n\n').filter((p: string) => p.trim());
        if (paragraphs.length > 1) {
            content.sections = paragraphs.slice(0, -1).map((paragraph: string, index: number) => ({
                heading: `Section ${index + 1}`,
                content: [paragraph]
            }));
            content.conclusion = paragraphs[paragraphs.length - 1] || content.conclusion;
        }
    }

    // Parse tags properly
    let tags: string[] = [];
    if (apiData.tags) {
        if (Array.isArray(apiData.tags)) {
            tags = apiData.tags;
        } else if (typeof apiData.tags === 'string') {
            // Handle both comma-separated and JSON string formats
            try {
                tags = JSON.parse(apiData.tags);
            } catch {
                tags = apiData.tags.split(',').map((tag: string) => tag.trim()).filter(tag => tag);
            }
        }
    }

    // Parse related posts if it's a JSON string
    let relatedPosts: string[] = [];
    if (apiData.related_posts) {
        if (Array.isArray(apiData.related_posts)) {
            relatedPosts = apiData.related_posts;
        } else if (typeof apiData.related_posts === 'string') {
            try {
                relatedPosts = JSON.parse(apiData.related_posts);
            } catch {
                relatedPosts = [];
            }
        }
    }

    return {
        id: apiData.id?.toString() || '',
        slug: apiData.slug || apiData.id?.toString() || '',
        category: apiData.category || 'Featured Article',
        icon,
        iconColor,
        title: apiData.title || 'Untitled',
        description: apiData.description || apiData.excerpt || '',
        author: apiData.author || 'Anonymous',
        publishedDate: apiData.published_date || apiData.date || new Date().toLocaleDateString(),
        readTime: apiData.read_time || '5 min read',
        image: apiData.image_url || apiData.image || apiData.featured_image || 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop',
        imageAlt: apiData.image_alt || apiData.imageAlt || apiData.title || 'Blog post image',
        tags,
        content,
        relatedPosts
    };
};

export const BlogDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [blogPost, setBlogPost] = useState<BlogDetailContent | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogDetailContent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            if (!slug) {
                setError('Blog post slug not provided');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                
                // Fetch specific blog post using slug (passed as id parameter)
                const response = await fetch(`https://goldcorecpro.com/api/blogs.php?action=single&id=${slug}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const apiResponse: BlogApiResponse = await response.json();
                console.log('API Response:', apiResponse);
                
                // Handle the new API response structure with success and data fields
                if (!apiResponse.success || !apiResponse.data) {
                    throw new Error('Blog post not found');
                }
                
                const blogData = apiResponse.data as BlogApiData;
                
                if (!blogData || Object.keys(blogData).length === 0) {
                    throw new Error('Blog post not found');
                }
                
                const transformedPost = transformApiDataToDetail(blogData);
                setBlogPost(transformedPost);

                // Fetch related posts if available
                if (transformedPost.relatedPosts && transformedPost.relatedPosts.length > 0) {
                    const relatedPromises = transformedPost.relatedPosts.map(async (relatedSlug: string) => {
                        try {
                            const relatedResponse = await fetch(`https://goldcorecpro.com/api/blogs.php?action=single&id=${relatedSlug}`);
                            if (relatedResponse.ok) {
                                const relatedApiResponse: BlogApiResponse = await relatedResponse.json();
                                if (relatedApiResponse.success && relatedApiResponse.data) {
                                    const relatedBlogData = relatedApiResponse.data as BlogApiData;
                                    return transformApiDataToDetail(relatedBlogData);
                                }
                            }
                        } catch {
                            console.error('Error fetching related post');
                            return null;
                        }
                        return null;
                    });

                    const relatedResults = await Promise.all(relatedPromises);
                    setRelatedPosts(relatedResults.filter((post): post is BlogDetailContent => post !== null));
                }
                
            } catch (error) {
                console.error('Error fetching blog detail:', error);
                setError(error instanceof Error ? error.message : 'Failed to load blog post');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogDetail();
    }, [slug]);

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
                // Fallback to clipboard
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const handleRelatedPostClick = (relatedSlug: string) => {
        navigate(`/blog/${relatedSlug}`);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop';
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
                        onError={handleImageError}
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
                                    onClick={() => handleRelatedPostClick(relatedPost.slug)}
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

// ===================================================================
// Blog.tsx - Updated to use slug instead of id
// ===================================================================

interface BlogPost {
    id: string;
    slug: string;
    type: 'featured' | 'grid';
    category: string;
    icon: LucideIcon;
    iconColor: string;
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    content?: string[];
    publishedDate?: string;
    readTime: string;
}

// Transform API data to BlogPost format
const transformApiData = (apiData: BlogApiData[]): BlogPost[] => {
    return apiData.map((item, index) => {
        const { icon, iconColor } = getIconAndColor(item.category || 'Featured Article');
        
        // Parse content if it's JSON string
        let parsedContent: string[] = [];
        if (item.content) {
            try {
                const contentObj = typeof item.content === 'string' ? JSON.parse(item.content) : item.content;
                if (typeof contentObj === 'object' && contentObj.introduction) {
                    parsedContent = [
                        contentObj.introduction,
                        // Add first section content as preview if available
                        contentObj.sections && contentObj.sections.length > 0 
                            ? `${contentObj.sections[0].heading}: ${contentObj.sections[0].content[0]}`
                            : ''
                    ].filter((text: string) => text);
                } else if (typeof item.content === 'string') {
                    parsedContent = [item.content];
                }
            } catch {
                parsedContent = typeof item.content === 'string' ? [item.content] : [];
            }
        }
        
        return {
            id: item.id?.toString() || index.toString(),
            slug: item.slug || item.id?.toString() || index.toString(),
            type: index === 0 ? 'featured' : 'grid', // First item as featured
            category: item.category || 'Featured Article',
            icon,
            iconColor,
            title: item.title || 'Untitled',
            description: item.description || item.excerpt || '',
            image: item.image_url || item.image || item.featured_image || 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop',
            imageAlt: item.image_alt || item.imageAlt || item.title || 'Blog post image',
            content: parsedContent,
            publishedDate: item.published_date || item.date || 'Recently published',
            readTime: item.read_time || '5 min read'
        };
    });
};

export const Blog = () => {
    const navigate = useNavigate();
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://goldcorecpro.com/api/blogs.php?action=all');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const apiResponse: BlogApiResponse = await response.json();
                
                // Handle the new API response structure with success and data fields
                if (!apiResponse.success || !apiResponse.data) {
                    throw new Error('No blog posts found');
                }
                
                const blogsArray = Array.isArray(apiResponse.data) ? apiResponse.data : [apiResponse.data];
                
                if (blogsArray.length === 0) {
                    throw new Error('No blog posts found');
                }
                
                const transformedPosts = transformApiData(blogsArray);
                setBlogPosts(transformedPosts);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError(error instanceof Error ? error.message : 'Failed to load blog posts');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleReadMore = (slug: string): void => {
        navigate(`/blog/${slug}`);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop';
    };

    // Loading state
    if (loading) {
        return (
            <div className="bg-[#64748b] bg-gradient-to-br from-slate-250 via-emerald-50/30 to-gray-100 min-h-screen">
                <NavigationMenuComponent />
                <div className='lg:px-24 px-4 py-4 lg:py-8'>
                    <h1 className="lg:text-4xl font-bold mb-4 lg:mb-8 text-[#1E293B] text-center">Hiring Trends & Insights</h1>
                    <div className="flex justify-center items-center h-64">
                        <div className="flex items-center gap-2">
                            <Loader2 className="h-8 w-8 animate-spin text-[#059669]" />
                            <span className="text-lg text-gray-600">Loading blog posts...</span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="bg-[#64748b] bg-gradient-to-br from-slate-250 via-emerald-50/30 to-gray-100 min-h-screen">
                <NavigationMenuComponent />
                <div className='lg:px-24 px-4 py-4 lg:py-8'>
                    <h1 className="lg:text-4xl font-bold mb-4 lg:mb-8 text-[#1E293B] text-center">Hiring Trends & Insights</h1>
                    <div className="flex justify-center items-center h-64">
                        <Card className="p-6">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-red-600 mb-2">Error Loading Blog Posts</h3>
                                <p className="text-gray-600 mb-4">{error}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-4 py-2 bg-[#059669] text-white rounded-lg hover:bg-[#059669]/70 transition-colors"
                                >
                                    Retry
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const featuredPost = blogPosts.find(post => post.type === 'featured');
    const gridPosts = blogPosts.filter(post => post.type === 'grid');

    // Handle case where no posts are available
    if (blogPosts.length === 0) {
        return (
            <div className="bg-[#64748b] bg-gradient-to-br from-slate-250 via-emerald-50/30 to-gray-100 min-h-screen">
                <NavigationMenuComponent />
                <div className="lg:px-24 px-4 py-4 lg:py-8">
                    <h1 className="lg:text-4xl font-bold mb-4 lg:mb-8 text-[#1E293B] text-center">Hiring Trends & Insights</h1>
                    <div className="text-center text-gray-500">No blog posts available</div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-[#64748b] bg-gradient-to-br from-slate-250 via-emerald-50/30 to-gray-100">
            <NavigationMenuComponent />
            <div className='lg:px-24 px-4 py-4 lg:py-8'>
                <h1 className="lg:text-4xl font-bold mb-4 lg:mb-8 text-[#1E293B] text-center">Hiring Trends & Insights</h1>
                <div className="flex flex-col lg:flex-row gap-5">
                    {/* Main Featured Article */}
                    {featuredPost && (
                        <div className="flex-1">
                            <Card className="h-full">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <featuredPost.icon className={`h-5 w-5 ${featuredPost.iconColor}`} />
                                        <span className="text-sm text-gray-500">{featuredPost.category}</span>
                                    </div>
                                    <CardTitle className="text-2xl">{featuredPost.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {featuredPost.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {featuredPost.image && (
                                        <img
                                            src={featuredPost.image}
                                            alt={featuredPost.imageAlt || 'Blog post image'}
                                            className="w-full h-64 object-cover rounded-lg mb-4"
                                            onError={handleImageError}
                                        />
                                    )}
                                    <div className="space-y-4">
                                        {featuredPost.content?.map((paragraph, index) => (
                                            <p key={index} className="text-gray-700 leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="h-4 w-4" />
                                            <span>{featuredPost.publishedDate}</span>
                                        </div>
                                        <button
                                            onClick={() => handleReadMore(featuredPost.slug)}
                                            className="px-4 py-2 bg-[#059669] text-white rounded-lg hover:bg-[#059669]/70 cursor-pointer transition-colors"
                                        >
                                            Read Full Article
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Grid of Smaller Articles */}
                    <div className="lg:w-80 grid grid-rows-auto gap-4">
                        {gridPosts.map((post) => (
                            <Card key={post.id} className="h-fit">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <post.icon className={`h-4 w-4 ${post.iconColor}`} />
                                        <span className="text-xs text-gray-500">{post.category}</span>
                                    </div>
                                    <CardTitle className="text-lg">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-600 mb-1.5">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-500">{post.readTime}</span>
                                        <span
                                            onClick={() => handleReadMore(post.slug)}
                                            className="text-[#059669]/85 hover:underline cursor-pointer"
                                        >
                                            Read more →
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};