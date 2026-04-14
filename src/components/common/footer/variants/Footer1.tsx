"use client";

import { personal_data } from "@/data/home";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import MaxWidthWrapper from "../../global/MaxWidthWrapper";
import SocialLinks from "../../global/SocialLinks";
import HeroName from "../../home/HeroName";

const Footer1 = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 300 },
        {
          y: "-75%",
          ease: "none",
          scrollTrigger: {
            trigger: div1Ref.current,
            start: "top bottom",
            end: "bottom 25%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        footerRef.current,
        { y: 300 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: div2Ref.current,
            start: "-45% bottom",
            end: "top 25%",
            scrub: true,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative 3xl:h-[19vh] h-[25vh]" ref={div1Ref}></div>

      {/* <div
        className="fixed z-1 left-0 bottom-0 h-screen w-screen overflow-hidden md:bg-contain bg-cover max-md:bg-no-repeat"
        ref={imageRef}
        style={{
          backgroundImage: `url(${personal_data.image})`,
          backgroundPosition: "center center",
        }}
      >
        <div
          className="size-full absolute left-0 top-0"
          style={{
            background:
              "radial-gradient(circle,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 75%)",
          }}
        />
      </div>

      <div className="relative h-[75vh]" ref={div2Ref}></div> */}

      <footer
        className="fixed z-0 left-0 bottom-0  w-screen overflow-hidden bg-black"
        ref={footerRef}
      >
        <div className="py-16 lg:space-y-16 space-y-8">
          <MaxWidthWrapper className="relative text-center flex flex-col items-center gap-8">
            <SocialLinks />

            <p className="text-(--color-primary-fixed)! text-2xl">
              © 2025{" "}
              <span
                className="text-(--color-primary) cursor-pointer uppercase hover:underline"
                onClick={() =>
                  window.scrollTo({ left: 0, top: 0, behavior: "instant" })
                }
              >
                {personal_data.name}
              </span>{" "}
              All Rights Reserved.
            </p>
          </MaxWidthWrapper>

          {/* <HeroName className="text-(--color-primary-fixed)!" /> */}
        </div>
      </footer>
    </>
  );
};

export default Footer1;
