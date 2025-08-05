import { Heart, Puzzle, Shield, Sunrise, TargetIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Link } from "react-router"
import { Footer } from "../footer"

export const AboutUsHero = () => {
    const aboutUsArray = [
        {
            icon: Heart,
            description: "We BELIEVE! We believe what we do makes a difference for our clients and our community."
        },
        {
            icon: Sunrise,
            description: "We are OPTIMISTIC! We think more is possible than impossible – always looking for opportunity."
        },
        {
            icon: Shield,
            description: "We VALUE LONG-LASTING RELATIONSHIPS built on trust!"
        },
        {
            icon: Puzzle,
            description: "We THRIVE TOGETHER! We elevate each other and work together as one."
        },
        {
            icon: TargetIcon,
            description: "We get RESULTS! We are self-starters who focus, do what we say we are going to do and get things done."
        },
    ]

    // Fixed team array with consistent structure
    const teamArray = [
        {
            img: "/assets/team4.png",
            name: "Joseph Alexandrou",
            position: "Client Relations Manager"
        },
        {
            img: "/assets/team2.png",
            name: "Shaun Androff",
            position: "Executive Vice President"
        },
        {
            img: "/assets/team4.png",
            name: "Gustavo A. Collazos",
            position: "Director of Marketing"
        },
        {
            img: "/assets/team3.png",
            name: "Jennifer Cutrono-Teixeira",
            position: "Senior Client Services Manager"
        },
        {
            img: "/assets/team3.png",
            name: "Stephaney Lacour",
            position: "Services Manager"
        },
        {
            img: "/assets/team2.png",
            name: "Courtney Dangerfield",
            position: "Client Services Manager"
        },

    ]

    return (
        <div className="bg-[#F8FAFC] absolute top-0 opacity-80 w-full">
            <img src="/assets/about-us.jpg" alt="" className="w-full h-full object-cover lg:h-full lg:w-full" />

            <div className="absolute inset-0 flex items-center bottom-17/18 z-99 lg:bottom-3/4 justify-center px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="text-white w-full max-w-2xl text-center space-y-2">
                    <h1 className="font-redRose text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        About Us
                    </h1>
                </div>
            </div>

            <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center font-outfit text-[#1E293B]">Make hiring easy</h2>
                <p className="font-rubik text-center my-4 mx-auto text-sm sm:text-base md:text-lg w-full sm:w-4/5 md:w-3/4">
                    We're 100% focused on making hiring easy for call center leaders so they can build a high-performing team that exceeds goals and delights customers.
                    We started by staffing customer service representatives in 2004 and we've never looked back. We've successfully placed thousands of candidates in hundreds of companies across the U.S!
                </p>

                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center font-outfit text-[#1E293B] mt-8 mb-4">Our core values</h2>

                {/* Responsive grid for values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 lg:my-4">
                    {aboutUsArray.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <Card key={index} className="backdrop-blur-sm rounded-xl my-2 lg:my-4 shadow-lg">
                                <CardHeader className="flex justify-center items-center">
                                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#059669]" />
                                </CardHeader>

                                <p className="px-3 font-rubik text-sm text-center">
                                    {item.description}
                                </p>
                            </Card>
                        )
                    })}
                </div>

                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center font-outfit text-[#1E293B] mt-8 mb-4">Our exceptional team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
                    {teamArray.map((item, index) => {
                        return (
                            <Card key={index} className="backdrop-blur-sm rounded-xl lg:my-4 shadow-lg">
                                <CardHeader className="flex justify-center items-center">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-contain bg-gray-200"
                                    />
                                </CardHeader>
                                <CardContent className="text-center">
                                    <h3 className="font-rubik font-semibold text-sm sm:text-base text-[#1E293B] mb-1">
                                        {item.name}
                                    </h3>
                                    <p className="font-rubik text-xs sm:text-sm text-gray-600">
                                        {item.position}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <div className="my-4">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center font-outfit text-[#1E293B] mt-8 mb-4">Ready to build your dream team?</h2>
                    <p className="font-rubik text-center my-4 mx-auto text-sm sm:text-base md:text-lg w-full sm:w-4/5 md:w-3/4">
                        You’ve seen how passionate we are about connecting the right people with the right opportunities. Ready to see what we can do for you? Let’s chat—we’ll bring the coffee (and the candidates).
                    </p>

                    <button className="flex cursor-pointer mx-auto text-center rounded-full px-4 font-rubik py-1 text-[#fff] bg-[#059669]">Schedule a call now</button>
                </div>

                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center font-outfit text-[#1E293B] mt-8 mb-4">Ready to join a team as passionate as ours?</h2>
                <p className="font-rubik text-center my-4 mx-auto text-sm sm:text-base md:text-lg w-full sm:w-4/5 md:w-3/4">
                    Just like we connect businesses with great talent, we’re here to connect YOU with great call center careers.
                </p>

                <Link to="/job-seeker">
                    <button className="cursor-pointer flex mx-auto text-center rounded-full px-4 font-rubik py-1 text-[#fff] bg-[#059669]">View All Jobs</button>
                </Link>
            </div>

            <Footer />
        </div>
    )
}