"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(5, "Please enter your message."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type FormResponse = {
  error: boolean;
  message: string;
} | null;

export default function useContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [formResponse, setFormResponse] = useState<FormResponse>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitHandler = async (values: ContactFormValues) => {
    setIsPending(true);
    setFormResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setFormResponse({
          error: true,
          message: data.message || "Something went wrong.",
        });
        return;
      }

      setFormResponse({
        error: false,
        message: data.message || "Message sent successfully.",
      });

      form.reset();
    } catch (error) {
      setFormResponse({
        error: true,
        message: "Network error. Please try again.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return {
    form,
    submitHandler,
    isPending,
    formResponse,
  };
}