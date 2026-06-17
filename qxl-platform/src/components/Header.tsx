"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Search, Phone, User, ChevronDown, ChevronRight, Mic, FileText, Menu, X, Home, Layers, Microscope } from 'lucide-react';
import PrescriptionModal from './PrescriptionModal';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("Bengaluru");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const locationMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('qxl_location');
    if (saved) setLocation(saved);

    const handleClickOutside = (e: MouseEvent) => {
      if (locationMenuRef.current && !locationMenuRef.current.contains(e.target as Node)) {
        // Only for desktop dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLocation = (loc: string) => {
    setLocation(loc);
    localStorage.setItem('qxl_location', loc);
    window.dispatchEvent(new CustomEvent('locationChange', { detail: loc }));
    setShowLocationModal(false);
  };

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200">

      {/* ── DESKTOP HEADER (lg:block) ── */}
      <div className="hidden lg:block">
        {/* Top Row */}
        <div className="border-b border-gray-100 py-3">
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between w-full">

            {/* Logo & Location */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image
                  src="/image/Logo (1).png"
                  alt="QXL Diagnostics"
                  width={200}
                  height={52}
                  style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                  priority
                />
              </Link>
              <div className="h-8 w-px bg-gray-200 mx-5 hidden md:block"></div>
              <div className="relative" ref={locationMenuRef}>
                <div
                  className="flex items-center cursor-pointer text-gray-700 hover:text-[#2563eb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563eb] rounded-lg p-1"
                  onClick={() => setShowLocationModal(!showLocationModal)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setShowLocationModal(!showLocationModal);
                    }
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center mr-2">
                    <MapPin className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <span className="font-semibold text-sm text-[#4a5568]">
                    {isMounted ? location : "Bengaluru"}
                  </span>
                  <ChevronDown className="w-4 h-4 ml-1 text-gray-400 hidden sm:block" />
                </div>
                {showLocationModal && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {['Bengaluru', 'Gurgaon', 'Delhi'].map((loc) => (
                      <div
                        key={loc}
                        onClick={() => changeLocation(loc)}
                        className={`px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 transition-colors ${location === loc ? 'font-bold text-[#2563eb]' : 'text-gray-700'}`}
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
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
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center ml-2">
                <div className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center mr-2 flex-shrink-0">
                  <svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] text-gray-500 font-medium">Home Collection</span>
                  <a href="tel:+919964639639" className="text-[#2563eb] font-bold text-sm hover:underline">+91 9964 639639</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Nav Row */}
        <div className="bg-white py-3">
          <div className="max-w-[1200px] mx-auto px-4 w-full">
            <nav className="flex items-center justify-center w-full">
              <div className="flex items-center justify-between w-full max-w-[1200px] text-slate-700 text-[11px] xl:text-[12px] font-bold gap-2">
                <Link href="/" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">Home</Link>
                <Link href="/about" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide whitespace-nowrap">About Us</Link>
                <Link href="/founder" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide whitespace-nowrap">Founder & Advisors</Link>
                <Link href="/specialities" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide whitespace-nowrap">Our Specialities</Link>
                <Link href="/packages" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">Packages</Link>
                <Link href="/book" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">Book a Test</Link>
                <Link href="/centers" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide whitespace-nowrap">Find Nearest Centre</Link>
                <Link href="/report" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide whitespace-nowrap">Download Report</Link>
                <Link href="/franchise" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">Franchise</Link>
                <Link href="/login" className="hover:text-[#2563eb] transition-colors uppercase tracking-wide">Login</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ── MOBILE HEADER (lg:hidden) ── */}
      <div className="lg:hidden flex flex-col w-full bg-white">
        {/* Row 1: Hamburger + Logo | Location + User */}
        <div className="py-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 hover:bg-slate-100 rounded-xl transition-colors flex-shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
            <Link href="/">
              <Image
                src="/image/Logo (1).png"
                alt="QXL Diagnostics"
                width={150}
                height={36}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {/* Location → opens centered modal */}
            <button
              onClick={() => setShowLocationModal(true)}
              className="flex items-center gap-1 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1.5"
              aria-label="Select location"
            >
              <MapPin className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0" />
              <span className="font-extrabold text-[11px] text-[#2563eb] max-w-[64px] truncate">{location}</span>
              <ChevronDown className="w-3 h-3 text-[#2563eb] flex-shrink-0" />
            </button>
          </div>
        </div>

        {/* Row 2: Search Bar */}
        <div className="px-4 pb-3">
          <div className="flex items-center bg-white rounded-2xl border border-gray-200 focus-within:border-[#2563eb]/60 focus-within:shadow-sm transition-all px-3 py-2.5 gap-2">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search For Lab Tests/Package"
              className="flex-1 bg-transparent border-none text-[13px] font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-0 p-0 min-w-0"
              onChange={(e) => {
                window.dispatchEvent(new CustomEvent('searchQueryChange', { detail: e.target.value }));
              }}
            />
          </div>
        </div>
      </div>
    </header>

      {/* ── LOCATION MODAL (mobile, centered) ── */}
      {showLocationModal && (
        <div className="fixed inset-0 z-[10000] lg:hidden flex items-center justify-center px-8">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowLocationModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2563eb]" />
                <span className="font-extrabold text-[#0f2d5e] text-sm">Select Your City</span>
              </div>
              <button
                onClick={() => setShowLocationModal(false)}
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-2">
              {['Bengaluru', 'Gurgaon', 'Delhi'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => changeLocation(loc)}
                  className={`w-full flex items-center justify-between px-4 py-4 rounded-xl font-bold text-sm transition-all ${location === loc
                    ? 'bg-[#2563eb] text-white shadow-lg'
                    : 'bg-gray-50 text-slate-700 hover:bg-blue-50 hover:text-[#2563eb]'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${location === loc ? 'text-white' : 'text-[#2563eb]'}`} />
                    <span>{loc}</span>
                  </div>
                  {location === loc && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE SIDEBAR DRAWER ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-[280px] h-[100dvh] bg-white shadow-2xl flex flex-col z-[9999]">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-[#eff6ff] to-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white flex-shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold text-sm text-[#0f2d5e]">Welcome Guest</p>
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-[11px] text-[#2563eb] font-bold hover:underline">
                    Login / Register
                  </Link>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-slate-700 shadow-sm transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links — scrollable */}
            <div className="flex-1 overflow-y-auto py-2 px-3">
              <nav className="flex flex-col gap-0.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Founder & Advisors", href: "/founder" },
                  { label: "Our Specialities", href: "/specialities" },
                  { label: "Packages", href: "/packages" },
                  { label: "Book a Test", href: "/book" },
                  { label: "Find Nearest Centre", href: "/centers" },
                  { label: "Download Report", href: "/report" },
                  { label: "Franchise", href: "/franchise" },
                  { label: "Login", href: "/login" },
                ].map((item) => {
                  const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`min-h-[48px] px-4 rounded-xl flex items-center justify-between transition-colors ${isActive
                        ? 'bg-[#eff6ff] text-[#2563eb] font-extrabold'
                        : 'text-slate-700 hover:bg-gray-50 font-semibold'
                        }`}
                    >
                      <span className="text-sm">{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex-shrink-0" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 16px)' }}>
              <a
                href="tel:+919964639639"
                className="w-full text-center bg-white text-slate-700 font-extrabold py-3 rounded-xl hover:bg-gray-100 transition-colors text-xs flex items-center justify-center gap-2 border border-slate-200 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#2563eb]" /> Call: +91 9964 639639
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE BOTTOM NAVIGATION (truly fixed at bottom, 5 tabs) ── */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-[9999] lg:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)', boxShadow: '0 -2px 12px rgba(0,0,0,0.08)' }}
      >
        <div className="flex justify-around items-center h-14">
          {[
            { label: "Home", href: "/", icon: Home },
            { label: "Book a Test", href: "/book", icon: Microscope },
            { label: "Packages", href: "/packages", icon: Layers },
            { label: "Reports", href: "/report", icon: FileText },
            { label: "Login", href: "/login", icon: User },
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isActive = tab.href === '/' ? pathname === '/' : pathname?.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full"
              >
                <TabIcon
                  className={`w-[22px] h-[22px] transition-all ${
                    isActive ? 'text-[#2563eb]' : 'text-gray-900'
                  }`}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
                <span
                  className={`text-[9px] font-bold tracking-wide uppercase leading-none ${
                    isActive ? 'text-[#2563eb]' : 'text-gray-900'
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Prescription Modal */}
      <PrescriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
