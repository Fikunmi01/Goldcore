import { Dribbble, Facebook, Instagram, Mail, MapPin, PhoneIcon, Youtube } from "lucide-react"
import { Link } from "react-router"

export const Footer = () => {
    return (
        <div className="text-white font-outfit bg-gradient-to-r from-[#34D399] via-[#065f46] to-[#34D399] p-16 flex justify-between">

            <div className=" flex flex-col gap-y-4 text-lg font-semibold w-1/4">
                <img src="/assets/logo-black.jpg" className="w-20 rounded-2xl mb-5" alt="" />

                <ul className="p-4 font-rubik bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex flex-col gap-y-2">

                    <li className="w-2/3 mb-2 break-words">5102 West Laurel St. Suite 500 Tampa, FL 33607</li>
                    <div className="inline-flex gap-3">
                        <Facebook />
                        <Instagram />
                        <Dribbble />
                        <Youtube />
                    </div>

                </ul>
            </div>
            <div className="text-lg  font-semibold">
                <h3 className="font-lato text-3xl mb-3">Useful Icons</h3>
                <ul className="p-4 font-rubik bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex flex-col gap-y-2">

                    <li>Search Positions</li>
                    <li>For Employers</li>
                    <li>For Job Seekers </li>
                    <li>Schedule a Call</li>
                    <Link to="/blog">
                        <li>Our Blog</li>
                    </Link>
                </ul>
            </div>

            <div className="text-lg  font-semibold">
                <h3 className="font-lato text-3xl mb-3">Our Services</h3>
                <ul className="p-4 font-rubik bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex flex-col gap-y-2">
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Associate Resources </li>
                    <li>Contact Us</li>
                    <li>Case Studies & Resource</li>

                </ul>
            </div>


            <div className="text-lg  font-semibold">
                <h3 className="font-lato text-3xl mb-3">Let's Get In Touch</h3>
                <ul className="flex flex-col gap-y-2.5">
                    <span className="p-3 flex gap-4 items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <PhoneIcon className=" " />
                        <div>
                            <p className="font-rubik text-sm">Phone Number</p>
                            <p className="font-rubik text-xs">813-449-4800</p>
                        </div>
                    </span>
                    <span className="p-3 flex gap-4 items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <Mail className=" " />
                        <div>
                            <p className="font-rubik text-sm">Email Address</p>
                            <p className="font-rubik text-xs">demo@gmail.com</p>
                        </div>
                    </span>
                    <span className="p-3 flex gap-4 items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <MapPin className=" " />
                        <div>
                            <p className="font-rubik text-sm">Office Location</p>
                            <p className="font-rubik text-xs">Meltons, Lucas City</p>
                        </div>
                    </span>

                </ul>
            </div>

        </div>
    )
}