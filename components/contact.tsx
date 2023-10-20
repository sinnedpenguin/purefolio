"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

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
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "./ui/separator"

import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { siteConfig } from "@/config/site"

const formSchema = z.object({
  subject: z.string().min(1, {
    message: "Subject is required",
  }),
  msg: z.string().min(1, {
    message: "Message is required",
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      msg: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    window.location.href = `mailto:${siteConfig.email}?subject=${values.subject}&body=${values.msg}`
    form.reset()
  }

  return (
    <div className="w-full mx-auto md:w-[40vw]">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-2 text-center">
        Contact
      </h3>
      <Separator className="mb-4" />
      <div className="flex flex-col items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4 py-2 sm:w-[24rem]"
          >
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="msg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your message" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your message will be sent to <span className="text font-semibold">{siteConfig.email}</span> via email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div />
            <Button className="w-full" type="submit">
              <EnvelopeClosedIcon className="mr-2" /> Submit
            </Button>
          </form>
        </Form>
      </div>
      <Separator className="mt-6" />
    </div>
  )
}