import { useState } from "react"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Plus, Minus } from "lucide-react"
import { Footer } from "../footer"

const faqData = [
    {
        id: 1,
        question: "What does GoldCore do?",
        answer: "We improve lives by connecting exceptional people. We do this by helping companies identify and hire talented employees in contract, contract-to-hire or direct hire capacity."
    },
    {
        id: 2,
        question: "What industries do you specialize in?",
        answer: "We specialize in healthcare, technology, finance, manufacturing, and professional services. Our experienced recruiters have deep knowledge in these sectors to match the right talent with the right opportunities."
    },
    {
        id: 3,
        question: "Do you offer temporary or permanent placements?",
        answer: "We offer both temporary and permanent placements, as well as contract-to-hire positions. This flexibility allows us to meet diverse client needs and provide various career opportunities for job seekers."
    },
    {
        id: 4,
        question: "How long does the recruitment process typically take?",
        answer: "The timeline varies depending on the role complexity and requirements. Typically, we can present qualified candidates within 1-2 weeks, with final placement occurring within 2-4 weeks from the start of the search."
    },
    {
        id: 5,
        question: "What geographic areas do you serve?",
        answer: "We serve clients and candidates across multiple regions, with a focus on major metropolitan areas. Our network allows us to source talent both locally and nationally, depending on your specific needs."
    },
    {
        id: 6,
        question: "Do you provide any guarantees on placements?",
        answer: "Yes, we stand behind our placements with comprehensive guarantee periods. For permanent placements, we typically offer a 90-day replacement guarantee. Terms may vary based on the specific role and agreement."
    },
    {
        id: 7,
        question: "How do you ensure candidate quality?",
        answer: "We use a rigorous screening process that includes skills assessment, background checks, reference verification, and cultural fit evaluation. Our experienced recruiters personally interview every candidate before presenting them to clients."
    },
    {
        id: 8,
        question: "What are your fees and pricing structure?",
        answer: "Our pricing is competitive and varies based on the type of placement and role level. We offer transparent pricing with no hidden fees. Contact us for a detailed discussion about pricing for your specific needs."
    }
]

export const FAQHero = () => {
    const [openFAQs, setOpenFAQs] = useState(new Set())

    const toggleFAQ = (id: number) => {
        const newOpenFAQs = new Set(openFAQs)
        if (newOpenFAQs.has(id)) {
            newOpenFAQs.delete(id)
        } else {
            newOpenFAQs.add(id)
        }
        setOpenFAQs(newOpenFAQs)
    }

    return (
        <div className="bg-[#1E293B] absolute top-0 w-full">
            <div className="bg-[#F8FAFC] flex-col mt-23 w-full flex items-center justify-center p-4 lg:p-16 relative">
                <h1 className="font-redRose lg:text-3xl text-2xl text-center font-bold text-[#1E293B] mb-4">
                    Frequently Asked Questions
                </h1>
                <p className="text-xl font-outfit lg:w-2/3 text-center mx-auto mb-8">
                    Here are answers to common questions about our company.
                    Have any more questions? Feel free to contact us and request a free consultation.
                </p>

                <div className="lg:w-2/3 space-y-4">
                    {faqData.map((faq) => (
                        <Card key={faq.id} className="transition-all duration-200 hover:shadow-md">
                            <CardHeader
                                className="cursor-pointer"
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="font-rubik text-xl font-semibold text-left flex-1 pr-4">
                                        {faq.question}
                                    </p>
                                    <div className="flex-shrink-0 transition-transform duration-200">
                                        {openFAQs.has(faq.id) ? (
                                            <Minus className="h-5 w-5 text-[#1E293B]" />
                                        ) : (
                                            <Plus className="h-5 w-5 text-[#1E293B]" />
                                        )}
                                    </div>
                                </div>
                            </CardHeader>

                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFAQs.has(faq.id)
                                ? 'max-h-96 opacity-100'
                                : 'max-h-0 opacity-0'
                                }`}>
                                <CardContent className="pt-0">
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="font-outfit text-lg text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>


                <div className="my-4">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center font-redRose text-[#1E293B] mt-8 mb-4">Still have a Question?</h2>


                    <button className="flex cursor-pointer mx-auto text-center rounded-full px-4 font-rubik py-1 text-[#fff] bg-[#059669]">Contact us</button>
                </div>
            </div>

            <div className="z-99">
                <Footer />

            </div>
        </div>
    )
}