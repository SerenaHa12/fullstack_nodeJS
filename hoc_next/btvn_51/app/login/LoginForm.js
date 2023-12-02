"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const FormSchema = z.object({
  email: z.string().min(1, {
    message: "You must enter your email.",
  }),
  password: z.string().min(1, {
    message: "You must enter your password.",
  }),
});

const LoginForm = () => {
  const formSignIn = useRef();
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
        formSignIn.current,
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
        <form className="w-full mx-auto" ref={formSignIn} onSubmit={sendEmail}>
          <h1 className="text-3xl font-semibold mb-4 text-center">Sign In</h1>
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
            className="mt-4 mx-auto w-full p-2 rounded-sm border border-solid border-[black] cursor-pointer dark:border-[white] dark:border dark:border-solid"
            value="Sign In"
          />
        </form>
        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>
        <button className="mt-4 mx-auto w-full p-2 bg-zinc-950 rounded-md text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 flex items-center gap-2">
            <FaGoogle />
          Sign In With Google
        </button>
        <button className="mt-4 mx-auto w-full p-2 bg-zinc-950 rounded-md text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 flex items-center gap-2">
            <FaGithub />
          Sign In With Github
        </button>
      </Form>
    </div>
  );
};

export default LoginForm;
