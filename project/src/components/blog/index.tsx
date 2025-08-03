import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Users, Calendar, BarChart3, Target, type LucideIcon, } from 'lucide-react'
import { useNavigate } from 'react-router';
import { NavigationMenuComponent } from '../navbar';
import { Footer } from '../footer';


interface BlogPost {
    id: string;
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

const blogPosts: BlogPost[] = [
    {
        id: 'future-remote-hiring-2024',
        type: 'featured',
        category: 'Featured Article',
        icon: TrendingUp,
        iconColor: 'text-blue-600',
        title: 'The Future of Remote Hiring: 2024 Industry Report',
        description: 'An in-depth analysis of how remote work has transformed recruitment strategies across industries',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop',
        imageAlt: 'Remote hiring trends',
        content: [
            'The landscape of hiring has undergone a dramatic transformation since 2020. Companies are now embracing fully remote hiring processes, with 73% of organizations reporting they plan to maintain remote interviewing even post-pandemic.',
            'This comprehensive report examines the key trends shaping modern recruitment, from AI-powered screening tools to virtual onboarding experiences that create lasting employee engagement.'
        ],
        publishedDate: 'Published 2 days ago',
        readTime: '12 min read'
    },
    {
        id: 'top-skills-demand-2024',
        type: 'grid',
        category: 'Talent Acquisition',
        icon: Users,
        iconColor: 'text-green-600',
        title: 'Top 5 Skills in High Demand',
        description: 'Data shows these skills are commanding the highest salaries and fastest hiring rates in 2024.',
        readTime: '5 min read'
    },
    {
        id: 'salary-trends-q1-2024',
        type: 'grid',
        category: 'Market Analysis',
        icon: BarChart3,
        iconColor: 'text-purple-600',
        title: 'Salary Trends Q1 2024',
        description: 'Comprehensive breakdown of salary increases across tech, finance, and healthcare sectors.',
        readTime: '8 min read'
    },
    {
        id: 'interview-success-rates',
        type: 'grid',
        category: 'Best Practices',
        icon: Target,
        iconColor: 'text-orange-600',
        title: 'Improving Interview Success Rates',
        description: 'Proven strategies that have helped companies reduce time-to-hire by 40% while improving candidate quality.',
        readTime: '6 min read'
    }
];

export const Blog = () => {
    const navigate = useNavigate()
    const handleReadMore = (id: string): void => {
        navigate(`/blog/${id}`);
        console.log('Navigating to:', `/blog/${id}`);
    };

    const featuredPost = blogPosts.find(post => post.type === 'featured');
    const gridPosts = blogPosts.filter(post => post.type === 'grid');

    // Handle case where no featured post is found
    if (!featuredPost) {
        return (
            <div className="px-24 py-8">
                <h1 className="text-4xl font-bold mb-8 text-[#1E293B] text-center">Hiring Trends & Insights</h1>
                <div className="text-center text-gray-500">No featured post available</div>
            </div>
        );
    }

    return (
        <div className=" bg-[#64748b] bg-gradient-to-br from-slate-250 via-emerald-50/30 to-gray-100">
            <NavigationMenuComponent />
            <div className='px-24 py-8'>
                <h1 className="text-4xl font-bold mb-8 text-[#1E293B] text-center">Hiring Trends & Insights</h1>
                <div className="flex gap-5">
                    {/* Main Featured Article */}
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
                                    />
                                )}
                                {featuredPost.content?.map((paragraph, index) => (
                                    <p key={index} className="text-gray-700 mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar className="h-4 w-4" />
                                        <span>{featuredPost.publishedDate || 'Recently published'}</span>
                                    </div>
                                    <button
                                        onClick={() => handleReadMore(featuredPost.id)}
                                        className="px-4 py-2 bg-[#059669] text-white rounded-lg hover:bg-[#059669]/70 cursor-pointer transition-colors"
                                    >
                                        Read Full Article
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Grid of Smaller Articles */}
                    <div className="w-80 grid grid-rows-3">
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
                                            onClick={() => handleReadMore(post.id)}
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
    )
}