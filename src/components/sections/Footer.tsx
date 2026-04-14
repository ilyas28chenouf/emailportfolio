"use client";
import { footer_option } from "@/data/config";
import Footer1 from "../common/footer/variants/Footer1";
import Footer2 from "../common/footer/variants/Footer2";

const Footer = () => {
  return <>{footer_option === "footer-1" ? <Footer1 /> : <Footer2 />}</>;
};

export default Footer;
