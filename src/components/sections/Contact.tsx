import Contact1 from "../common/contact/variants/Contact1";
import Section from "../common/global/Section";
import Contact2 from "../common/contact/variants/Contact2";
import { contact_option } from "@/data/config";
import HorizontalTicker, {
  HorizontalTickerItem,
} from "../common/global/HorizontalTicker";

const Contact = () => {
  return (
    <Section id="contact" className="pb-16!">
      {/* <div className="mb-16 font-black whitespace-nowrap">
        <HorizontalTicker animationDuration={40} duplicate className="py-16">
          <HorizontalTickerItem gap={64}>
            <h1 className="text-[clamp(100px,13vw,13vw)] leading-[clamp(100px,13vw,13vw)] scale-y-200 overflow-hidden ">
              Let's Talk
            </h1>
          </HorizontalTickerItem>

          <HorizontalTickerItem gap={64}>
            <h1 className="text-[clamp(100px,13vw,13vw)] leading-[clamp(100px,13vw,13vw)] dark:text-(--color-landing)! text-(--bg-secondary)! outlinedText scale-y-200">
              Let's Work
            </h1>
          </HorizontalTickerItem>

          <HorizontalTickerItem gap={64}>
            <h1 className="text-[clamp(100px,13vw,13vw)] leading-[clamp(100px,13vw,13vw)] scale-y-200 overflow-hidden ">
              Let's Talk
            </h1>
          </HorizontalTickerItem>

          <HorizontalTickerItem gap={64}>
            <h1 className="text-[clamp(100px,13vw,13vw)] leading-[clamp(100px,13vw,13vw)] dark:text-(--color-landing)! text-(--bg-secondary)! outlinedText scale-y-200">
              Let's Work
            </h1>
          </HorizontalTickerItem>
        </HorizontalTicker>
      </div> */}
      {contact_option === "contact-1" ? <Contact1 /> : <Contact2 />}
    </Section>
  );
};

export default Contact;
