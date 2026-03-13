import React from "react";
import { FaTelegramPlane, FaPinterestP, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export default function Footer() {
  const cities = ["Tashkent", "Bukhara", "Samarkand", "Shahrisabz", "Termez", "Khorezm"];

  return (
    <footer className="w-full bg-[#1a2236] font-sans px-8 py-5 text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
        <div className="flex flex-col leading-tight select-none">
          <span className="font-bold text-lg tracking-wide text-white">Uzbekistan</span>
          <span className="text-sm font-semibold text-[#e8304a] tracking-widest">
            journeys
          </span>
        </div>

        <nav className="flex flex-wrap gap-4 md:gap-7">
          {cities.map((city) => (
            <a
              key={city}
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              {city}
            </a>
          ))}
        </nav>

        <a
          href="tel:+998910010000"
          className="text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200"
        >
          +998 91 001-00-00
        </a>
      </div>

      <div className="my-3 border-t border-white/10" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
        <p className="text-xs text-gray-400 flex items-center gap-1">
          © 2026 – Designed with <FcLike className="inline" /> in Tashkent
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: <FaTelegramPlane size={16} />, href: "#" },
            { icon: <FaPinterestP size={16} />, href: "#" },
            { icon: <FaInstagram size={16} />, href: "#" },
            { icon: <FaFacebookF size={16} />, href: "#" },
          ].map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}