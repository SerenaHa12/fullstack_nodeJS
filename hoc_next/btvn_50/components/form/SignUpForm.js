"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

const FormSchema = z.object({
  email: z.string().min(1, {
    message: "You must enter your email.",
  }),
  password: z.string().min(1, {
    message: "You must enter your password.",
  }),
});

const SignUpForm = () => {
  const formSignUp = useRef();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rt5x9rn",
        "template_4p3ugch",
        formSignUp.current,
        "usf6797X7GiraXuli"
      )
      .then(
        (result) => {
          toast({
            title: "Your message has been sent.",
          });
          console.log(result.text);
        },
        (error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container max-w-lg mx-auto p-10 rounded-md">
      <Form {...form}>
        <form className="w-full mx-auto" ref={formSignUp} onSubmit={sendEmail}>
          <h1 className="text-3xl font-semibold mb-4 text-center">Sign Up</h1>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              type="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      name="user_email"
                      placeholder="Enter your email"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      name="user_password"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <input
            type="submit"
            className="mt-4 mx-auto w-full p-2 rounded-sm border border-solid border-[white] cursor-pointer light:border-[black] light:border light:border-solid"
            value="Sign Up"
          />
        </form>
        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          If you already have an account, please&nbsp;{" "}
          <Link href="/sign-in" className="text-blue-600 text-bold">
            Sign In
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUpForm;
