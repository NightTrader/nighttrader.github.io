import Envelope from "@/assets/envelope.svg";
import Phone from "@/assets/phone.svg";
import Map from "@/assets/map.svg";
import ChevronRight from "@/assets/chevron-right.svg";
import File from "@/assets/file.svg";

import Link from "@/components/ui/Link.tsx";

import {NavLink} from "react-router-dom";

export default function ContactPage() {
  return (
    <>
      <div className={"py-14 md:py-28 px-8 md:px-16 empty-image text-white"}>
        <p className={"text-base font-semibold pb-2 md:pb-4"}>Connect</p>
        <p className={"text-3xl md:text-6xl font-bold pb-3 md:pb-6"}>Get In Touch</p>
        <p className={"text-base md:text-lg"}>We’re here to help! Reach out with any questions or feedback you may
          have.</p>
      </div>
      <div className={"flex flex-col gap-10 md:gap-20 py-14 md:py-28 px-8 md:px-16"}>
        <div>
          <p className={"text-base font-semibold pb-2 md:pb-4"}>Connect</p>
          <p className={"text-3xl md:text-5xl font-semibold pb-3 md:pb-6"}>Contact Us</p>
          <p className={"text-lg"}>We're here to help with any inquiries or questions you may have 24/7/365.</p>
        </div>
        <div className={"flex flex-col md:flex-row gap-10 md:gap-20"}>
          <address className={"flex flex-col gap-10 w-full"}>
            <div className={"flex flex-col gap-4"}>
              <Envelope className={"size-8"}/>
              <div className={"flex flex-col gap-2"}>
                <p className={"text-lg md:text-xl font-semibold"}>Email</p>
                <p className={"text-base"}>Reach us at</p>
                <NavLink to={"mailto:support@nighttrader.exchange"}>support@nighttrader.exchange</NavLink>
              </div>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Phone className={"size-8"}/>
              <div className={"flex flex-col gap-2"}>
                <p className={"text-lg md:text-xl font-semibold"}>Phone</p>
                <p className={"text-base"}>Call us at</p>
                <NavLink to={"tel:+15551234567"}>+1 (555) 123-4567</NavLink>
              </div>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Map className={"size-8"}/>
              <div className={"flex flex-col gap-2"}>
                <p className={"text-lg md:text-xl font-semibold"}>Office</p>
                <p className={"text-base"}>420 Night St., Suite 69, New York, NY 10001 USA</p>
                <NavLink
                  to={"https://www.google.com/maps/search/420+night+st.+suite+69/@50.086688,14.4182236,630m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"}
                  className={"flex items-center gap-2"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  Get Directions
                  <ChevronRight/>
                </NavLink>
              </div>
            </div>
          </address>
          <div className={"aspect-square empty-image w-full"}/>
        </div>
      </div>
      <div className={"py-14 md:py-28 px-8 md:px-16 flex justify-center"}>
        <Link
          to={"https://tally.so/r/3yoGZW"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          className={"flex w-full md:w-auto gap-3 items-center py-3 px-6 border border-black"}
        >
          Contact
          <File className={"size-4"}/>
        </Link>
      </div>
    </>
  );
}