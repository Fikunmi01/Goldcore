import { ClipboardEditIcon, Handshake, HeadsetIcon, Users2 } from "lucide-react"
import { Card } from "./ui/card"
import CountUp from 'react-countup'

export const Services = () => {
    
    const serviceItem = [
        {
            icon: ClipboardEditIcon,
            title: "Connect with us",
            description: "Share your staffing needs in a quick, no pressure call"
        },
        {
            icon: Handshake,
            title: "Review quality candidate ",
            description: "We'll present you with pre-screened, high-quality candidates "
        },
        {
            icon: Users2,
            title: "Hire with confidence and ease",
            description: "Build your team and enjoy ongoing support to ensure the success of your call center."
        },
    ]
    return (
        <div>
            <div className="lg:p-16  lg:w-full p-8 bg-[#059669]/90">
                <h1 className="lg:text-5xl text-2xl text-[#fff] text-center font-outfit">We Make Hiring Simple </h1>
                <p className="text-center text-lg text-white font-rubik  lg:w-2/3 mx-auto mt-2">Finding skilled, reliable talent shouldn't feel impossible.
                    With GoldCore, you can build your team in three easy steps;</p>
                <div className="flex flex-col lg:flex-row gap-x-10">
                    {serviceItem.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index}
                                className="flex-1 min-w-0  text-white flex flex-col justify-center items-center gap-y-2 my-5 lg:my-10 bg-transparent"
                            >
                                <Icon className="text-[#fff] w-12 h-12 " />
                                <h2 className="text-2xl text-center font-redRose">{item.title}</h2>
                                <p className="text-center text-lg font-outfit">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="lg:p-16 p-4 w-full flex flex-col lg:flex-row lg:gap-x-20">
                <div className="lg:w-1/2 ">
                    <h1 className="lg:text-5xl text-2xl font-redRose ">Staffing every role in your call center</h1>
                    <p className="font-poppins text-sm text-[#111827]">
                        Your call center success starts with the right people at every level. Whether you need skilled customer service representatives in your pharmacy, dispatch or service technicians, technical support, or helpdesk representatives we are here to help.
                        We staff experienced leaders and team managers, visionary VPs, and workforce, training and quality control managers.  No matter the industry, Hiregy delivers top-tier talent tailored to your needs. Our expertise ensures your call center operates efficiently, meets goals, and delights customers.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-y-3 lg:items-center gap-x-1 my-4 lg:mt-4 font-semibold">
                        <button className="text-[#fff] text-[10px] font-outfit bg-[#059669] cursor-pointer px-4 py-2 rounded-full">Explore All Our Staffing Solutions</button>
                        <button className="border-[#059669] text-xs border px-4 font-outfit py-2 cursor-pointer rounded-full">Let's Find the Talent You Need</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4  lg:w-4/5">
                    <div className="flex flex-col-reverse lg:gap-y-4 gap-y-4">
                        <Card className="p-3 flex gap-x-2 flex-row items-start bg-gradient-to-r from-[#34D399] to-[#047857]">
                            <HeadsetIcon className="text-white w-14 h-14" />
                            <div>
                                <h2 className="font-outfit text-lg w-fit mb-2 leading-relaxed font-semibold text-white">Customer Service Representatives</h2>
                                <p className="font-rubik text-white text-sm">Reliable, skilled professionals who provide exceptional customer experiences.</p>
                            </div>
                        </Card>
                        <Card className="p-3 flex gap-x-2 flex-row items-start ">
                            <HeadsetIcon className="text-[#059669] w-14 h-14" />
                            <div>
                                <h2 className="font-outfit text-lg w-fit mb-2 leading-relaxed font-semibold text-[#059669]">Customer Service Representatives</h2>
                                <p className="font-rubik text-[#059669] text-sm">Reliable, skilled professionals who provide exceptional customer experiences.</p>
                            </div>
                        </Card>
                    </div>
                    <div className="flex flex-col top-5 lg:top-10 gap-y-4 relative ">
                        <Card className="p-3 flex gap-x-2 flex-row items-start ">
                            <HeadsetIcon className="text-[#059669] w-14 h-14" />
                            <div>
                                <h2 className="font-outfit text-lg w-fit mb-2 leading-relaxed font-semibold text-[#059669]">Customer Service Representatives</h2>
                                <p className="font-rubik text-[#059669] text-sm">Reliable, skilled professionals who provide exceptional customer experiences.</p>
                            </div>
                        </Card>
                        <Card className="p-3 flex gap-x-2 flex-row items-start bg-gradient-to-r from-[#34D399] to-[#047857]">
                            <HeadsetIcon className="text-white w-14 h-14" />
                            <div>
                                <h2 className="font-outfit text-lg w-fit mb-2 leading-relaxed font-semibold text-white">Customer Service Representatives</h2>
                                <p className="font-rubik text-white text-sm">Reliable, skilled professionals who provide exceptional customer experiences.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#34D399] via-[#065f46] to-[#34D399]  p-4 my-10 lg:my-0 lg:w-full lg:p-16 text-white">
                <h1 className="font-redRose text-2xl lg:text-5xl text-center">We Understand the pressure of building a winning call center team </h1>
                <p className="lg:w-2/3 mx-auto text-center text-base lg:text-xl font-outfit mt-3">
                    You need a team that delivers results without wasting time, money, or resources.
                    At Hiregy, we make it easy to build the team your call center needs to thrive. From pre-screening candidates to ongoing support,
                    we've helped hundreds of call center leaders achieve their goals—and we're ready to help you.
                </p>


                <div className="grid lg:grid-cols-3 lg:w-2/3 mx-auto text-center my-8 gap-y-4 lg:gap-x-8">
                    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <p className="text-4xl font-bold mb-2 text-white">
                            <CountUp
                                start={0}
                                end={20}
                                duration={2.5}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                suffix="+"
                            />
                        </p>
                        <p className="text-lg font-outfit text-white/90">years of call center staffing expertise</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <p className="text-4xl font-bold mb-2 text-white">
                            <CountUp
                                start={0}
                                end={14131}
                                duration={3}
                                separator=","
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                suffix="+"
                            />
                        </p>
                        <p className="text-lg font-outfit text-white/90">placements and counting</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <p className="text-4xl font-bold mb-2 text-white">
                            <CountUp
                                start={0}
                                end={830}
                                duration={2.8}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                suffix="+"
                            />
                        </p>
                        <p className="text-lg font-outfit text-white/90">trusted clients nationwide</p>
                    </div>
                </div>

                <button className="bg-[#059669] backdrop-blur-xl border-2xl border-[#059669] cursor-pointer font-outfit font-semibold text-base text-white px-4 py-2 text-center mx-auto flex justify-center rounded-full hover:bg-[#059669]/30 transition-all duration-300">
                    Let's Build Your Team - Schedule a Call Today
                </button>
            </div>
        </div>
    )
}