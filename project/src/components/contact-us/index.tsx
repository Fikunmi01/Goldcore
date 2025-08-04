import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { Footer } from "../footer"

export const ContactUsHero = () => {
    const form = useForm({
        defaultValues: {
            lastname: "",
            email: "",
            phonenumber: "",
            comment: "",
            firstname: "",
            jobcategory: "",
        }
    })

    const onSubmit = (data: { firstname: string; lastname: string; email: string; comment: string; phonenumber: string; jobcategory: string }) => {
        console.log(data)
    }

    return (
        <div className="bg-[#1E293B] absolute top-0 w-full">
            <div className="bg-[#F8FAFC] flex-row mt-23 w-full flex items-center justify-start gap-x-6  p-16 relative">
                <div className="w-1/2">
                    <h1 className="font-redRose text-3xl font-bold text-[#1E293B] mb-4">
                        Contact us
                    </h1>
                    <p className="text-lg font-rubik ">
                        We’re eager to hear from you.
                    </p>
                    <p className="text-lg font-rubik ">
                        Phone: 813-449-4800
                    </p>
                    <p className="text-lg font-rubik ">
                        Fax: 813-289-3631
                    </p>

                    <p className="text-lg w-1/2 font-rubik ">
                        GoldCore
                        5102 West Laurel St.
                        Suite 500
                        Tampa, FL 33607
                    </p>
                    <p className="text-lg font-rubik ">
                        Phone: 813-449-4800
                    </p>
                </div>
                <div className="w-2/3">
                    <Card>


                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
                                <FormField
                                    control={form.control}
                                    name="jobcategory"
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* <FormLabel>Location</FormLabel> */}
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="I am a ..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="new-york">Job Seeker</SelectItem>
                                                    <SelectItem value="phoenix">Employer</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-2 gap-x-4">
                                    <FormField
                                        control={form.control}
                                        name="firstname"
                                        render={({ field }) => (
                                            <FormItem>
                                                {/* <FormLabel>Job Title</FormLabel> */}
                                                <FormControl>
                                                    <Input required placeholder="First Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="lastname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input required placeholder="Last Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type="email" required placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phonenumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input required placeholder="Phone Number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phonenumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <textarea className="border p-4 rounded-xl" {...field} placeholder="Comment or Message"></textarea>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />



                                <Button type="submit" className="w-full bg-[#059669] hover:bg-[#059669]/80 cursor-pointer">
                                    Find Jobs
                                </Button>
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}