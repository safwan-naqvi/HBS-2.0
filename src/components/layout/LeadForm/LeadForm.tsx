"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FaArrowRightLong } from "react-icons/fa6"

const formSchema = z.object({
    fullname: z.string().min(2, {
        message: "Full Name is required.",
    }),
    companyName: z.string().min(2, {
        message: "Company Name is Required.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    service: z.enum(["UI/UX Design", "Branding", "Web Design", "Web Development", "WebFlow", "SaaS Design"], {
        message: "Please select a service."
    }),
    range: z.enum(["Below $500", "$500 - $1K", "$1K - $2K", "$2K - $5", "$5K - $10K", "$10K and up"], {
        message: "Please select a range."
    }),
    description: z.string().min(25, {
        message: "Description must be at least 25 characters.",
    })
})

export function LeadForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            companyName: "",
            email: "",
            service: "Branding",
            range: "Below $500", description: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        if (values.fullname === "") {
            toast({
                variant: "destructive",
                title: "Full Name is Required",
                description: "Please Enter Your Good Name",
            })
        }
        console.log(values)
    }
    const { toast } = useToast()
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md font-semibold text-black tracking-tight">Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Saim Abbas" {...field} className="text-md md:text-xl font-light tracking-tight" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md font-semibold text-black tracking-tight">Company Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="HashTechWave" {...field} className="text-md md:text-xl font-light tracking-tight" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md font-semibold text-black tracking-tight">Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="person@example.com" {...field} className="text-md md:text-xl font-light tracking-tight" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md font-semibold text-black tracking-tight">Service</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose Service" className="text-md md:text-xl font-light tracking-tight" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Branding">Branding</SelectItem>
                                        <SelectItem value="Web Design">Web Design</SelectItem>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="WebFlow">WebFlow</SelectItem>
                                        <SelectItem value="SaaS Design">SaaS Design</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="range"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md md:text-xl font-semibold text-black tracking-tight">Range</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Your Budget" className="text-md md:text-xl font-light tracking-tight" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Below $500">Below $500</SelectItem>
                                        <SelectItem value="$500 - $1K">$500 - $1K</SelectItem>
                                        <SelectItem value="$1K - $2K">$1K - $2K</SelectItem>
                                        <SelectItem value="$2K - $5">$2K - $5</SelectItem>
                                        <SelectItem value="$5K - $10K">$5K - $10K</SelectItem>
                                        <SelectItem value="$10K and up">$10K and up</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md md:text-xl font-semibold text-black tracking-tight">Username</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none text-md md:text-md font-light tracking-tight"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button type="submit" className="relative group rounded-full h-40 w-40 p-3 bg-[#7a26ce] hover:bg-[#6222b5] box-border transition-all text-md font-light tracking-tight">
                    <img src="/assets/circle_text.svg" alt="Lets Build" className="animate-spin-slow group-hover:animate-spin-slow-reverse" />
                    <FaArrowRightLong className="absolute rotate-45 group-hover:rotate-0 transition-all top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10" />
                </button>
            </form>
        </Form>
    )
}
