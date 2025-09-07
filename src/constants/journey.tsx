import { ClipboardClock, CreditCard, Earth, ShieldCheck } from "lucide-react";

export const journey = {
    heading: "Start your journey in 4 simple steps to scale smarter and faster.",
    subHeadng: "Business with Zarea",
    steps: [
  {
    step: "STEP 1",
    title: "Register & Verify",
    desc: "Create your business profile and get verified to access the full marketplace.",
    icon: <ShieldCheck className="text-orange-500" size={30} />,
    active: true
  },
  {
    step: "STEP 2",
    title: "Explore & Connect",
    desc: "Explore a wide range of verified commodities tailored to your business needs.",
    icon: <Earth className="text-[#0E2437]" size={30} />,
    active: false
  },
  {
    step: "STEP 3",
    title: "Transact with Confidence",
    desc: "Engage with trusted suppliers, negotiate deals, and finalize contracts seamlessly.",
    icon: <ClipboardClock className="text-[#0E2437]" size={30} />,
    active: false
  },
  {
    step: "STEP 4",
    title: "Pay & Grow",
    desc: "Manage logistics, track deliveries, and settle payments — all in one platform.",
    icon: <CreditCard className="text-[#0E2437]" size={30} />,
    active: false
  },
]
}
