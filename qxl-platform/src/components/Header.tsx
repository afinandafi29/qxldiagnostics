"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Search, Phone, User, Download, ChevronDown, Mic, FileText } from 'lucide-react';
import PrescriptionModal from './PrescriptionModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200">
      
      {/* Top Row */}
      <div className="border-b border-gray-100 py-3">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between w-full">
          
          {/* Logo & Location Area */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/image/Logo (1).png" 
                alt="QXL Diagnostics" 
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                onError={(e) => { e.currentTarget.src='/image/QXL-Diagnostics-Lab-Logo-1.jpg'; }} 
              />
            </Link>
            
            <div className="h-8 w-px bg-gray-200 mx-5 hidden md:block"></div>
            
            <div className="flex items-center cursor-pointer text-gray-700 hover:text-[#2563eb] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center mr-2">
                <MapPin className="w-4.5 h-4.5 text-[#2563eb]" />
              </div>
              <span className="font-semibold text-sm text-[#4a5568]">Bengaluru</span>
              <ChevronDown className="w-4 h-4 ml-1 text-gray-400 hidden sm:block" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[600px] mx-6 hidden md:block">
            <div className="relative flex items-center w-full bg-white rounded-xl border border-gray-200 focus-within:border-[#2563eb]/50 focus-within:shadow-md transition-all">
              <div className="pl-4 py-3 text-gray-500">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search Tests" 
                className="w-full bg-transparent border-none py-3 px-3 text-[15px] font-semibold text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0"
              />
              <div className="flex items-center pr-3">
                <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-full transition-colors" aria-label="Voice Search">
                  <Mic className="w-5 h-5" />
                </button>
                <div className="w-px h-6 bg-gray-200 mx-2"></div>
                <button onClick={() => setIsModalOpen(true)} className="p-2 text-[#1e3a8a] hover:bg-blue-50 rounded-full transition-colors relative" aria-label="Upload Prescription">
                  <FileText className="w-5 h-5" />
                  <div className="absolute bottom-1.5 right-1.5 w-3 h-3 bg-red-500 rounded-full border border-white flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4">

            <div className="hidden sm:flex items-center ml-2">
              <div className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center mr-2 flex-shrink-0">
                <svg className="w-4.5 h-4.5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] text-gray-500 font-medium">Home Collection</span>
                <a href="tel:+919964639639" className="text-[#2563eb] font-bold text-sm hover:underline">+91 99646 39639</a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-gray-600 p-1 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
          </div>
          
        </div>
      </div>

      {/* Bottom Nav Row */}
      <div className="hidden lg:block bg-white py-3">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <nav className="flex items-center justify-center w-full">
            
            {/* Main Links */}
            <div className="flex items-center justify-between w-full max-w-[1100px] text-slate-700 text-[14px] font-bold">
              <Link href="/" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">Home</Link>
              <Link href="/about" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">About Us</Link>
              <Link href="/founder" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">Founder & Advisors</Link>
              <Link href="/specialities" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">Our Specialities</Link>
              <Link href="/packages" className="bg-sky-100 text-sky-700 px-4 py-2 rounded-lg font-bold hover:bg-sky-200 transition-colors uppercase tracking-wide text-[13px] shadow-sm">Packages</Link>
              <Link href="/login" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">Login</Link>
              <Link href="/book" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">My Bookings</Link>
              <Link href="/report" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">My Reports</Link>
              <Link href="/book" className="bg-[#2563eb] text-white px-6 py-2 rounded-full hover:bg-[#1d4ed8] transition-all shadow-sm">Book a Test</Link>
            </div>

          </nav>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop shadow */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-[300px] bg-white shadow-2xl flex flex-col p-6 transition-transform transform duration-300 ease-in-out">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <span className="font-extrabold text-sm text-[#0f2d5e]">Navigation Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-gray-500 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col gap-4 text-slate-700 text-sm font-semibold">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#2563eb] py-2 border-b border-gray-50 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#2563eb] py-2 border-b border-gray-50 transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/founder" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#2563eb] py-2 border-b border-gray-50 transition-colors"
              >
                Founder & Advisors
              </Link>
              <Link 
                href="/specialities" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#2563eb] py-2 border-b border-gray-50 transition-colors"
              >
                Our Specialities
              </Link>
              <Link 
                href="/packages" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-sky-100 text-sky-700 py-2 px-3 rounded-lg hover:bg-sky-200 transition-colors my-1 text-center"
              >
                Packages
              </Link>
              <Link 
                href="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#2563eb] py-2 border-b border-gray-50 transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/book" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#2563eb] py-2 border-b border-gray-50 transition-colors"
              >
                My Bookings
              </Link>
              <Link 
                href="/report" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#2563eb] py-2 border-b border-gray-50 transition-colors"
              >
                My Reports
              </Link>
            </nav>
            
            <div className="mt-8 flex flex-col gap-4">
              <Link 
                href="/book" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#2563eb] text-white font-bold py-3 rounded-full hover:bg-[#1d4ed8] transition-all text-xs uppercase tracking-wider shadow-sm"
              >
                Book a Test
              </Link>
              <a 
                href="tel:+919964639639" 
                className="w-full text-center bg-gray-50 text-slate-700 font-bold py-3 rounded-full hover:bg-gray-100 transition-colors text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#2563eb]" /> Call: +91 99646 39639
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Prescription Modal */}
      <PrescriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
