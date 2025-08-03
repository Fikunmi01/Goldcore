import { NavigationMenuComponent } from "@/components/navbar"
import { Hero } from "./roles-we-staff/hero"

export const RolesWeStaff=()=> {
    return (
        <div className="relative">
            <NavigationMenuComponent/>
            <Hero/>
        </div>
    )
}