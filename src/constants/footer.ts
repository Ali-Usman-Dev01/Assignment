import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export const footerData = {
  about: {
    logo: "/logo.svg",
    description:
      "Zarea is Pakistan’s leading digital B2B trade platform, connecting verified buyers and suppliers across high-impact sectors.",
    social: [
      { name: "Facebook", icon: Facebook },
      { name: "Twitter", icon: Twitter },
      { name: "Instagram", icon: Instagram },
      { name: "Linkedin", icon: Linkedin },
      { name: "Youtube", icon: Youtube },
    ],
  },
  companyLinks: [
    "Home",
    "About Us",
    "Trade with Zarea",
    "Shop Now",
    "Data Analytics",
    "Investor",
    "News & Updates",
    "How we Create Impact",
    "Careers",
  ],
  contact: {
    office: "Zarea Limited, Data & Office No. 601, Lahore Cantt.",
    email: "info@zarea.pk",
    phone: "+92 325 7111222",
  },
  app: {
    heading: "Zarea Mobile App",
    subHeading: "Pakistan’s Leading B2B Commodity App",
    button: "Download the App →",
    image: "/mobile.png",
  },
  policies: ["Terms of Conditions", "Privacy Policy", "Cookie Policy"],
};

