import { StarHalfIcon, StarIcon, UserIcon } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export const Review = () => {
    const reviewsArray = [
        {
            img: UserIcon,
            name: "Ellen Donegan",
            description: "I had the pleasure of working with Jennifer Cutrono-Teixeira from Hiregy, and she played a pivotal role in helping me land a position with an amazing company.",
            reviewCount: 4
        },
        {
            img: UserIcon,
            name: "Michael Chen",
            description: "Outstanding service! The team at Hiregy understood exactly what I was looking for and matched me with the perfect call center role.",
            reviewCount: 4.5
        },
        {
            img: UserIcon,
            name: "Sarah Johnson",
            description: "Professional, efficient, and truly cared about my career goals. I couldn't have asked for a better recruitment experience.",
            reviewCount: 5
        },
        {
            img: UserIcon,
            name: "David Rodriguez",
            description: "Hiregy made my job search seamless. Their expertise in call center staffing is unmatched. Highly recommend!",
            reviewCount: 4.5
        },
        {
            img: UserIcon,
            name: "Lisa Thompson",
            description: "From the first call to landing my dream job, Hiregy was with me every step of the way. Exceptional service and results.",
            reviewCount: 5
        },
    ]

    // Function to render stars based on rating
    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        // Add filled stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <StarIcon 
                    key={`filled-${i}`} 
                    className="w-3 h-3 fill-yellow-400  text-yellow-400" 
                />
            )
        }

        // Add half star if needed
        if (hasHalfStar) {
            stars.push(
                <StarHalfIcon 
                    key="half" 
                    className="w-3 h-3 fill-yellow-400 text-yellow-400" 
                />
            )
        }

        // Add empty stars to make total of 5
        const remainingStars = 5 - Math.ceil(rating)
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <StarIcon 
                    key={`empty-${i}`} 
                    className="w-5 h-5 text-gray-300" 
                />
            )
        }

        return stars
    }

    return (
        <div className="w-96 lg:w-full p-4 lg:p-16">
            <h1 className="text-2xl lg:text-4xl font-bold font-redRose">Your call center's success starts here</h1>
            <p className="text-xs lg:text-lg font-outfit">Imagine a thriving call center powered by a reliable, high-performance team:</p>
            <div className="flex flex-col lg:flex-row  gap-x-4">
                <p className="text-[#1E293B] py-1 my-1 lg:my-3 font-poppins text-sm rounded-full border border-[#1E293B] w-fit px-4">Exceed Sales and Growth Targets</p>
                <p className="text-[#1E293B] py-1 my-1 lg:my-3 font-poppins text-sm rounded-full border border-[#1E293B] w-fit px-4">Delight Customers with Exceptional Service</p>
                <p className="text-[#1E293B] py-1 my-1 lg:my-3 font-poppins text-sm rounded-full border border-[#1E293B] w-fit px-4">Save Time, Resources, and Money</p>
                <p className="text-[#1E293B] py-1 my-1 lg:my-3 font-poppins text-sm rounded-full border border-[#1E293B] w-fit px-4">Cultivate a Team Culture that Delivers</p>
            </div>
            <p className="text-lg font-outfit  lg:w-2/3">With GoldCore, you can stop worrying about hiring challenges
                and focus on what matters most—your call center's growth and impact
            </p>

            <h1 className="text-3xl font-semibold font-outfit text-center mt-12 mb-8">Client reviews</h1>

            <div className="mt-8 relative">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {reviewsArray.map((review, index) => {
                            const UserIconComponent = review.img
                            return (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="h-50 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <CardContent className="px-4 h-full flex flex-col">
                                            {/* User Info */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 bg-gradient-to-br from-[#059669] to-[#047857] rounded-full flex items-center justify-center">
                                                    <UserIconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg font-outfit text-[#1E293B]">
                                                        {review.name}
                                                    </h3>
                                                    {/* Star Rating */}
                                                    <div className="flex items-center gap-1">
                                                        {renderStars(review.reviewCount)}
                                                        <span className="text-sm text-gray-600  font-medium">
                                                            {review.reviewCount}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Review Text */}
                                            <div className="flex-1">
                                                <p className="text-gray-700 font-poppins text-sm leading-relaxed">
                                                    "{review.description}"
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="-left-12 bg-white hover:bg-gray-50 border-2 border-[#059669] text-[#059669]" />
                    <CarouselNext className="-right-12 bg-white hover:bg-gray-50 border-2 border-[#059669] text-[#059669]" />
                </Carousel>
            </div>
        </div>
    )
}