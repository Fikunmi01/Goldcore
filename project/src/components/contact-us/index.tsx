import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { Footer } from "../footer"
import { useState } from "react"
import emailjs from '@emailjs/browser'

export const ContactUsHero = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

    const onSubmit = async (data: { firstname: string; lastname: string; email: string; comment: string; phonenumber: string; jobcategory: string }) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        // Debug: Log the form data to see what's being sent
        console.log('Form data being submitted:', data)

        // Get EmailJS credentials from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        // Check if environment variables are loaded
        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS environment variables are missing!')
            setSubmitStatus('error')
            setIsSubmitting(false)
            return
        }

        try {
            // EmailJS template parameters - ensuring all fields are included
            const templateParams = {
                name: `${data.firstname || ''} ${data.lastname || ''}`.trim(),
                firstname: data.firstname || 'Not provided',
                lastname: data.lastname || 'Not provided',
                email: data.email || 'Not provided',
                phone: data.phonenumber || 'Not provided',
                phonenumber: data.phonenumber || 'Not provided', // Keep both for compatibility
                category: data.jobcategory || 'Not selected',
                jobcategory: data.jobcategory || 'Not selected', // Keep both for compatibility
                comment: data.comment || 'No message provided',
                message: data.comment || 'No message provided', // Keep both for compatibility
                time: new Date().toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                }),
                // Alternative: Create a formatted message with all details
                full_message: `
Contact Details:
- Name: ${data.firstname || 'Not provided'} ${data.lastname || 'Not provided'}
- Email: ${data.email || 'Not provided'}
- Phone: ${data.phonenumber || 'Not provided'}
- Category: ${data.jobcategory || 'Not selected'}

Message:
${data.comment || 'No message provided'}
                `.trim()
            }

            // Debug: Log template params
            console.log('Template params being sent:', templateParams)

            // Send email using EmailJS with env variables
            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            )

            console.log('Email sent successfully:', response)
            setSubmitStatus('success')
            
            // Reset form after successful submission
            form.reset()
            
            // Optional: Show success message for 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle')
            }, 5000)

        } catch (error) {
            console.error('Failed to send email:', error)
            setSubmitStatus('error')
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle')
            }, 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-[#1E293B] absolute top-0 w-full">
            <div className="bg-[#F8FAFC] mt-23 w-full flex lg:flex-row flex-col p-4 lg:items-center justify-start gap-x-6 lg:p-16 relative">
                <div className="lg:w-1/2">
                    <h1 className="font-redRose text-3xl font-bold text-[#1E293B] mt-4 lg:mb-4">
                        Contact us
                    </h1>
                    <p className="text-lg font-rubik ">
                        We're eager to hear from you.
                    </p>
                    <p className="text-lg font-rubik ">
                        Phone: 813-449-4800
                    </p>
                    <p className="text-lg font-rubik ">
                        Fax: 813-289-3631
                    </p>

                    <p className="text-lg lg:w-1/2 font-rubik ">
                        GoldCore
                        5102 West Laurel St.
                        Suite 500
                        Tampa, FL 33607
                    </p>
                    <p className="text-lg font-rubik ">
                        Phone: 813-449-4800
                    </p>
                </div>
                <div className="lg:w-2/3 my-4 lg:my-0">
                    <Card>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
                                <FormField
                                    control={form.control}
                                    name="jobcategory"
                                    rules={{ required: "Please select a category" }} // Added validation
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select 
                                                onValueChange={field.onChange} 
                                                defaultValue={field.value}
                                                value={field.value} // Ensure controlled component
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="I am a ..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Job Seeker">Job Seeker</SelectItem>
                                                    <SelectItem value="Employer">Employer</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4"> {/* Better mobile responsiveness */}
                                    <FormField
                                        control={form.control}
                                        name="firstname"
                                        rules={{ required: "First name is required" }}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="First Name" 
                                                        {...field}
                                                        value={field.value} // Ensure controlled
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="lastname"
                                        rules={{ required: "Last name is required" }}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="Last Name" 
                                                        {...field}
                                                        value={field.value} // Ensure controlled
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="email"
                                    rules={{ 
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input 
                                                    type="email" 
                                                    placeholder="Email" 
                                                    {...field}
                                                    value={field.value} // Ensure controlled
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phonenumber"
                                    rules={{ required: "Phone number is required" }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Phone Number" 
                                                    {...field}
                                                    value={field.value} // Ensure controlled
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="comment"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <textarea 
                                                    className="border p-4 rounded-xl w-full min-h-[100px] resize-vertical" 
                                                    {...field}
                                                    value={field.value} // Ensure controlled
                                                    placeholder="Comment or Message"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-[#059669] hover:bg-[#059669]/80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                        ✅ Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}
                                
                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                                        ❌ Failed to send message. Please try again or contact us directly.
                                    </div>
                                )}
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}