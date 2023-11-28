"use client";

import React, { useState } from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const BookingForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  const [date, setDate] = useState("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
 
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 container mx-auto items-center text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">FORM</h1>
        <div className="flex justify-between gap-x-8">
          {/**imge */}
          <div className="hidden xl:flex relative">
            <div className="bg-book dark:bg-book w-[480px] h-[492px] bg-no-repeat"></div>
          </div>

          <div className="flex max-w-[600px] flex-col mx-auto xl:mx-0 justify-center xl:text-left">
            <Card className="w-[600px] border-none">
              <CardHeader className="text-center">
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Travelling around the world in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Email or Phone Number</Label>
                        <Input
                          id="name"
                          placeholder="Input your email or phone number"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="place">Go to</Label>
                        <Select>
                          <SelectTrigger id="place">
                            <SelectValue placeholder="Select your destination" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="vietnam">Viet Nam</SelectItem>
                            <SelectItem value="lao">Lao</SelectItem>
                            <SelectItem value="campuchia">Campuchia</SelectItem>
                            <SelectItem value="thailan">Thai Lan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="quantity">Number</Label>
                        <Input
                          id="quantity"
                          placeholder="Input your number of people participating in the tour"
                          type="number"
                        />
                      </div>

                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <Label className="mb-1">From</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? (
                                  format(date, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              align="start"
                              className="flex w-auto flex-col space-y-2 p-2"
                            >
                              <Select
                                onValueChange={(value) =>
                                  setDate(addDays(new Date(), parseInt(value)))
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                  <SelectItem value="0">Today</SelectItem>
                                  <SelectItem value="1">Tomorrow</SelectItem>
                                  <SelectItem value="3">In 3 days</SelectItem>
                                  <SelectItem value="7">In a week</SelectItem>
                                </SelectContent>
                              </Select>
                              <div className="rounded-md border">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                />
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="flex flex-col">
                          <Label className="mb-1">To</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? (
                                  format(date, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              align="start"
                              className="flex w-auto flex-col space-y-2 p-2"
                            >
                              <Select
                                onValueChange={(value) =>
                                  setDate(addDays(new Date(), parseInt(value)))
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                  <SelectItem value="0">Today</SelectItem>
                                  <SelectItem value="1">Tomorrow</SelectItem>
                                  <SelectItem value="3">In 3 days</SelectItem>
                                  <SelectItem value="7">In a week</SelectItem>
                                </SelectContent>
                              </Select>
                              <div className="rounded-md border">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                />
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-between mx-auto items-center">
                <Button>Send</Button>
              </CardFooter>
            </Card>
          </div>

          {/**form */}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
