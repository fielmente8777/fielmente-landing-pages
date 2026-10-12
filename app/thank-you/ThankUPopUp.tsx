"use client";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import Image from "next/image";
import { Container, Section, SectionWithContainer } from "@/components";
import Link from "next/link";
import { footerData } from "@/components/footers/footerData";
import {
  ImageIcon,
  Mail,
  ArrowOrange,
  ImageTwoIcon,
  WhatsAppIcon2,
  ArrowIcon2,
} from "@/utils/icons";

import { contacts } from "../../contact";
import "./Style.scss";

const ThankUPopUp = () => {
  // back to website
  const router = useRouter();
  const handleBackToWebsite = () => {
    router.push("https://fielmente.com/");
  };

  return (
    <Section defaultPadding={false} className="md:p-2 thank_you_bg">
      <div className="thank_you_page w-full ">
        {/* navigation */}
        <div className="md_box_shadow py-7">
          <Container>
            <nav className="flex items-center justify-between ">
              <div>
                <Link
                  href={"/"}
                  className="flex relative md:h-[3.5rem] h-[2.5rem]  md:aspect-[4/1.5] aspect-[3/1]"
                >
                  <Image src="/logo2.png" alt="fielment logo" fill sizes="100vw" />
                </Link>
              </div>
              {footerData.linksData.slice(0, 1).map((item, index) => (
                <ul className="flex items-center gap-4" key={index}>
                  {item.listOfLinks.map((link, index) => (
                    <li key={index} className="flex items-center">
                      <Link
                        href={link.href}
                        target="_blank"
                        className="flex items-center justify-center hover:bg-secondary text-secondary hover:text-white bg-white rounded-lg w-10 h-10 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-4d"
                      >
                        <span className="sr-only">{link.label}</span>
                        {link.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>
          </Container>
        </div>
        {/* main content */}
        <SectionWithContainer defaultPadding={false} sectionClassName="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            <div className="flex flex-col md:gap-8 gap-6">
              <div className="max-md:mx-auto">
                <Mail />
              </div>

              <h1 className="md:text-[2.75rem] text-[2rem] max-md:text-center text-white font-semibold max-w-md">
                Thank you for submitting!
              </h1>
              <div className="md:hidden w-full">
                <ImageTwoIcon />
              </div>
              <p className="text-white md:text-[1.75rem] text-xl max-md:text-center">
                We’ve received your request and will get back to you shortly.
              </p>
              <button
                onClick={handleBackToWebsite}
                aria-label="back to website"
                className="text-secondary w-fit max-md:mx-auto text-lg font-medium bg-white py-3 px-8 border border-secondary rounded-lg btn-shadow2"
              >
                Back to website
              </button>
            </div>
            <div className="md:block hidden aspect-[4/3] relative">
              <div className="absolute inset-0">
                <ImageIcon />
              </div>
            </div>
          </div>
          <div className="bg-[linear-gradient(to_right,_#110d3c,_#FFFFFF,_#110D3c)] md:my-6 my-10 h-[0.8px] w-full max-w-[90rem] mx-auto" />

          <div className="w-full md:flex hidden items-center justify-center md:gap-10">
            <span>
              <ArrowOrange />
            </span>
            <div className="grid grid-cols-3 gap-4 max-w-[338px]">
              <div className="w-full relative aspect-[1/1]">
                <Image src="/qr-code.png" alt="QR Code" fill sizes="100vw" />
              </div>
              <div className="col-span-2 flex flex-col justify-between">
                <p className="text-white md:text-[2rem] font-semibold">
                  Scan Me
                </p>
                <p className="text-white text-xl">
                  To connect with us on <b>WhatsApp!</b>
                </p>
              </div>
            </div>
            <span className="rotate-180">
              <ArrowOrange />
            </span>
          </div>
          <div className="md:hidden flex flex-col gap-6">
            <h2 className="text-white text-center text-[1.75rem] font-semibold">Tap Here </h2>
            <div className="flex items-center justify-center gap-6">
              <span>
                <ArrowIcon2 />
              </span>
              <Link
                href={`https://wa.me/${contacts.phone_1.replace(/\s+/g, "")}`}
              >
                <WhatsAppIcon2 />
              </Link>
              <span className="rotate-180">
                <ArrowIcon2 />
              </span>
            </div>
            <p className="text-white text-xl text-center max-w-[15rem] mx-auto">
              To connect with us on <b>WhatsApp!</b>
            </p>
          </div>
        </SectionWithContainer>
      </div>
    </Section>
  );
};

export default ThankUPopUp;
