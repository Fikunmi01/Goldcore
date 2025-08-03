import { Footer } from '@/components/footer';
import { NavigationMenuComponent } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, TrendingUp, Users, BarChart3, Target, type LucideIcon } from 'lucide-react'
import { useNavigate, useParams } from 'react-router';

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
    content: {
        introduction: string;
        sections: {
            heading: string;
            content: string[];
        }[];
        conclusion: string;
    };
    relatedPosts?: string[];
}

const blogDetailsData: BlogDetailContent[] = [
    {
        id: 'future-remote-hiring-2024',
        category: 'Featured Article',
        icon: TrendingUp,
        iconColor: 'text-blue-600',
        title: 'The Future of Remote Hiring: 2024 Industry Report',
        description: 'An in-depth analysis of how remote work has transformed recruitment strategies across industries',
        author: 'Sarah Johnson',
        publishedDate: 'March 15, 2024',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop',
        imageAlt: 'Remote hiring trends',
        tags: ['Remote Work', 'Hiring', 'Technology', 'HR Trends'],
        content: {
            introduction: 'The landscape of hiring has undergone a dramatic transformation since 2020. Companies are now embracing fully remote hiring processes, with 73% of organizations reporting they plan to maintain remote interviewing even post-pandemic.',
            sections: [
                {
                    heading: 'The Rise of Virtual Interviews',
                    content: [
                        'Virtual interviews have become the new standard, with platforms like Zoom, Microsoft Teams, and specialized hiring tools seeing unprecedented adoption.',
                        'Companies report 60% faster hiring cycles when using remote interviewing processes, primarily due to reduced scheduling conflicts and travel time.',
                        'However, new challenges have emerged around candidate assessment and cultural fit evaluation in virtual environments.'
                    ]
                },
                {
                    heading: 'AI-Powered Screening Tools',
                    content: [
                        'Artificial intelligence is revolutionizing the initial screening process, with automated resume parsing and skill matching becoming commonplace.',
                        'Video interviewing platforms now offer AI-powered sentiment analysis and speech pattern recognition to assist recruiters.',
                        'While these tools increase efficiency, concerns about bias and fairness continue to be addressed by leading HR technology providers.'
                    ]
                },
                {
                    heading: 'Global Talent Pool Access',
                    content: [
                        'Remote hiring has opened access to global talent pools, with 45% of companies now hiring internationally.',
                        'This shift has led to increased competition for top talent but also greater diversity in hiring.',
                        'Companies are investing in tools and processes to manage different time zones, cultural differences, and legal requirements.'
                    ]
                }
            ],
            conclusion: 'The future of hiring is undoubtedly remote-first, with companies that adapt to these new methodologies gaining significant competitive advantages in talent acquisition.'
        },
        relatedPosts: ['top-skills-demand-2024', 'interview-success-rates']
    },
    {
        id: 'top-skills-demand-2024',
        category: 'Talent Acquisition',
        icon: Users,
        iconColor: 'text-green-600',
        title: 'Top 5 Skills in High Demand for 2024',
        description: 'Data shows these skills are commanding the highest salaries and fastest hiring rates in 2024',
        author: 'Michael Chen',
        publishedDate: 'March 12, 2024',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
        imageAlt: 'Skills development',
        tags: ['Skills', 'Career Development', 'Job Market', 'Technology'],
        content: {
            introduction: 'The job market continues to evolve rapidly, with certain skills commanding premium salaries and generating intense competition among employers. Our analysis of over 100,000 job postings reveals the most in-demand skills for 2024.',
            sections: [
                {
                    heading: '1. Artificial Intelligence and Machine Learning',
                    content: [
                        'AI/ML skills top the list with an average salary premium of 35% above market rate.',
                        'Demand has increased by 180% year-over-year, with companies across all industries seeking AI expertise.',
                        'Specific skills include Python, TensorFlow, PyTorch, and natural language processing.'
                    ]
                },
                {
                    heading: '2. Cloud Architecture and DevOps',
                    content: [
                        'Cloud skills remain critical as companies continue digital transformation initiatives.',
                        'AWS, Azure, and Google Cloud certifications are among the most valuable credentials.',
                        'DevOps engineers with Kubernetes and Docker experience are particularly sought after.'
                    ]
                },
                {
                    heading: '3. Cybersecurity Expertise',
                    content: [
                        'With increasing cyber threats, security professionals are in unprecedented demand.',
                        'Specialized skills in threat detection, incident response, and compliance are highly valued.',
                        'Average hiring time for cybersecurity roles is 40% longer than other tech positions due to talent scarcity.'
                    ]
                },
                {
                    heading: '4. Data Analysis and Visualization',
                    content: [
                        'Data-driven decision making has made analytics skills essential across all business functions.',
                        'Tools like Tableau, Power BI, and advanced Excel skills are baseline requirements.',
                        'Statistical analysis and business intelligence skills command premium salaries.'
                    ]
                },
                {
                    heading: '5. Digital Marketing and SEO',
                    content: [
                        'Digital marketing expertise continues to grow in importance as businesses focus on online presence.',
                        'SEO specialists and paid advertising experts are particularly in demand.',
                        'Content marketing and social media strategy skills are increasingly valuable.'
                    ]
                }
            ],
            conclusion: 'Professionals with these skills are not only in high demand but also enjoy faster career progression and higher compensation packages. Continuous learning and certification in these areas remain key to career success.'
        },
        relatedPosts: ['salary-trends-q1-2024', 'future-remote-hiring-2024']
    },
    {
        id: 'salary-trends-q1-2024',
        category: 'Market Analysis',
        icon: BarChart3,
        iconColor: 'text-purple-600',
        title: 'Salary Trends Q1 2024: Comprehensive Market Analysis',
        description: 'Comprehensive breakdown of salary increases across tech, finance, and healthcare sectors',
        author: 'Emily Rodriguez',
        publishedDate: 'March 10, 2024',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        imageAlt: 'Salary trends analysis',
        tags: ['Salary', 'Market Analysis', 'Compensation', 'Industry Trends'],
        content: {
            introduction: 'The first quarter of 2024 has seen significant shifts in compensation across major industries. Our comprehensive analysis of salary data from over 50,000 positions reveals key trends that will shape the remainder of the year.',
            sections: [
                {
                    heading: 'Technology Sector Leading Growth',
                    content: [
                        'Tech salaries increased by an average of 8.5% in Q1 2024, outpacing inflation and other sectors.',
                        'Software engineers and data scientists saw the highest increases, with senior roles commanding 15-20% premiums.',
                        'Remote work policies continue to influence compensation, with fully remote positions often paying 5-10% more.'
                    ]
                },
                {
                    heading: 'Healthcare Sector Stabilization',
                    content: [
                        'After years of dramatic increases, healthcare salaries are stabilizing with modest 4.2% growth.',
                        'Nursing shortages continue to drive premium pay, particularly for specialized roles.',
                        'Mental health professionals remain in high demand with significant salary growth.'
                    ]
                },
                {
                    heading: 'Financial Services Adaptation',
                    content: [
                        'Financial services saw mixed results, with fintech roles growing 12% while traditional banking remained flat.',
                        'Compliance and risk management roles command premium salaries due to regulatory requirements.',
                        'Investment in AI and automation is driving demand for tech-savvy finance professionals.'
                    ]
                }
            ],
            conclusion: 'Organizations must adapt their compensation strategies to remain competitive in this evolving market, with particular attention to tech skills and remote work preferences.'
        },
        relatedPosts: ['top-skills-demand-2024', 'interview-success-rates']
    },
    {
        id: 'interview-success-rates',
        category: 'Best Practices',
        icon: Target,
        iconColor: 'text-orange-600',
        title: 'Improving Interview Success Rates: A Complete Guide',
        description: 'Proven strategies that have helped companies reduce time-to-hire by 40% while improving candidate quality',
        author: 'David Kim',
        publishedDate: 'March 8, 2024',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=400&fit=crop',
        imageAlt: 'Job interview success',
        tags: ['Interviews', 'Hiring', 'Best Practices', 'HR Strategy'],
        content: {
            introduction: 'Successful interviewing is both an art and a science. Companies that master the interview process not only reduce time-to-hire but also significantly improve the quality of their hires and reduce turnover rates.',
            sections: [
                {
                    heading: 'Structured Interview Framework',
                    content: [
                        'Implementing a structured interview process increases hiring success rates by 25%.',
                        'Standardized questions ensure fair evaluation and reduce unconscious bias.',
                        'Behavioral interview techniques (STAR method) provide better predictors of job performance.'
                    ]
                },
                {
                    heading: 'Multi-Stage Assessment Process',
                    content: [
                        'Companies using 3-4 interview stages report 40% better long-term employee retention.',
                        'Initial screening, technical assessment, cultural fit, and final decision stages each serve specific purposes.',
                        'Involving multiple team members in the process reduces individual bias and improves decision quality.'
                    ]
                },
                {
                    heading: 'Candidate Experience Optimization',
                    content: [
                        'Positive candidate experience increases offer acceptance rates by 30%.',
                        'Clear communication, timely feedback, and respectful treatment are essential.',
                        'Even rejected candidates should leave with a positive impression of your company.'
                    ]
                }
            ],
            conclusion: 'The interview process is often a candidate\'s first real interaction with your company culture. Making it professional, respectful, and thorough sets the foundation for successful long-term employment relationships.'
        },
        relatedPosts: ['future-remote-hiring-2024', 'top-skills-demand-2024']
    }
];

export const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    const handleShare = () => {
        const blogPost = blogDetailsData.find(post => post.id === id);
        if (navigator.share) {
            navigator.share({
                title: blogPost?.title,
                text: blogPost?.description,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const handleRelatedPostClick = (relatedId: string) => {
        navigate(`/blog/${relatedId}`);
    };

    const blogPost = blogDetailsData.find(post => post.id === id);

    if (!blogPost) {
        return (
            <div className="px-24 py-8">
                <Card>
                    <CardContent className="text-center py-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
                        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
                        <button
                            onClick={handleGoBack}
                            className="px-4 py-2 bg-[#059669] text-white rounded-lg hover:bg-[#059669]/70 transition-colors"
                        >
                            Go Back to Blog
                        </button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (    
        <div className="  mx-auto bg-[#64748b] bg-gradient-to-br from-slate-250 via-emerald-50/30 to-gray-100">
            <NavigationMenuComponent />
            <div className="mb-6 px-24">
                <button
                    onClick={handleGoBack}
                    className="flex items-center gap-2 text-white font-outfit cursor-pointer hover:text-white/80 transition-colors mb-4"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </button>
            </div>

            {/* Main Article */}
            <Card className="mb-8 mx-24 font-outfit">
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
                </CardHeader>
                <CardContent>
                    <img
                        src={blogPost.image}
                        alt={blogPost.imageAlt}
                        className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
                    />

                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none mb-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {blogPost.content.introduction}
                        </p>
                    </div>

                    {/* Sections */}
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

                    {/* Conclusion */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Key Takeaway
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {blogPost.content.conclusion}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Related Posts */}
            {blogPost.relatedPosts && blogPost.relatedPosts.length > 0 && (
                <Card className='m-24 font-outfit'>
                    <CardHeader>
                        <CardTitle className="text-xl">Related Articles</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                            {blogPost.relatedPosts.map(relatedId => {
                                const relatedPost = blogDetailsData.find(post => post.id === relatedId);
                                if (!relatedPost) return null;

                                return (
                                    <div
                                        key={relatedId}
                                        className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                                        onClick={() => handleRelatedPostClick(relatedId)}
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
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            )}
            <Footer />
        </div>
    );
};