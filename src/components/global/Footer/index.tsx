"use client";

import Image from "next/image";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="bg-customblue text-white py-6 mt-12">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-3 mb-3">
          <div className="flex flex-col gap-2">
            <Image
              src="/lele_logo.png"
              alt="LeLe logo"
              width={50}
              height={30}
              priority
            />
            <span>
              Effortless Learning, Endless Fun!<br></br>Spesialis kursus Bahasa
              Mandarin untuk orang dewasa yang seru & kekinian!
            </span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>About Our Founders</li>
              <li>Careers</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <FaWhatsapp className="w-6 h-6" />
                +62 878 1716 5550 (Admin)
              </li>
              <li className="flex gap-2">
                <FaInstagram className="w-6 h-6" />
                @lele.mandarin
              </li>
              <li className="flex gap-2">
                <FaTiktok className="w-6 h-6" />
                @lele.mandarin
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-t border-gray-300 mt-12"></hr>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} LeLe Mandarin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
