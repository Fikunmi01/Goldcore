import { Hero } from "@/components/hero"
import { NavigationMenuComponent } from "@/components/navbar"
// import { Services } from "@/components/services"
export const Homepage = () => {
    return (
        <div className="relative">
            <NavigationMenuComponent />
            <Hero />
        </div>
    )
}