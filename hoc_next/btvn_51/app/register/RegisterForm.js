"use client";

import Link from "next/link";
import { useState } from "react";

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
import { FaGoogle, FaGithub } from "react-icons/fa";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const api = "https://f8-fullstack-k1-r1j9.vercel.app/api/auth/register";

    try {
      const res = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      // Handle the response as needed
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <div className="container max-w-lg mx-auto p-10 rounded-md flex flex-col gap-y-3">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
        <Input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <Input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
