import React from 'react'
import { useTranslation } from 'react-i18next';
import { LuShare2 } from 'react-icons/lu'
import { MdKeyboardArrowDown, MdOutlineLanguage } from 'react-icons/md'

export default function Navbar() {
  const { i18n } = useTranslation();
  
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-auto object-contain"
        />

        <div className="flex items-center space-x-6">
          <button className="flex flex-col cursor-pointer items-center justify-center group transition-colors">
            <LuShare2
              className="w-6 h-6 text-[#1e293b] transition-transform group-hover:scale-110"
              strokeWidth={2.5}
            />
            <span className="mt-1 text-[13px] font-semibold text-[#1e293b]">
              Share tour
            </span>
          </button>

          <div className="relative flex items-center group">
            <MdOutlineLanguage 
              className="absolute left-3 text-gray-500 text-lg pointer-events-none group-focus-within:text-blue-500" 
            />

            <select
              value={i18n.language} // default value o'rniga value ishlatish
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="w-32 sm:w-36 h-10 appearance-none bg-white border border-gray-200 rounded-xl pl-9 pr-8 text-sm font-semibold text-gray-700 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
            >
              <option value="en">English</option>
              <option value="uz">Oʻzbekcha</option>
            </select>

            <MdKeyboardArrowDown 
              className="absolute right-2 text-gray-400 text-xl pointer-events-none" 
            />
          </div>
        </div>
      </div>
    </nav>
  )
}