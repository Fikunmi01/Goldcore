import { Dribbble, Facebook, Instagram, Mail, MapPin, PhoneIcon, Youtube } from "lucide-react"
import { Link } from "react-router"

export const Footer = () => {
    return (
        <div className="text-white font-outfit bg-gradient-to-r from-[#34D399] via-[#065f46] to-[#34D399] p-3 lg:p-16 flex flex-col lg:flex-row justify-between">

            <div className=" flex flex-col gap-y-4 text-lg font-semibold lg:w-1/4 mb-4 lg:mb-0">
                <img src="/assets/logo-black.jpg" className="w-20 rounded-2xl mb-5" alt="" />

                <ul className="p-4 font-rubik bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex flex-col gap-y-2">

                    <li className="w-2/3 mb-2 break-words">Clayton, Delaware 19938, United States</li>
                    <div className="inline-flex gap-3">
                        <Facebook />
                        <Instagram />
                        <Dribbble />
                        <Youtube />
                    </div>

                </ul>
            </div>
            <div className="text-lg mb-4 lg:mb-0 font-semibold">
                <h3 className="font-lato text-3xl mb-12">Useful Icons</h3>
                <ul className="p-4 font-rubik bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex flex-col gap-y-2">

                    <Link to="/job-seeker">
                        <li>Search Positions</li>
                    </Link>
                    {/* <Link to="/job-seeker">
                        <li>For Employers</li>
                    </Link> */}
                    <Link to="/job-seeker">
                        <li>For Job Seekers </li>
                    </Link>
                    <Link to="/contact-us">
                        <li>Schedule a Call</li>
                    </Link>
                    <Link to="/blog">
                        <li>Our Blog</li>
                    </Link>
                </ul>
            </div>

            <div className="text-lg mb-4 lg:mb-0 font-semibold">
                <h3 className="font-lato text-3xl mb-12">Our Services</h3>
                <ul className="p-4 font-rubik bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex flex-col gap-y-2">
                    <Link to="/about-us">
                        <li>About Us</li>
                    </Link>
                    <Link to="/faq">
                        <li>FAQ</li>
                    </Link>
                    {/* <li>Resources </li> */}
                    <Link to="/contact-us">
                        <li>Contact Us</li>
                    </Link>
                    <Link to="/case-study">
                        <li>Case Studies & Resource</li>
                    </Link>
                </ul>
            </div>


            <div className="text-lg  font-semibold">
                <h3 className="font-lato text-3xl mb-3">Let's Get In Touch</h3>
                <ul className="flex flex-col gap-y-2.5">
                    <span className="p-3 flex gap-4 items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <PhoneIcon className=" " />
                        <div>
                            <p className="font-rubik text-sm">Phone Number</p>
                            <p className="font-rubik text-xs">302-500-5244</p>
                        </div>
                    </span>
                    <span className="p-3 flex gap-4 items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <Mail className=" " />
                        <div>
                            <p className="font-rubik text-sm">Email Address</p>
                            <p className="font-rubik text-xs">crazytech302@gmail.com</p>
                        </div>
                    </span>
                    <span className="p-3 flex gap-4 items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <MapPin className=" " />
                        <div>
                            <p className="font-rubik text-sm">Office Location</p>
                            <p className="font-rubik text-xs">Clayton, Delaware 19938, United States</p>
                        </div>
                    </span>

                </ul>
            </div>

        </div>
    )
}