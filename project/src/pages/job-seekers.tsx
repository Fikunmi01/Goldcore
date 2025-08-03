import { Hero } from "@/components/job-seeker"
import { NavigationMenuComponent } from "@/components/navbar"

export const JobSeeker = () => {
    return (
        <div className="relative">
            <NavigationMenuComponent />
            <Hero />
        </div>
    )
}