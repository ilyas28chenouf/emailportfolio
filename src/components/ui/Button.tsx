"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Magnetic } from "../motion-primitives/magnetic";
export type ButtonVariants = "default" | "outline" | "primary";

const VARIANTS = {
  default: "",
  outline:
    "border-2 group hover:bg-(--bg-primary-inverse) hover:border-(--bg-primary-inverse) hover:text-(--text-primary-inverse)",
  primary:
    "bg-(--bg-primary-inverse) text-(--text-primary-inverse)  h-14 overflow-hidden group",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement | null>;
  magneticIntensity?: number;
  MagneticClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  className,
  MagneticClassName,
  ref,
  magneticIntensity = 0.25,
  ...props
}) => {
  return (
    <Magnetic intensity={magneticIntensity} className={MagneticClassName}>
      <button
        {...props}
        className={cn(
          "flex-center text-primary duration uppercase text-nowrap cursor-pointer rounded-full",
          props.disabled
            ? "opacity-50 cursor-not-allowed pointer-events-none"
            : "",
          VARIANTS[variant],
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    </Magnetic>
  );
};

export default Button;
