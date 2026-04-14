"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
  width = "default",
}: {
  className?: string;
  children: ReactNode;
  width?: "default" | "wide";
}) => {
  return (
    // <div
    //   className={cn(
    //     "mx-auto w-full max-w-screen-2xl",
    //     width === "default" ? "2xl:px-24 lg:px-16 md:px-8 px-4" : "px-4",
    //     className
    //   )}
    // >
    //   {children}
    // </div>
    <div
      className={cn(
        "mx-auto w-full ",
        width === "default" ? "2xl:px-24 lg:px-16 md:px-8 px-4" : "3xl:px-50 px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
