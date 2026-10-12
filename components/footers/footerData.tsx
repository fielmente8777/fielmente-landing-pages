import {
  FillFaceBookIcon,
  FillLinkedinIcon,
  FillLocationIcon,
  FillMailIcon,
  FillPhoneIcon,
  OutLineXIcon,
} from "@/utils/icons";
import { contacts } from "../../contact";
import { AiFillInstagram } from "react-icons/ai";

interface Link {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface FooterLinksPropstype {
  logo: string;
  description: string;
  linksData: {
    title: string;
    listOfLinks: Link[];
    icon?: React.ReactNode;
  }[];
}

export const SocialLinks: Link[] = [
  {
    label: Object.keys(contacts.socialContacts)[2],
    href: contacts.socialContacts.linkedin,
    icon: <FillLinkedinIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[0],
    href: contacts.socialContacts.facebook,
    icon: <FillFaceBookIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[1],
    href: contacts.socialContacts.instagram,
    icon: <AiFillInstagram />,
  },
  {
    label: Object.keys(contacts.socialContacts)[2],
    href: contacts.socialContacts.twitter,
    icon: <OutLineXIcon />,
  },
];

export const footerData: FooterLinksPropstype = {
  logo: "/logo2.png",
  description: "© Fielmente Hospitality Marketing Agency",
  linksData: [
    {
      title: "Follow Fielmente",
      listOfLinks: SocialLinks,
    },
    {
      title: "Company",
      listOfLinks: [
        {
          label: "About",
          href: "/about-fielmente-best-hospitality-marketing-agency/",
        },
        {
          label: "Industries We Serve",
          href: "/industries-we-serve/",
        },
        {
          label: "Our Products",
          href: "/products/",
        },
        {
          label: "Services",
          href: "/hospitality-marketing-services/",
        },
        {
          label: "Our Work",
          href: "https://www.eazotel.com/our-work/",
        },
        // {
        //   label: "Career",
        //   href: "",
        // },
        {
          label: "Blogs",
          href: "/blogs/",
        },
        {
          label: "Success Stories",
          href: "/case-study/",
        },
        {
          label: "Contact Us",
          href: "/contact-us/",
        },
        // {
        //   label: "Our Team",
        //   href: "",
        // },
      ],
    },
    {
      title: "Top Services",
      listOfLinks: [
        {
          label: "Hotel Marketing ",
          href: "/industries-we-serve/hotel-marketing-agency/",
        },
        {
          label: "Hotel Social Media",
          href: "/industries-we-serve/hotel-marketing-agency/hotel-social-media/",
        },
        {
          label: "Hotel SEO",
          href: "/industries-we-serve/hotel-marketing-agency/hotel-seo/",
        },
        {
          label: "Social Media Management",
          href: "/hospitality-marketing-services/social-media-marketing-agency/",
        },
        {
          label: "Search Engine Optimization (SEO)",
          href: "/hospitality-marketing-services/seo-agency/",
        },
        {
          label: "Performance Marketing",
          href: "/hospitality-marketing-services/google-ads-agency/",
        },
        {
          label: "Restaurant Social Media",
          href: "/industries-we-serve/restaurant-marketing-agency/restaurant-social-media/",
        },
        {
          label: "Restaurant Marketing",
          href: "/industries-we-serve/restaurant-marketing-agency/",
        },
        {
          label: "Cloud Kitchen Marketing",
          href: "/industries-we-serve/cloud-kitchen-marketing-agency/",
        },
        {
          label: "Cloud Kitchen Social Media",
          href: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-social-media/",
        },
        {
          label: "Cloud Kitchen Ads",
          href: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-google-ads/",
        },
      ],
    },
    {
      title: "Offices",
      listOfLinks: [
        ...contacts.addressesInIndia.map((address) => ({
          label: address.address,
          href: address.mapUrl,
          icon: <FillLocationIcon />,
        })),
      ],
    },
    {
      title: "Contact",
      listOfLinks: [
        ...contacts.phone.map((phone) => ({
          label: phone,
          href: `tel:${phone}`,
          icon: <FillPhoneIcon />,
        })),
        ...contacts.email.map((email) => ({
          label: email,
          href: `mailto:${email}`,
          icon: <FillMailIcon />,
        })),
      ],
    },
  ],
};
export const landingFooterData: FooterLinksPropstype = {
  logo: "/logo2.png",
  description: "© Fielmente Hospitality Marketing Agency",
  linksData: [
    {
      title: "Offices",
      icon: <FillLocationIcon />,
      listOfLinks: [
        ...contacts.addressesInIndia.map((address) => ({
          label: address.address,
          href: address.mapUrl,
          icon: <FillLocationIcon />,
        })),
      ],
    },
    {
      title: "Contact",
      icon: <FillPhoneIcon />,
      listOfLinks: [
        ...contacts.phone.map((phone) => ({
          label: phone,
          href: `tel:${phone}`,
          icon: <FillPhoneIcon />,
        })),
        ...contacts.email.map((email) => ({
          label: email,
          href: `mailto:${email}`,
          icon: <FillMailIcon />,
        })),
      ],
    },
  ],
};

export const policyLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy/",
  },
  {
    label: "Terms of Use",
    href: "/terms-of-use/",
  },
];
