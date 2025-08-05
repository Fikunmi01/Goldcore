import { Footer } from "../footer"
import { Card, CardContent, CardHeader } from "../ui/card"

export const CaseStudyHero = () => {
    const caseStudyArray = [
        {
            header: "CASE STUDY: Solving a $1M Leadership Vacancy for a Florida Call Center",
            description: "When a leading entertainment company struggled for months to fill a key leadership role, GoldCore stepped in and delivered. See how we helped them protect revenue, restore performance, and fill a million-dollar gap in just weeks.",

        },
        {
            header: "Training Effectiveness Survey Template",
            description: "Is Your Training Setting New Call Center Reps Up for Success? That’s why we created a ready-to-use Call Center Training Survey Template. This template is ready built to help you uncover what’s working (and what’s not) in your onboarding process.",

        },
        {
            header: "10 Interview Questions for Call Center Success",
            description: "With this free guide, you’ll gain the tools to identify candidates with the skills, mindset, and character your team needs to succeed.",

        },
        {
            header: "CASE STUDY Overcoming Seasonal Staffing Challenges in Healthcare Call Centers",
            description: "Struggling with seasonal staffing in your healthcare call center? Discover how GoldCore swiftly filled the gaps, ensuring seamless service and significant savings for a healthcare technology company during peak periods.",

        },
        {
            header: "Top 22 Interview Questions for Call Center Excellence!",
            description: "Equip yourself with the right questions to identify the best candidates. Get our exclusive guide and elevate your hiring game now!",

        },
        {
            header: "How to be a Resume Detective",
            description: "GoldCore’s How To Be A Resume Detective aims to turn hiring managers into Resume Detectives, eagle-eyed recruiting gumshoes that can sniff out the perfect candidate from a simple 8.5″ x 11″ piece of paper.",

        }

    ]
    return (
        <div className="bg-[#F8FAFC] absolute top-0  w-full">
            <img className="w-full h-96 object-cover lg:h-full lg:w-full" src="/assets/case-studyhero.jpg"  alt="" />
            <div className="absolute top-24 lg:top-48 text-center lg:text-start lg:px-8 text-[#fff]">
                <p className="font-outfit text-base font-semibold">Case studies and resources</p>
                <h1 className="font-redRose text-2xl lg:text-5xl lg:w-3/5 font-bold">Explore how we have empowered call centers to overcome obstacles and achieve excellence through our tailored, effective staffing solutions.</h1>
            </div>

            <div className="grid p-4 grid-cols-1 lg:grid-cols-3 gap-6 lg:p-16">
                {caseStudyArray.map((item,index) => {
                    return (
                        <Card key={index}>
                            <CardHeader className="">
                                <h3 className="font-rubik text-xl font-semibold">
                                    {item.header}
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="font-outfit">{item.description}</p>
                            </CardContent>
                        </Card>
                    )
                })}

            </div>
            <Footer/>
        </div>
    )
}