import { AboutUsHero } from "@/components/about-us"
import { NavigationMenuComponent } from "@/components/navbar"

export const AboutUs = () => {
    return (
        <div className="relative">
            <NavigationMenuComponent />
            <AboutUsHero/>
        </div>
    )
}