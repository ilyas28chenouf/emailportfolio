"use client";
import { personal_data } from "@/data/home";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SocialLinks from "../../global/SocialLinks";
import MaxWidthWrapper from "../../global/MaxWidthWrapper";
import HeroName from "../../home/HeroName";

const Footer2 = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { y: 300 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: divRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative h-screen" ref={divRef}>
        {" "}
        <div
          className="size-full absolute left-0 top-0 md:bg-contain bg-cover max-md:bg-no-repeat"
          style={{
            backgroundImage: `url(${personal_data.image})`,
            backgroundPosition: "center center",
          }}
        />
      </div>
      <footer className="fixed bottom-0 h-screen w-screen" ref={footerRef}>
        <div
          className="size-full absolute left-0 top-0 backdrop-blur-[2px]"
          style={{
            background:
              "radial-gradient(circle,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 75%)",
          }}
        />
        <MaxWidthWrapper className="relative text-center flex flex-col items-center gap-8 py-32">
          <p className="text-(--color-primary-fixed)! text-2xl">
            © 2026{" "}
            <span
              className=" cursor-pointer uppercase hover:underline"
              onClick={() =>
                window.scrollTo({ left: 0, top: 0, behavior: "instant" })
              }
            >
              {personal_data.name}
            </span>{" "}
            All Rights Reserved.
          </p>

          <SocialLinks />
        </MaxWidthWrapper>
        <HeroName className="text-(--color-primary-fixed)! absolute left-1/2 -translate-x-1/2 bottom-16" />
      </footer>
    </>
  );
};

export default Footer2;
