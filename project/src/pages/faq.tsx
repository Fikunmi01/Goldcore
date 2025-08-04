import { FAQHero } from "@/components/faq"
import { NavigationMenuComponent } from "@/components/navbar"

export const FAQPage = () => {
    return (
        <div className=" bg-[#1E293B]">
            <NavigationMenuComponent />
            <FAQHero/>
        </div>
    )
}