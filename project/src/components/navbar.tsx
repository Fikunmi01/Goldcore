import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navigate = useNavigate();


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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

   const goHome = () => {
    
    return () => {
        navigate('/');
    };
};

    return (
        <>
            {/* Navigation Bar - Higher z-index when mobile menu is open */}
            <div className={`
                font-redRose text-white flex items-center justify-between
                fixed top-0 left-0 right-0 px-4 lg:px-8 transition-all duration-300 ease-in-out
                ${isMobileMenuOpen ? 'z-50' : 'z-50'}
                ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg  lg:w-full border-b border-[#FFD700]/50 hover:text-white'
                    : 'bg-transparent py-4 relative z-20'
                }
            `}>

                {/* Logo */}
                {isScrolled || isMobileMenuOpen ?
                    <button onClick={goHome()} className="font-redRose text-2xl cursor-pointer rounded-2xl py-4 w-screen lg:p-4">
                        <img src="/assets/logo-black.jpg" className="object-contain rounded-2xl w-16 lg:w-20 relative" alt="" />
                    </button>
                    :
                    <button onClick={goHome()} className="font-redRose text-2xl cursor-pointer rounded-2xl">
                        <img src="/assets/logo-white.jpg" className="rounded-2xl object-contain w-16 lg:w-20" alt="" />
                    </button>
                }

                {/* Desktop Navigation */}
                <NavigationMenu viewport={false} className="hidden lg:block">
                    <NavigationMenuList className="flex gap-x-2">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={`transition-colors duration-300 ${isScrolled
                                        ? 'text-gray-900 hover:text-gray-700'
                                        : 'text-white'
                                    }`}
                            >
                                Staffing Solutions
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-56 bg-white">
                                    <ListItem href="/roles-we-staff" title="The Roles We Staff" />
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={`${navigationMenuTriggerStyle()} transition-colors duration-300 ${isScrolled
                                        ? 'text-gray-900 hover:text-gray-700'
                                        : 'text-white'
                                    }`}
                            >
                                <Link to="/job-seeker">For Job Seekers</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={`${navigationMenuTriggerStyle()} transition-colors duration-300 ${isScrolled
                                        ? 'text-gray-900 hover:text-gray-700'
                                        : 'text-white'
                                    }`}
                            >
                                <Link to="/about-us">About Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={`transition-colors duration-300 ${isScrolled
                                        ? 'text-gray-900 hover:text-gray-700'
                                        : 'text-white'
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
                                            <Link to="/case-study" className="block p-2 rounded hover:bg-gray-100">
                                                <div className="font-medium text-gray-900">Case Studies & Resources</div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link to="/faq" className="block p-2 rounded hover:bg-gray-100">
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
                                className={`${navigationMenuTriggerStyle()} transition-colors duration-300 ${isScrolled
                                        ? 'text-gray-900 hover:text-gray-700'
                                        : 'text-white'
                                    }`}
                            >
                                <Link to="/contact-us">Contact Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button className={`bg-transparent text-[#059669] font-bold cursor-pointer border-none transition-colors duration-300 ${isScrolled ? 'hover:bg-transparent' : ''
                                }`}>
                                Search All Jobs
                            </Button>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button className={`bg-[#2563EB] cursor-pointer transition-colors duration-300 ${isScrolled ? 'hover:bg-[#1D4ED8]' : ''
                                }`}>
                                Schedule a Call Now
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className={`lg:hidden py-2 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
                        }`}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Lower z-index */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed left-0 right-0 top-0 bg-white z-40 min-h-screen">
                    <div className="flex flex-col pt-20 p-6 space-y-4">
                        {/* Mobile Menu Items */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-900 text-lg">Staffing Solutions</h3>
                            <Link
                                to="/roles-we-staff"
                                className="block pl-4 py-2 text-gray-700 hover:text-gray-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                The Roles We Staff
                            </Link>
                        </div>

                        <Link
                            to="/job-seeker"
                            className="block py-2 text-gray-900 font-medium hover:text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            For Job Seekers
                        </Link>

                        <Link
                            to="/about-us"
                            className="block py-2 text-gray-900 font-medium hover:text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-900 text-lg">Insights</h3>
                            <Link
                                to="/blog"
                                className="block pl-4 py-2 text-gray-700 hover:text-gray-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Our Blog
                            </Link>
                            <Link
                                to="/case-study"
                                className="block pl-4 py-2 text-gray-700 hover:text-gray-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Case Studies & Resources
                            </Link>
                            <Link
                                to="/faq"
                                className="block pl-4 py-2 text-gray-700 hover:text-gray-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                FAQs
                            </Link>
                        </div>

                        <Link
                            to="/contact-us"
                            className="block py-2 text-gray-900 font-medium hover:text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>

                        {/* Mobile Buttons */}
                        {/* <div className="pt-4 space-y-3">
                            <Button 
                                className="w-full bg-transparent text-[#059669] font-bold border border-[#059669] hover:bg-[#059669] hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Search All Jobs
                            </Button>
                            <Button 
                                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Schedule a Call Now
                            </Button>
                        </div> */}
                    </div>
                </div>
            )}
        </>
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