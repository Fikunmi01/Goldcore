import { CaseStudyHero } from "@/components/case-study"
import { NavigationMenuComponent } from "@/components/navbar"

export const CaseStudy = () => {
    return (
        <div className="relative">
            <NavigationMenuComponent />
            <CaseStudyHero />
        </div>
    )
}