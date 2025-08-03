import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent,  SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const Hero = () => {
    const form = useForm({
        defaultValues: {
            jobtitle: "",
            location: "",
            jobcategory: ""
        }
    })

    const onSubmit = (data: { jobtitle: string; location: string; jobcategory: string }) => {
        console.log(data)
    }

    return (
        <div className="bg-[#F8FAFC] absolute top-0 opacity-80 overflow-hidden">
            <img className="opacity-65" src="/assets/hero3.jpg" alt="" />
            <div className="absolute top-48 px-8 text-[#1E293B]">
                <p className="font-outfit text-base font-medium">Explore local and remote customer service and call center job opportunities available.</p>
                <h1 className="font-redRose text-6xl w-2/5 font-bold">Find Your Next Customer Service Job with GoldCore!</h1>
            </div>

            <div className="bg-[#F8FAFC] px-8 py-8">
                <div className="flex justify-around w-full">
                    <span className="flex w-1/2 flex-col gap-y-4">
                        <h2 className="font-redRose font-bold text-[#059669] text-4xl">Remote and Local Customer Service Job
                            Opportunities Available</h2>
                        <p className="text-left font-outfit text-xl">At GoldCore, we specialize in connecting skilled professionals with remote customer service and call center roles that fit their talents and career goals. Whether you're seeking a work-from-home customer service job or an in-office call center position, we're here to match you with opportunities where you can grow, succeed, and make an impact.
                            Start your journey with GoldCore and explore our wide range of remote and local job openings today.
                        </p>
                        <Button className="bg-[#059669] w-fit font-lato font-medium text-base">Schedule a call today</Button>
                    </span>

                    <div className="w-1/3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center font-rubik text-[#1E293B] text-2xl">Find your Next job</CardTitle>
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
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select location" />
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
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select job category" />
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

                                    <Button type="submit" className="w-full bg-[#2563EB] hover:bg-[#1D4ED8]">
                                        Find Jobs
                                    </Button>
                                </form>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}