"use client";
import React, { useState, useTransition } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import Review from "@/components/Review/Review";

import { formData } from "../../../Typing";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Button from "../Button/Button";
import { addComments } from "@/actions/Comments";

const formScheme = z.object({
  name: z.string().min(3, { message: "Name is required" }).max(50),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(5, { message: "Review is required" }).max(500),
});

const CommentForm = ({ postID }: { postID: string }) => {
  const [, setFormValues] = useState<formData>();
  const [loading, startTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(formScheme),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (
    values: formData,
    e?: React.BaseSyntheticEvent<object, EventTarget, Event> | undefined
  ) => {
    e?.preventDefault();
    startTransition(async () => {
      await addComments(values, postID);
    });
    setFormValues(values);

    form.reset();
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data, event) => onSubmit(data, event))}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="name" placeholder="Enter your Name" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
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
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about experience"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button text={loading ? "Submitting ..." : "Submit"} dark_variant />
        </form>
      </Form>
    </>
  );
};

export default CommentForm;
