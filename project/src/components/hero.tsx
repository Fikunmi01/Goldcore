import { ChartSplineIcon, ClipboardCheck, UserCheck } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardDescription, CardTitle } from "./ui/card"
import { Services } from "./services"
import { Review } from "./review"
import { Blog } from "./blog"
import { Link } from "react-router"

export const Hero = () => {
    const cardItems = [
        {
            title: "Exceed Your Goals",
            description: "Achieve peak performance with skilled talent who are ready to step in and make an impact.",
            icon: ChartSplineIcon,
        },
        {
            title: "Delight Your Customers",
            description: "Boost customer satisfaction and retain talent with the right team. We’ll present you with pre-screened, candidates .",
            icon: UserCheck,
        },
        {
            title: "Lead With Confidence",
            description: "Focus on leading your team and growing your business, not stressing over hiring challenges.",
            icon: ClipboardCheck,
        }
    ]
    return (
        <div className="bg-[#F8FAFC]  lg:w-full absolute top-0 opacity-80 overflow-hidden">

            <img
                src="/assets/hero-bg.jpg"
                className=" w-full h-96 object-cover lg:h-full lg:w-full"
                alt=""
            />
            <div className=" absolute top-32 lg:top-48 px-4 lg:px-8 text-white">
                <p className="font-outfit text-center lg:text-left text-xs lg:text-base font-medium">Your call Center's Success Starts with expert Staffing Solution</p>
                <h1 className="font-redRose  text-center lg:text-left text-4xl lg:text-7xl lg:w-2/5 font-bold">Call Center Staffing Made Simple</h1>
                <div className="flex-col justify-center items-center lg:items-start lg:left-0 relative lg:justify-start flex gap-4">
                    <span className="flex items-center gap-3 lg:gap-5 lg:w-96">
                        <p className="lg:w-96 text-lg font-outfit font-medium">call center staffing </p>
                        <p className="lg:w-96 text-lg font-outfit font-medium">job seekers  </p>
                    </span>
                    <span className="flex gap-2.5 lg:gap-5 items-center justify-center  lg:justify-start w-full">
                        {/* <Button className="lg:w-fit bg-transparent border border-[#f8fafc] hover:bg-[#2563EB] cursor-pointer rounded-full text-xs lg:text-lg font-outfit font-medium">find your next hire</Button> */}
                        <Link to="/job-seeker">
                            <Button className="lg:w-fit border-[#F8FAFC]  lg:text-lg rounded-full hover:bg-accent hover:text-[#059669]  hover:border-[#059669] bg-[#059669] cursor-pointer font-outfit font-medium">find your next job</Button>

                        </Link>
                    </span>
                </div>
            </div>
            <div className="bg-[#F8FAFC] lg:w-full p-2 lg:px-8 lg:py-8">

                <div className="flex flex-col-reverse lg:flex-row lg:justify-around lg:w-full">
                    <span className="flex  lg:w-1/2 flex-col gap-y-4">
                        <h2 className="font-redRose  font-bold text-[#059669] text-3xl lg:text-6xl">hiring shouldn't be hard </h2>
                        {/* <span className=" text-[#1E293B] flex mb-10 justify-end "> */}
                        <p className="text-left font-outfit text-base w-full lg:text-xl ">We understand running a call center without the right team is overwhelming.

                            We make it simple to build a high-performing team that drives results.</p>
                        {/* </span> */}
                        <Link to="/contact-us">
                            <Button className="bg-[#059669] hover:bg-[#059669]/80 w-fit font-lato font-medium text-base">Schedule a call today</Button>

                        </Link>

                    </span>

                    <div className="lg:w-1/3 mb-4 lg:mb-0" >
                        <img src="/assets/download1.jpg" alt="" />

                    </div>

                </div>

                <span className="flex flex-col lg:w-full lg:flex-row justify-center items-center  mt-10 lg:px-10 gap-6">
                    {cardItems.map((item, idx) => {
                        const Icon = item.icon
                        return (
                            <Card
                                key={idx}
                                className="flex-1 min-w-0 h-64 flex flex-col items-start px-4 py-6 relative"
                            >
                                <Icon className=" text-[#059669]" />
                                <CardTitle className="text-4xl lg:w-2/3 font-rubik">{item.title}</CardTitle>
                                <CardDescription className="text-lg font-poppins">{item.description}</CardDescription>
                            </Card>
                        )
                    })}
                </span>
            </div>
            <Services />
            <Review />

            <div className=" lg:py-8 py-4 px-3 lg:px-16 ">
                <div className="flex lg:flex-row flex-col justify-between">
                    <h1 className="font-bold text-2xl lg:text-5xl font-redRose lg:w-1/2">Is your training costing you talent?</h1>
                    <div className="lg:w-1/3">
                        <p className="font-outfit  text-lg">Your training may be well-intentioned, but is it effective?</p>
                        <button className="bg-[#059669]/50 px-3 py-1 text-white font-outfit border-[#059669] border mt-1 rounded-full">Download Your Free Copy Here</button>
                    </div>

                </div>
                <div className="grid my-10 grid-cols-1 gap-y-4 lg:grid-cols-3 gap-x-4">
                    <div className="">
                        <img src="/assets/job-seeker1.jpg" className="border-2 border-[#64748b] object-contain rounded-2xl" alt="" />
                    </div>
                    <div className="">
                        <img src="/assets/job-seeker2.jpg" className="border-2 border-[#64748b] object-contain rounded-2xl" alt="" />
                    </div>
                    <div className="">
                        <img src="/assets/job-seeker3.jpg" className="border-2 border-[#64748b] object-contain rounded-2xl" alt="" />
                    </div>
                </div>
            </div>

            <Blog />
            {/* <Footer /> */}
        </div>
    )
}