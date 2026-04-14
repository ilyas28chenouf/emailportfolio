"use client";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import ClickableText from "../common/global/ClickableText";

export const ArrowButtonNav = ({
  text,
  section,
}: {
  text: string;
  section: string;
}) => {
  const scrollTo = useScrollToSection();

  return (
    <Button
      className="lg:text-5xl text-3xl group rounded-none!"
      onClick={() => scrollTo(section)}
    >
      <span className="flex gap-2 slide-up">
        <ClickableText text={text} />
        <ArrowRight
          strokeWidth={1.5}
          className="group-hover:rotate-90 lg:size-[50px] size-9"
        />
      </span>
    </Button>
  );
};

export default ArrowButtonNav;
