"use client";
import React from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import Image from "next/image";

const formSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().min(4).email({ message: "Must be a valid  email" }),
  message: z.string().min(1),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      console.log("in form send");
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        {
          first_name: values.first_name,
          last_name: values.last_name,
          message: values.message,
          email: values.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC
      );
      toast.success("Message sent. We will get back to you shortly");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      id="contact"
      className="py-10 mt-10 lg:px-0 px-4 bg-secondary-foreground lg:w-full flex flex-col justify-center items-center"
    >
      <h2 className="text-center text-secondary mb-2 font-bold text-3xl">
        Contact us
      </h2>
      <p className="mb-5 lg:text-base text-sm font-medium text-background">
        We&apos;re here to help! If you have any questions, concerns, or
        feedback, please don&apos;t hesitate to get in touch with us.
      </p>
      <Toaster position="bottom-center" />
      <div className="flex gap-10  rounded-sm">
        <div className="lg:flex relative hidden">
          <Image
            className="rounded-sm h-full object-cover"
            src="/contactimg.jpg"
            alt="contact img"
            width={500}
            height={500}
          />
          <div className="absolute rounded-sm inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-90" />
        </div>
        <Form {...form}>
          <form className="lg:w-1/2" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-background">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Enter first name here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="mb-2 w-1/2">
                    <FormLabel className="text-background">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Enter last name here"
                        {...field}
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
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-background">Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Enter email name here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-background">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="Enter message name here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button className="bg-accent hover:bg-accent-hover mt-5 px-4 py-3 w-full rounded-md text-background">
              {loading ? "Submitting" : "Submit"}
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
