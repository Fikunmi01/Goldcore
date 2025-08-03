import { ArrowLeftRightIcon, ChartLine, HandshakeIcon, Users } from "lucide-react"

export const Perks = () => {
    return (
        <div className="p-16 z-40 font-outfit bg-[#64748b] bg-gradient-to-br from-slate-200 via-emerald-50/30 to-gray-100">
            <div className="grid grid-cols-4 gap-x-4 text-sm text-white mb-10">
                <span className="flex gap-x-3 bg-[#059669]/30 backdrop-blur-sm p-4 rounded-xl border border-[#FFD700]/50 shadow-lg items-center ">
                    <HandshakeIcon />
                    <p className="font-outfit">Find the Right People, Faster</p>
                </span>
                <span className="flex gap-x-3 font-outfit items-center bg-[#059669]/30 backdrop-blur-sm p-4 rounded-xl border border-[#FFD700]/50 shadow-lg ">
                    <ArrowLeftRightIcon />
                    <p>Reduce Turnover, Increase Perfomance</p>
                </span>
                <span className="flex font-outfit gap-x-3 bg-[#059669]/30 backdrop-blur-sm p-4 rounded-xl border border-[#FFD700]/50 shadow-lg items-center">
                    <ChartLine />
                    <p>Scale with Confidence</p>
                </span>
                <span className="flex font-outfit gap-x-3  items-center bg-[#059669]/30 backdrop-blur-sm p-4 rounded-xl border border-[#FFD700]/50 shadow-lg ">
                    <Users />
                    <p>Flexible Hiring Options to Fit Your Needs</p>
                </span>
            </div>

            <div>
                <h3 className="text-center font-redRose border-t w-fit mx-auto border-b py-2 text-4xl my-4 text-white">Specializes in </h3>
                <div className="flex items-center gap-10 mt-10">
                    <div className="w-1/2">
                        <h4 className="font-rubik text-4xl  font-semibold text-white">Call Center & Contact Center Representative</h4>
                        <p className="text-[#1E293B] text-2xl ">Hiregy connects you with frontline professionals who provide exceptional customer experiences.</p>
                    </div >
                    <div className=" w-1/2 border-l-2 border-[#FFf] px-10">
                        <ul className="list-disc font-rubik text-xl font-semibold text-white">
                            <li>Call Center Representatives</li>
                            <li>Customer Service Representatives</li>
                            <li>Client Experience Representatives</li>
                            <li>Customer Care Representatives</li>
                            <li>New Business Representatives</li>
                            <li>Insurance Representatives</li>
                            <li>Collection Representatives</li>
                            <li>Contact Center Representatives</li>

                        </ul>
                    </div>
                </div>

                <div className="flex flex-row-reverse items-center gap-10 mt-10">
                    <div className="w-1/2">
                        <h4 className="font-rubik text-4xl  font-semibold text-white">Healthcare Support Representatives</h4>
                        <p className="text-[#1E293B] text-2xl ">Hiregy specializes in staffing healthcare-focused call center professionals who assist patients, insurance providers, and pharmacies.</p>
                    </div >
                    <div className=" w-1/2 border-r-2 ml-20 border-[#FFf]">
                        <ul className="list-disc font-rubik text-xl font-semibold text-white">
                            <li>Pharmacy Support Representatives</li>
                            <li>Patient Care Coordinator/Scheduler</li>
                            <li>Member Services Representatives</li>
                            <li>Health Insurance Enrollment Representatives</li>
                            <li>Insurance Verification Specialist</li>
                            <li>Benefits Coordinator</li>
                            <li>Patient Outreach and Education</li>
                            <li>Crisis and Human Services Specialists (211/988)</li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-10 mt-10">
                    <div className="w-1/2">
                        <h4 className="font-rubik text-4xl  font-semibold text-white">Call Center & Contact Center RepresentativeLeadership & Call Center Management</h4>
                        <p className="text-[#1E293B] text-2xl ">Strategic leadership is key to your call center’s success. We find experienced managers who optimize operations and drive performance.</p>
                    </div >
                    <div className=" w-1/2 border-l-2 border-[#FFf] px-10">
                        <ul className="list-disc font-rubik text-xl font-semibold text-white">
                            <li>Training & Instructional Design</li>
                            <li>Workforce Management and Schedulers</li>
                            <li>Quality Control Managers and Specialists</li>
                            <li>Dialer Management</li>
                            <li>Call Center Team Lead</li>
                            <li>Call Center Supervisor</li>
                            <li>Call Center Manager</li>
                            <li>Call Center Director</li>

                        </ul>
                    </div>
                </div>


            </div>
            <div className="my-14 flex items-start text-white">
                <div>
                    <h1 className="font-bold font-poppins  text-3xl">Technical Support & Helpdesk</h1>
                    <p className="text-white font-semibold w-2/3 mb-3">Equip your business with skilled technical support professionals who provide seamless assistance</p>

                    <span className="bg-white/10 p-4 flex w-fit backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <ul>
                            <li>Technical Support - Level 1</li>
                            <li>Helpdesk Representative</li>
                        </ul>
                    </span>
                </div>
                <div>
                    <h1 className="font-bold font-poppins text-3xl">Inside Sales</h1>
                    <p className="text-white font-semibold w-2/3 mb-3">Drive revenue with high-performing sales teams tailored to your business.</p>

                    <span className="bg-white/10 p-4 flex w-fit backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <ul>
                            <li>Order Entry Representatives</li>
                            <li>Inbound Sales Specialists</li>
                            <li>Account Management Representatives</li>
                            <li>Retail Order Troubleshooting and Support</li>
                            <li>Warranty Representatives</li>
                            <li>Dispatch and Service Coordinators</li>
                            <li>Sales Support Coordinators</li>
                        </ul>
                    </span>
                </div>
            </div>
            <button className="font-poppins font-semibold text-lg flex mx-auto justify-center px-4 py-1 w-fit rounded-full text-white bg-[#059669]">Schedule a Call Today and Get Started</button>

        </div>
    )
}