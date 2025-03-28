import { Twitch, Instagram, DirectInbox } from "iconsax-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#5e40ff] text-white py-16 px-8">
      <div className=" container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section - Logo and Links */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-6 text-[#C0CBF0]">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy & Data Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Compliance & Trust
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-7 text-[#C0CBF0]">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Academy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Socials</h4>
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="bg-white/20 rounded-full p-4 hover:bg-white/30 transition"
              >
                <Instagram size="20" color="white" variant="Outline" />
              </a>
              <a
                href="#"
                className="bg-white/20 rounded-full p-4 hover:bg-white/30 transition"
              >
                <Twitch size="20" color="white" variant="Outline" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end">
         

          {/* Newsletter Signup */}
          <div className="w-full max-w-md">
            <h4 className="text-3xl font-semibold mb-4 md:text-right">
              Sign up for our newsletter
            </h4>
            <div className="flex flex-col gap-4 my-6 space-x-2">
              <div className="flex gap-3 items-center bg-white/10 border-white/20 rounded-2xl p-2 px-3">
                <DirectInbox color="#fff" size={25} />
                <Input
                  type="email"
                  placeholder="dom@mail.com"
                  className="outline-none focus-visible:ring-[0px]  placeholder:text-white placeholder:opacity-55 ring-0 shadow-none border-none !text-white py-4 "
                />
              </div>
              <Button
                variant="secondary"
                className="bg-white py-5 text-[#5e40ff] hover:bg-white/90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center  flex-wrap  gap-6 container mx-auto mt-16 flex items-center justify-between text-white/70">
        <img src="/logo-full.svg" />
        <p className="">All Rights Reserved © 2025 Billow</p>
      </div>

      {/* Logo */}
    </footer>
  );
};

export default Footer;
