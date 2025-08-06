import { useForm } from "react-hook-form"
import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { JobSearch } from "./job-search"
import { Review } from "../review"
import { Footer } from "../footer"
import { Link } from "react-router"

// Define search criteria interface
interface SearchCriteria {
    jobtitle: string;
    location: string | undefined;
    jobcategory: string | undefined;
}

export const Hero = () => {
    const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | null>(null)
    
    const form = useForm({
        defaultValues: {
            jobtitle: "",
            location: undefined,
            jobcategory: undefined
        }
    })

    const onSubmit = (data: SearchCriteria) => {
        // console.log("Search criteria:", data)
        setSearchCriteria(data)
        
        // Scroll to job search results
        const jobSearchSection = document.getElementById('job-search-section')
        if (jobSearchSection) {
            jobSearchSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const clearSearch = () => {
        setSearchCriteria(null)
        form.reset({
            jobtitle: "",
            location: undefined,
            jobcategory: undefined
        })
    }

    return (
        <div className="bg-[#F8FAFC] absolute top-0 opacity-80 overflow-hidden">
            <img className="opacity-65 w-full h-96 object-cover lg:h-full lg:w-full" src="/assets/hero3.jpg" alt="" />
            <div className="absolute top-48 px-8 text-[#1E293B]">
                <p className="font-outfit text-center lg:text-left text-base font-medium">Explore local and remote customer service and call center job opportunities available.</p>
                <h1 className="font-redRose text-center text-3xl lg:text-left lg:text-6xl lg:w-2/5 font-bold">Find Your Next Customer Service Job with GoldCore!</h1>
            </div>

            <div className="bg-[#F8FAFC] lg:px-8 lg:py-8 p-3">
                <div className="flex flex-col lg:flex-row lg:justify-around w-full">
                    <span className="flex-col lg:w-1/2 lg:flex-col gap-y-4">
                        <h2 className="font-redRose font-bold text-[#059669] text-2xl lg:text-4xl">Remote and Local Customer Service Job
                            Opportunities Available</h2>
                        <p className="text-left font-outfit text-base lg:text-xl">At GoldCore, we specialize in connecting skilled professionals with remote customer service and call center roles that fit their talents and career goals. Whether you're seeking a work-from-home customer service job or an in-office call center position, we're here to match you with opportunities where you can grow, succeed, and make an impact.
                            Start your journey with GoldCore and explore our wide range of remote and local job openings today.
                        </p>
                        <Link to="/contact-us">
                            <Button className="bg-[#059669] mt-4 w-fit font-lato font-medium text-base">Schedule a call today</Button>
                        </Link>
                    </span>

                    <div className="lg:w-1/3 my-4 lg:my-0">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center font-rubik text-[#1E293B] mt text-2xl">Find your Next job</CardTitle>
                            </CardHeader>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
                                    <FormField
                                        control={form.control}
                                        name="jobtitle"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Job Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter job title" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="location"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Location</FormLabel>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select location " />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="new-york">New York, NY</SelectItem>
                                                        <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                                                        <SelectItem value="chicago">Chicago, IL</SelectItem>
                                                        <SelectItem value="houston">Houston, TX</SelectItem>
                                                        <SelectItem value="miami">Miami, FL</SelectItem>
                                                        <SelectItem value="atlanta">Atlanta, GA</SelectItem>
                                                        <SelectItem value="dallas">Dallas, TX</SelectItem>
                                                        <SelectItem value="phoenix">Phoenix, AZ</SelectItem>
                                                        <SelectItem value="clearwater">Clearwater, FL</SelectItem>
                                                        <SelectItem value="orlando">Orlando, FL</SelectItem>
                                                        <SelectItem value="tampa">Tampa, FL</SelectItem>
                                                        <SelectItem value="jacksonville">Jacksonville, FL</SelectItem>
                                                        <SelectItem value="fort-lauderdale">Fort Lauderdale, FL</SelectItem>
                                                        <SelectItem value="tallahassee">Tallahassee, FL</SelectItem>
                                                        <SelectItem value="gainesville">Gainesville, FL</SelectItem>
                                                        <SelectItem value="pensacola">Pensacola, FL</SelectItem>
                                                        <SelectItem value="sarasota">Sarasota, FL</SelectItem>
                                                        <SelectItem value="naples">Naples, FL</SelectItem>
                                                        <SelectItem value="west-palm-beach">West Palm Beach, FL</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="jobcategory"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Job Category</FormLabel>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select job category " />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="full-time">Full-Time</SelectItem>
                                                        <SelectItem value="part-time">Part-Time</SelectItem>
                                                        <SelectItem value="contract">Contract</SelectItem>
                                                        <SelectItem value="temporary">Temporary</SelectItem>
                                                        <SelectItem value="internship">Internship</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex gap-2">
                                        <Button type="submit" className="flex-1 bg-[#059669] hover:bg-[#059669]/80">
                                            Find Jobs
                                        </Button>
                                        {searchCriteria && (
                                            <Button 
                                                type="button" 
                                                variant="outline" 
                                                onClick={clearSearch}
                                                className="px-3"
                                            >
                                                Clear
                                            </Button>
                                        )}
                                    </div>
                                </form>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
            
            <div id="job-search-section">
                <JobSearch searchCriteria={searchCriteria} />
            </div>
            <Review />
            <Footer />

        </div>
    )
}