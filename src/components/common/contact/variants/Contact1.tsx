"use client";
import useContactForm from "@/hooks/useContactForm";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CheckCircle2Icon } from "lucide-react";
import { ReactNode } from "react";
import MaxWidthWrapper from "../../global/MaxWidthWrapper";
import { contact_info } from "@/data/contact";
import ContactInfo from "../ContactInfo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import { Textarea } from "@/components/shadcn/textarea";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import FormResponse from "../FormResponse";
import ClickableText from "../../global/ClickableText";
import Image from "next/image";
import { personal_data } from "@/data/home";

const FormInputWrapper = ({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <label className={cn(" py-16 space-y-8 block duration", className)}>
      <h1 className="text-3xl">{label} *</h1>
      {children}
    </label>
  );
};

const Contact1 = () => {
  const { form, submitHandler, isPending, formResponse } = useContactForm();

  return (
    <div className="space-y-16">
      <MaxWidthWrapper className="flex flex-col gap-20 justify-between">
        <div className="2xl:text-[10.75rem] lg:text-9xl text-7xl text-query justify-query normal-case! text-primary flex flex-wrap gap-2 items-end">
          <span>✺ Interested in</span>
          <span>working with</span>
          <div className="relative aspect-video 2xl:h-30 lg:h-22 h-16 mx-4">
            <Image
              src={personal_data.image}
              alt="me"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <span>?</span>
        </div>

        {/* <div className="flex gap-8 flex-wrap justify-center">
          {contact_info.map((item, i) => (
            <ContactInfo key={i} {...item} />
          ))}
        </div> */}
      </MaxWidthWrapper>

      <Form {...form}>
        <form id="contact-form" onSubmit={form.handleSubmit(submitHandler)}>
          <MaxWidthWrapper className="border-t border-(--border)">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <FormInputWrapper
                label="Your Name"
                className="md:border-0 border-b border-(--border)"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="md:col-span-1 col-span-2">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Alex"
                          type="text"
                          disabled={isPending}
                          autoComplete="on"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormInputWrapper>

              <FormInputWrapper
                label="Your Email"
                className="md:border-l 2xl:pl-24 lg:pl-16 md:pl-8 border-(--border)"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="md:col-span-1 col-span-2">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.example@gmail.com"
                          type="text"
                          disabled={isPending}
                          autoComplete="on"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormInputWrapper>
            </div>
          </MaxWidthWrapper>

          <MaxWidthWrapper className="md:border-y border-t border-(--border) md:pr-0!">
            <div className="grid md:grid-cols-12 grid-cols-1">
              <FormInputWrapper
                label="Your Message"
                className="xl:col-span-9 md:col-span-7"
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormControl>
                        <Textarea
                          {...field}
                          className="resize-none"
                          rows={4}
                          placeholder="Hi, I'm Looking for..."
                          autoComplete="on"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormInputWrapper>

              <button
                className={cn(
                  "xl:aspect-square xl:col-span-3 md:col-span-5 flex-center group bg-(--bg-primary-inverse)",
                  !formResponse
                    ? "border-(--border)"
                    : formResponse.error
                    ? "bg-red-400"
                    : "bg-green-400"
                )}
                type="submit"
                disabled={
                  isPending || (formResponse !== null && !formResponse.error)
                }
              >
                {isPending ? (
                  <span className="spinner" />
                ) : (
                  <Magnetic
                    className="flex-center font-medium py-16 text-4xl text-(--text-primary-inverse) uppercase text-end"
                    intensity={1}
                  >
                    {!formResponse ? (
                      <div className="flex-col justify-end">
                        <ClickableText text="Send To" />
                        <div className="ml-17">
                          <ClickableText text="Me" />
                        </div>
                      </div>
                    ) : formResponse.error ? (
                      <span>
                        failed <br /> Try Again
                      </span>
                    ) : (
                      <span>
                        Email Sent <br /> Successfully
                      </span>
                    )}
                    {!formResponse || formResponse.error ? (
                      <span className="overflow-hidden relative size-[140]">
                        <ArrowUpRight
                          size={140}
                          strokeWidth={0.6}
                          className="absolute group-hover:-translate-y-30 group-hover:translate-x-30"
                        />
                        <ArrowUpRight
                          size={140}
                          strokeWidth={0.6}
                          className="absolute translate-30 -translate-x-30 group-hover:translate-0"
                        />
                      </span>
                    ) : (
                      <CheckCircle2Icon
                        size={120}
                        strokeWidth={0.6}
                        className="group-hover:scale-110 group-hover:-translate-y-0.5 duration"
                      />
                    )}
                  </Magnetic>
                )}
              </button>
            </div>
          </MaxWidthWrapper>

          <MaxWidthWrapper className="mt-8">
            <FormResponse
              error={formResponse?.error}
              message={formResponse?.message}
            />
          </MaxWidthWrapper>
        </form>
      </Form>
    </div>
  );
};

export default Contact1;
