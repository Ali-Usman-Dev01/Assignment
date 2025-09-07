import Image from "next/image";
import { footerData } from "@/constants/footer";

const Footer = () => {
  return (
    <footer className="bg-[#061B2E] text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* About */}
        <div className="flex flex-col gap-4 w-[70%]">
          <Image
            src={footerData.about.logo}
            width={120}
            height={40}
            alt="Zarea Logo"
          />
          <p
            className="text-sm opacity-80"
            dangerouslySetInnerHTML={{ __html: footerData.about.description }}
          />
          <div className="flex gap-4 mt-4">
            {footerData.about.webLinks.map(({ name, icon: Icon }) => (
              <Icon
                key={name}
                className="w-5 h-5 hover:text-orange-500 cursor-pointer transition"
              />
            ))}
          </div>
        </div>

        <div className="flex items-start flex-col sm:flex-row gap-3 w-full">
          {/* Company Links */}
          <div className="w-full">
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              {footerData.companyLinks.map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-500 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* social Info */}
          <div className="w-full">
            <h3 className="text-sm font-bold mb-4">Social Links</h3>
            {footerData.about.social.map(({ name }, i) => (
              <p key={i} className="text-sm  mb-3">
                {name}
              </p>
            ))}
          </div>

          {/* Contact Info */}
          <div className="w-full">
            <h3 className="text-sm opacity-80 mb-2">Registered Office</h3>
            <p className="text-sm  mb-3">{footerData.contact.office}</p>
            <p className="text-sm opacity-80 mb-2">Drop us a line:</p>
            <p className="text-sm mb-3">{footerData.contact.email}</p>
            <p className="text-sm opacity-80 mb-2">Call us:</p>
            <p className="text-sm">{footerData.contact.phone}</p>
          </div>
        </div>

        {/* Mobile App */}
        <div className="bg-[#562315] relative rounded-2xl px-6 pt-6 flex items-start justify-between flex-col gap-4">
          <div className="flex flex-col items-start gap-2">
            <h3 className="uppercase text-sm opacity-90">
              {footerData.app.heading}
            </h3>
            <p className="text-lg font-semibold leading-snug">
              {footerData.app.subHeading}
            </p>
            <button className="border-white border hover:bg-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
              {footerData.app.button}
            </button>
          </div>
          <Image
            src={footerData.app.image}
            width={300}
            height={200}
            alt="App"
            className="self-end"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-80">
        <div className="flex flex-wrap gap-4">
          {footerData.policies.map((policy) => (
            <p key={policy}>{policy}</p>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Zarea. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
