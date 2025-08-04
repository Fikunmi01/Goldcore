import { Button } from "@/components/ui/button"
import { Perks } from "./perks"
import { Footer } from "@/components/footer"

export const Hero = () => {
    return (
        <div className="bg-[#F8FAFC] absolute top-0 opacity-80  w-full ">
            <img src="/assets/hero2.jpg" alt="" className="w-[100vh] h-screen object-cover lg:h-full lg:w-full"
            />

            <div className="absolute lg:bottom-3/4 bottom-9/10 lg:inset-0 flex items-center lg:justify-end px-8 md:px-16 lg:px-24">
                <div className="text-white w-full lg:max-w-2xl text-center lg:text-right space-y-2">
                    <p className="font-outfit text-xs lg:text-lg font-medium leading-relaxed">
                        Call center, contact center, customer support hub—no matter what you call it,
                        GoldCore provides expert staffing solutions for every role.
                    </p>

                    <h1 className="font-redRose text-2xl md:text-6xl lg:text-5xl font-bold leading-tight">
                        The Roles We Staff
                    </h1>

                    <p className="font-outfit text-sm lg:text-lg font-medium leading-relaxed">
                        From frontline customer service representatives and administrative support to HR
                        professionals and contact center leadership, our staffing experts ensure you have
                        the right people to drive your team's success.
                    </p>

                    <div className="flex justify-center lg:justify-end pt-4">
                        <Button className="w-fit bg-transparent border border-[#f8fafc] hover:bg-[#2563EB] hover:border-[#2563EB] cursor-pointer rounded-full text-lg font-outfit font-medium px-8 py-3 transition-all duration-300">
                            Get Started Today
                        </Button>
                    </div>
                </div>
            </div>

            <Perks />
            <Footer />
        </div>
    )
}