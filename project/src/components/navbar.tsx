import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenuComponent() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            // You can adjust this threshold (100px) based on your needs
            setIsScrolled(scrollPosition > 100)
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`
            font-redRose text-white hover:text-white flex items-center justify-between z-50 
            fixed top-0 left-0 right-0  px-8 transition-all duration-300 ease-in-out
            ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#FFD700]/50'
                : 'bg-transparent py-4 relative z-20'
            }
        `}>

            {isScrolled ?
                <button className="font-redRose text-2xl  rounded-2xl p-4">
                    <img src="/assets/logo-black.jpg" className="object-contain rounded-2xl w-20 relative" alt="" />
                </button>

                :

                <button className="font-redRose text-2xl rounded-2xl ">
                    <img src="/assets/logo-white.jpg" className="rounded-2xl object-contain w-20" alt="" />
                </button>

            }

            <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex gap-x-2">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-gray-200'
                                }`}
                        >
                            Staffing Solutions
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-56 bg-white">
                                <ListItem href="/roles-we-staff" title="The Roles We Staff" />
                                {/* <ListItem href="/docs/installation" title="Sales Recruiting" /> */}
                                {/* <ListItem href="/docs/primitives/typography" title="Call Center Staffing" /> */}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-gray-200'
                                }`}
                        >
                            <Link to="/job-seeker">For Job Seekers</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-gray-200'
                                }`}
                        >
                            <Link to="/docs">About Us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-gray-200'
                                }`}
                        >
                            Insights
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-56 bg-white">
                                <li className="space-y-2 p-2">
                                    <NavigationMenuLink asChild>
                                        <Link to="/blog" className="block p-2 rounded hover:bg-gray-100">
                                            <div className="font-medium text-gray-900">Our Blog</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="#" className="block p-2 rounded hover:bg-gray-100">
                                            <div className="font-medium text-gray-900">Case Studies & Resources</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="#" className="block p-2 rounded hover:bg-gray-100">
                                            <div className="font-medium text-gray-900">FAQs</div>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-gray-200'
                                }`}
                        >
                            <Link to="/docs">Contact Us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Button className="bg-transparent text-[#059669] font-bold cursor-pointer hover:bg-transparent border-none transition-colors duration-300">
                            Search All Jobs
                        </Button>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Button className="bg-[#2563EB] cursor-pointer hover:bg-[#1D4ED8] transition-colors duration-300">
                            Schedule a Call Now
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props} className="p-2">
            <NavigationMenuLink asChild>
                <Link to={href} className="block p-2 rounded hover:bg-gray-100 transition-colors duration-200">
                    <div className="text-sm leading-none font-medium text-gray-900">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug mt-1">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}