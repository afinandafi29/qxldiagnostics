"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d2e42] text-white">



      {/* Main Footer */}
      <div className="max-w-[1260px] mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img src="/image/Logo (1).png" alt="QXL Diagnostics Logo"
              className="h-14 w-auto object-contain mb-5 brightness-0 invert"
              onError={(e) => { e.currentTarget.src = '/image/QXL-Diagnostics-Lab-Logo-1.jpg'; }} />
            <p className="text-slate-300 text-[13px] leading-relaxed font-medium mb-5">
              QXL Diagnostics Super Speciality Lab — Unit of Qualitify Healthtech Pvt Ltd. NABL certified diagnostic testing across Bengaluru.
            </p>
            {/* NABL Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
              <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <p className="text-white font-extrabold text-[11px] uppercase tracking-wider">NABL Certified</p>
                <p className="text-slate-300 text-[10px] font-medium">ISO 15189 Standards</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Founder & Advisors", href: "/founder" },
                { label: "Our Specialities", href: "/specialities" },
                { label: "Speciality Tests", href: "/speciality-tests" },
                { label: "Health Packages", href: "/packages" },
                { label: "Book a Test", href: "/book" },
                { label: "Download Report", href: "/report" },
                { label: "Franchise", href: "/franchise" },
                { label: "Login", href: "/login" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-slate-300 hover:text-white text-[13px] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#2563eb] group-hover:w-3 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">Specialities</h4>
            <ul className="space-y-3">
              {[
                { label: "Neurology", href: "/specialities/neurology" },
                { label: "Hematology", href: "/specialities/hematology" },
                { label: "Cardiology", href: "/specialities/cardiology" },
                { label: "Urology", href: "/specialities/urology" },
                { label: "Endocrinology", href: "/specialities/endocrinology" },
                { label: "Oncology", href: "/specialities/oncology" },
                { label: "Infectious Diseases", href: "/specialities/infectious-diseases" },
                { label: "Women's Health", href: "/specialities/womens-health" },
                { label: "Gastroenterology", href: "/specialities/gastroenterology" },
                { label: "Bone Disorders", href: "/specialities/bone-disorders" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-slate-300 hover:text-white text-[13px] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#2563eb] group-hover:w-3 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2563eb]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-white text-[12px] font-bold mb-0.5">Main Lab (Kengeri)</p>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
                    3rd Floor, SLN Complex, Mysore Road, Kengeri, Bengaluru – 560 060
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2563eb]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-white text-[12px] font-bold mb-0.5">North Hub (Yelahanka)</p>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
                    L Square, opposite RMZ Galleria Mall, Yelahanka, Bengaluru – 560 064
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2563eb]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#2563eb]" />
                </div>
                <div>
                  <a href="tel:+919964639639" className="text-white text-[13px] font-bold hover:text-blue-300 transition-colors">+91 99646 39639</a>
                  <p className="text-slate-400 text-[11px] mt-0.5">Open 24x7</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2563eb]/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#2563eb]" />
                </div>
                <a href="mailto:qxldiagnostics@gmail.com"
                  className="text-slate-300 text-[13px] font-medium hover:text-white transition-colors self-center">
                  qxldiagnostics@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1260px] mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-[12px] font-medium">
            © {year} QXL Diagnostics — Unit of Qualitify Healthtech Pvt Ltd. All rights reserved.
          </p>
          <p className="text-slate-400 text-[12px] font-medium">
            NABL Certified · ISO 15189 · CAP Standards · Bengaluru, Karnataka
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-slate-400 hover:text-white text-[12px] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-white text-[12px] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
