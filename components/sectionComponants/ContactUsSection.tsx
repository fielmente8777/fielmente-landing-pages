import { JSX } from "react";
import SectionWithContainer from "./SectionWithContainer";
import SectionHeading from "../typography/SectionHeadingDesc";
import Link from "next/link";
import { Form1 } from "../forms";

interface Props {
  title: string;
  subTitle: string;
  links: {
    label: string;
    href: string;
    title: string;
  }[];
  socialLinks: {
    title: string;
    Link: {
      label: string;
      href: string;
      icon: JSX.Element;
    }[];
  };
}
const ContactUsSection: React.FC<Props> = ({
  title,
  subTitle,
  links,
  socialLinks,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative after:absolute md:after:inset-6 after:inset-3 after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#F9FAFB] before:z-[-2] after:z-[-1]"
      containerClassName="grid md:grid-cols-2 lg:gap-16 gap-6"
    >
      <div className="md:space-y-8 space-y-4 max-md:px-4 max-md:pt-4 w-full">
        <SectionHeading title={title} subTitle={subTitle} />
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="flex flex-col gap-.5 font-medium md:text-lg text-sm text-primary"
              >
                <span className="text-xs md:text-base text-secondary">{link.title}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4">
          <p>{socialLinks.title}</p>
          <ul className="flex items-center gap-2">
            {socialLinks.Link.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="flex items-center justify-center gap-2 bg-black text-white rounded-full w-10 h-10 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-4d"
                >
                  <span className="sr-only">{link.label}</span>
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Form1 />
      </div>
    </SectionWithContainer>
  );
};

export default ContactUsSection;
