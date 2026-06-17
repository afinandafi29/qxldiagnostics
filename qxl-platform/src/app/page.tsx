"use client";
import React, { useState, useEffect } from "react";
import { packagesData } from '../data/packages';
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, FileText, Phone, MessageCircle, Droplet, Activity, Heart, Shield, Star, Users, Microscope } from "lucide-react";
import PrescriptionModal from "../components/PrescriptionModal";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState("Bengaluru");
  const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('qxl_location');
    if (saved) setLocation(saved);
    
    const handleLoc = (e: any) => setLocation(e.detail);
    window.addEventListener('locationChange', handleLoc);
    return () => window.removeEventListener('locationChange', handleLoc);
  }, []);

  const slides = [
    {
      imageOnly: true,
      image: "/image/food_intolerance_banner.png",
      bgFrom: "#ffffff",
      bgTo: "#ffffff",
      title: "Food Intolerance",
      badge: "NEW",
      titleAccent: "",
      subtitle: "",
      subtitleAccent: "",
      description: "",
      cta: "",
      ctaLink: "",
      ctaSecondary: "",
      ctaSecondaryLink: "",
      imageFit: "cover",
      features: []
    },
    {
      imageOnly: true,
      image: "/image/franchise_banner.png",
      bgFrom: "#ffffff",
      bgTo: "#ffffff",
      title: "Franchise",
      badge: "NEW",
      titleAccent: "",
      subtitle: "",
      subtitleAccent: "",
      description: "",
      cta: "",
      ctaLink: "",
      ctaSecondary: "",
      ctaSecondaryLink: "",
      imageFit: "cover",
      features: []
    },
    {
      badge: "LEADER IN DIAGNOSTICS",
      title: "BENGALURU'S MOST ADVANCED",
      titleAccent: "CERTIFIED DIAGNOSTICS LAB",
      subtitle: "Experience cutting-edge diagnostic services",
      subtitleAccent: "with unparalleled accuracy & efficiency",
      description: "Supported by state-of-the-art technology and a highly skilled team of pathologists, microbiologists, and biochemists.",
      cta: "Book Now",
      ctaLink: "/book",
      ctaSecondary: "Our Specialities",
      ctaSecondaryLink: "/speciality-tests",
      image: "/image/user_female_microscope.jpg",
      imageFit: "cover",
      bgFrom: "#eff6ff",
      bgTo: "#dbeafe",
      features: ["NABL Certified", "CAP Standards", "Highly Skilled Team", "100% Accurate"],
    },
    {
      badge: "FAMILY CARE",
      title: "Double the Care",
      titleAccent: "Double the Savings",
      subtitle: "Full Body Comprehensive Health Check-up",
      subtitleAccent: "1+1 FAMILY OFFER",
      description: "Get comprehensive insights for two people for the price of one. 86+ Parameters included.",
      cta: "Book Now",
      ctaLink: "/book",
      ctaSecondary: "Learn More",
      ctaSecondaryLink: "/packages",
      image: "/image/user_family.jpg",
      imageFit: "cover",
      bgFrom: "#f0f9ff",
      bgTo: "#e0f2fe",
      features: ["86+ Tests", "1+1 Offer", "Save 50%", "Home Collection"],
    },
    {
      badge: "EXECUTIVE SCREENING",
      title: "QXL SUPER SPECIALITY",
      titleAccent: "HEALTH SCREENING PACKAGE",
      subtitle: "TOTAL TESTS 317",
      subtitleAccent: "AT JUST ₹7999",
      description: "Advanced diagnostic package tailored for busy professionals. Comprehensive screening to keep you at peak performance.",
      cta: "Book Now »",
      ctaLink: "/book",
      ctaSecondary: "View Package",
      ctaSecondaryLink: "/packages",
      image: "/image/slide_female_doctor.png",
      imageFit: "cover",
      bgFrom: "#dbeafe",
      bgTo: "#eff6ff",
      features: ["317 Tests", "₹7999 Only", "Priority Service", "Doctor Consult"],
    },
    {
      badge: "PARTNER WITH US",
      title: "You too can",
      titleAccent: "Grow with us",
      subtitle: "Own a franchise of",
      subtitleAccent: "India’s Leading Diagnostics Chain",
      description: "Join the QXL Diagnostics network. NABL & CAP Accredited Labs with a High Return on Investment.",
      cta: "Explore Franchise",
      ctaLink: "/franchise",
      ctaSecondary: "Learn More",
      ctaSecondaryLink: "/about",
      image: "/image/franchise_partner_indian.png",
      imageFit: "cover",
      bgFrom: "#f0f9ff",
      bgTo: "#e0f2fe",
      features: ["NABL & CAP", "High ROI", "Full Training", "Brand Trust"],
    },
    {
      badge: "FRIENDSHIP OFFER",
      title: "Best friends do everything together.",
      titleAccent: "WHY NOT HEALTH CHECKUPS TOO?",
      subtitle: "BUY 1 GET 1 FREE",
      subtitleAccent: "FULL BODY CHECKUP",
      description: "Bring a friend and get a Free FATTY LIVER TEST. Starting at just ₹850 ONLY.",
      cta: "Book Offer",
      ctaLink: "/book",
      ctaSecondary: "Share with Friend",
      ctaSecondaryLink: "#",
      image: "/image/happy_couple_phone.png",
      imageFit: "cover",
      bgFrom: "#dbeafe",
      bgTo: "#eff6ff",
      features: ["BOGO Offer", "Free Liver Test", "₹850 Only", "Shared Health"],
    },
    {
      badge: "PREVENTIVE CARE",
      title: "Know your health risks.",
      titleAccent: "Before they become health problems.",
      subtitle: "Advanced Preventive Screenings",
      subtitleAccent: "Starting at ₹5,999 ONLY",
      description: "Prevention is better than cure. Discover your health baseline with our comprehensive full body checkups.",
      cta: "Book Now »",
      ctaLink: "/book",
      ctaSecondary: "Reports in 6 hours",
      ctaSecondaryLink: "/packages",
      image: "/image/user_team.jpg",
      imageFit: "cover",
      bgFrom: "#eff6ff",
      bgTo: "#e0f2fe",
      features: ["₹5,999 Only", "6-Hour Reports", "Full Body", "Actionable Data"],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const mobileSlides = slides.filter(s => !s.imageOnly);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % mobileSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [mobileSlides.length]);

  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const activeSlide = slides[currentSlide];

  const recommendedPackages = packagesData.slice(0, 4);

  const bodyOrgans = [
    { name: "Heart", image: "/image/cardiology.png" },
    { name: "Thyroid", image: "/image/spec_endocrinology.png" },
    { name: "Liver", image: "/image/spec_gastro.png" },
    { name: "Bone & Joint", image: "/image/bone_disorders.png" },
    { name: "Infertility", image: "/image/spec_womens.png" },
    { name: "Kidney", image: "/image/spec_urology.png" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8faff]">

      {/* ── DESKTOP VIEW (hidden lg:flex) ── */}
      <div className="hidden lg:flex flex-col w-full">
        {/* ── Hero Slider ── */}
        <section className="pt-6 pb-4 relative group overflow-hidden">
          <div className="max-w-[1260px] mx-auto px-4 w-full">
            <div
              className="relative rounded-[28px] overflow-hidden flex flex-col md:flex-row h-[580px] md:h-[520px] transition-all duration-700"
              style={{ background: `linear-gradient(135deg, ${activeSlide.bgFrom} 0%, ${activeSlide.bgTo} 100%)` }}
            >
              {activeSlide.imageOnly ? (
                <div className="w-full h-full relative z-10">
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority
                  />
                </div>
              ) : (
                <>
                  {/* Decorative blobs */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563eb]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2563eb]/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
   
                  {/* Content */}
                  <div className="w-full md:w-[52%] px-8 md:px-14 py-6 md:py-0 h-[330px] md:h-full flex flex-col justify-center z-10 relative">
                    <span className="inline-block bg-[#2563eb] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-widest uppercase mb-3.5 w-fit shadow-sm">
                      {activeSlide.badge}
                    </span>
                    <h1 className="text-[26px] md:text-[34px] leading-[1.1] font-extrabold text-[#0d2e42] mb-1">
                      {activeSlide.title}
                    </h1>
                    <h1 className="text-[26px] md:text-[34px] leading-[1.1] font-extrabold text-[#2563eb] mb-2.5">
                      {activeSlide.titleAccent}
                    </h1>
                    <p className="text-[14px] md:text-[16px] font-bold text-slate-600 mb-1">
                      {activeSlide.subtitle}{" "}
                      <span className="text-[#2563eb]">{activeSlide.subtitleAccent}</span>
                    </p>
                    <p className="text-[12.5px] text-slate-500 font-medium leading-relaxed mb-4 max-w-md">
                      {activeSlide.description}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {activeSlide.features.map((f) => (
                        <span key={f} className="bg-white/70 border border-[#2563eb]/20 text-[#2563eb] text-[10.5px] font-bold px-3 py-1 rounded-full shadow-sm">
                          ✓ {f}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      <Link href={activeSlide.ctaLink}
                        className="inline-block bg-[#2563eb] text-white font-bold px-7 py-3 rounded-full shadow-md hover:bg-[#1d4ed8] transition-all transform hover:scale-[1.02] text-sm">
                        {activeSlide.cta}
                      </Link>
                      <a href={activeSlide.ctaSecondaryLink}
                        className="inline-block border-2 border-[#2563eb] text-[#2563eb] font-bold px-7 py-3 rounded-full hover:bg-[#dbeafe] transition-all text-sm">
                        {activeSlide.ctaSecondary}
                      </a>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-56 h-56 rounded-2xl bg-[#dbeafe] absolute top-10 right-10 lg:w-[450px] lg:h-[450px] overflow-hidden border-8 border-white/20 shadow-2xl z-20 animate-in zoom-in duration-700">
                    <Image
                      key={activeSlide.id}
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </>
              )}

              {/* Slide dots */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((s, idx) => (
                  <button key={s.id} onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-7 bg-[#2563eb]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md border border-gray-100 flex items-center justify-center text-slate-700 hover:bg-white hover:text-[#2563eb] transition-all z-20 opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <button onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md border border-gray-100 flex items-center justify-center text-slate-700 hover:bg-white hover:text-[#2563eb] transition-all z-20 opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-5 h-5" />
          </button>
        </section>

        {/* ── Action Cards ── */}
        <section className="pt-2 pb-6">
          <div className="max-w-[1260px] mx-auto px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/upload-prescription"
                className="bg-white rounded-2xl p-5 border border-gray-150 shadow-sm flex items-center justify-between group hover:shadow-md hover:border-[#2563eb]/30 transition-all">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#dbeafe] flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[14px] mb-0.5">Have a Prescription?</h3>
                    <p className="text-[12px] text-gray-500 font-medium">Upload and book your tests</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#2563eb] group-hover:text-white transition-colors" />
                </div>
              </Link>

              <Link href="/franchise"
                className="bg-white rounded-2xl p-5 border border-gray-150 shadow-sm flex items-center justify-between group hover:shadow-md hover:border-[#2563eb]/30 transition-all">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#dbeafe] flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[14px] mb-0.5">Franchise</h3>
                    <p className="text-[12px] text-gray-500 font-medium">You too can Grow with us</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#2563eb] group-hover:text-white transition-colors" />
                </div>
              </Link>

              <a href="https://api.whatsapp.com/send?phone=919964639639" target="_blank" rel="noreferrer"
                className="bg-white rounded-2xl p-5 border border-gray-150 shadow-sm flex items-center justify-between group hover:shadow-md hover:border-green-200 transition-all">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#25d366] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[14px] mb-0.5">WhatsApp Booking</h3>
                    <p className="text-[12px] text-gray-500 font-medium">Text us on WhatsApp to book a test</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── Recommended Packages ── */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="max-w-[1260px] mx-auto px-4 w-full">
            <div className="flex justify-between items-end mb-7">
              <div>
                <span className="text-[10px] font-extrabold text-[#2563eb] uppercase tracking-widest">Health Packages</span>
                <h2 className="text-[#0f2d5e] text-2xl font-extrabold mt-0.5">Recommended Packages</h2>
                <p className="text-slate-500 text-xs font-semibold mt-1">Our most popular general health panels — trusted by thousands</p>
              </div>
              <Link href="/packages" className="border border-[#2563eb] text-[#2563eb] font-bold px-6 py-2 rounded-xl text-xs hover:bg-[#dbeafe] transition-colors">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {recommendedPackages.map((pkg) => (
                <div key={pkg.name} className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group">
                  <div className="w-full bg-gradient-to-r from-[#dbeafe] to-[#eff6ff] px-4 py-3 flex justify-between items-center border-b border-[#bfdbfe]">
                    <span className="bg-[#2563eb] text-white px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider shadow-sm">{pkg.tag || "PACKAGE"}</span>
                    <span className="bg-white text-emerald-600 px-2.5 py-1 rounded-full text-[10px] font-extrabold shadow-sm border border-emerald-100">{Math.round((1 - Number(pkg.price) / Number(pkg.old_price)) * 100)}% OFF</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-800 text-[14px] leading-tight mb-2">{pkg.name}</h3>
                      <div className="flex flex-col gap-1.5 mb-3 h-[50px]">
                        <span className="text-slate-500 text-[10px] font-semibold flex items-center gap-1.5"><Shield className="w-3 h-3 text-[#0f2d5e]" /> {pkg.parameters}</span>
                        <span className="bg-[#dbeafe] text-[#2563eb] text-[9px] font-bold px-2 py-1 rounded-md line-clamp-2">{pkg.includes}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-semibold mb-1">🏠 Free Home Collection Available</p>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-3 mt-2">
                        <span className="text-xl font-black text-slate-900">₹{pkg.price}</span>
                        <span className="text-xs text-slate-400 line-through">₹{pkg.old_price}</span>
                        <span className="text-[11px] text-emerald-600 font-extrabold">{Math.round((1 - Number(pkg.price) / Number(pkg.old_price)) * 100)}% OFF</span>
                      </div>
                      <div className="flex gap-2">
                        <Link href="/packages" className="flex-1 text-center border border-gray-200 text-slate-600 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors">
                          Details
                        </Link>
                        <Link href={`/book?package=${encodeURIComponent(pkg.name)}`}
                          className="flex-1 text-center bg-[#2563eb] py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors"
                          style={{ color: '#ffffff' }}>
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Speciality Tests ── */}
        <section className="py-14 bg-gradient-to-b from-[#eff6ff] to-[#dbeafe] border-t border-blue-100">
          <div className="max-w-[1260px] mx-auto px-4 w-full">
            <div className="mb-10 text-center">
              <span className="inline-block bg-[#2563eb] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-sm">Our Specialities</span>
              <h2 className="text-[#0f2d5e] text-3xl font-extrabold mb-3">Speciality Tests</h2>
              <p className="text-slate-500 text-sm max-w-xl mx-auto font-medium">
                Accurate and reliable diagnostics for all your health needs, with advanced testing across multiple specialties.
              </p>
              <div className="w-16 h-1 bg-[#2563eb] mx-auto rounded-full mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {[
                { title: "NEUROLOGY", href: "/specialities/neurology", icon: "/image/spec_neurology.png" },
                { title: "HEMATOLOGY", href: "/specialities/hematology", icon: "/image/spec_hematology.png" },
                { title: "CARDIOLOGY", href: "/specialities/cardiology", icon: "/image/spec_cardiology.png" },
                { title: "UROLOGY", href: "/specialities/urology", icon: "/image/spec_urology.png" },
                { title: "ENDOCRINOLOGY", href: "/specialities/endocrinology", icon: "/image/spec_endocrinology.png" },
                { title: "ONCOLOGY", href: "/specialities/oncology", icon: "/image/spec_oncology.png" },
                { title: "INFECTIOUS DISEASES", href: "/specialities/infectious-diseases", icon: "/image/spec_infectious.png" },
                { title: "WOMEN'S HEALTH", href: "/specialities/womens-health", icon: "/image/spec_womens.png" },
                { title: "GASTROENTEROLOGY", href: "/specialities/gastroenterology", icon: "/image/spec_gastro.png" },
                { title: "BONE DISORDERS", href: "/specialities/bone-disorders", icon: "/image/spec_bone.png" },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="group flex flex-col items-center bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#2563eb]/20 hover:shadow-xl transition-all">
                  <div className="w-16 h-16 mx-auto mb-3 bg-blue-50/50 rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Image src={s.icon} alt={s.title} width={64} height={64} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-extrabold text-[#0f2d5e] group-hover:text-white text-[11px] tracking-wider leading-tight transition-colors">{s.title}</h3>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/speciality-tests" className="inline-block bg-[#2563eb] text-white font-extrabold px-10 py-3 rounded-full hover:bg-[#1d4ed8] transition-colors shadow-md text-sm">
                View All Speciality Tests
              </Link>
            </div>
          </div>
        </section>

        {/* ── Meet Our Team ── */}
        <section className="py-14 bg-[#f0f9ff] border-t border-blue-100">
          <div className="max-w-[1260px] mx-auto px-4 w-full">
            <div className="mb-10 text-center">
              <span className="inline-block bg-blue-50 text-[#2563eb] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest mb-2">Our Experts</span>
              <h2 className="text-[#0f2d5e] text-3xl font-extrabold mb-3">Meet Our Team</h2>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto font-medium">
                Combining over four decades of medical expertise, our team delivers exceptional diagnostic services with a commitment to precision and care.
              </p>
              <div className="w-16 h-1 bg-[#2563eb] mx-auto rounded-full mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Dr. Shantakumar Muruda", qual: "MD, BIOCHEMISTRY", image: "/image/dr_shantakumar_home.png" },
                { name: "Dr. Pritilata Rout", qual: "MD, PATHOLOGY", image: "/image/dr_pritilata.png" },
                { name: "Dr. Ajitha Pillai", qual: "MD, MICROBIOLOGY", image: "/image/dr_ajitha.png" },
                { name: "Dr. Naveen Kumar N", qual: "DCP, DNB PATHOLOGY", image: "/image/dr_naveen.png" },
              ].map((doc) => (
                <div key={doc.name} className="bg-white rounded-2xl overflow-hidden flex flex-col items-center p-4 text-center group border border-gray-100 hover:shadow-lg transition-all hover:border-[#2563eb]/20">
                  <div className="w-56 h-56 rounded-2xl overflow-hidden mb-4 bg-[#dbeafe] flex items-center justify-center">
                    <Image src={doc.image} alt={doc.name} width={224} height={224}
                      className="w-full h-full object-contain object-bottom transition-transform group-hover:scale-105"
                      onError={(e) => { e.currentTarget.srcset = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop"; }} />
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-[15px] mb-1">{doc.name}</h3>
                  <p className="text-[11px] font-bold text-[#2563eb] uppercase tracking-wider">({doc.qual})</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form and Maps ── */}
        <section className="py-16 bg-white border-t border-gray-150">
          <div className="max-w-[1260px] mx-auto px-4 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-[#f0f9ff] p-8 rounded-3xl border border-[#2563eb]/10 shadow-sm">
                <span className="inline-block bg-white text-[#2563eb] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest mb-3 shadow-sm">Get in Touch</span>
                <h2 className="text-[#0f2d5e] text-3xl font-extrabold mb-2">Book a Test / Inquiry</h2>
                <p className="text-slate-500 text-sm font-medium mb-6">Fill out the form below and our team will contact you shortly.</p>
                
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input type="tel" placeholder="+91 9964 639639" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Select Service</label>
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all text-slate-600">
                      <option>Home Collection</option>
                      <option>Lab Visit</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                    <textarea rows={3} placeholder="How can we help you?" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all resize-none"></textarea>
                  </div>
                  <button type="button" className="w-full bg-[#2563eb] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md hover:bg-[#1d4ed8] transition-all mt-2 text-sm uppercase tracking-wider">
                    Submit Inquiry
                  </button>
                </form>
              </div>

              {/* Google Map */}
              <div className="flex flex-col">
                <span className="inline-block bg-[#dbeafe] text-[#2563eb] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest mb-3 w-fit">Our Location</span>

                <p className="text-slate-500 text-sm font-medium mb-6">Conveniently located in Bengaluru, providing state-of-the-art diagnostic facilities.</p>
                
                <div className="w-full flex-1 min-h-[350px] rounded-3xl overflow-hidden shadow-md border border-gray-200">
                  <iframe 
                    src={
                      location === "Gurgaon" ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192864!2d76.849658!3d28.4229575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" :
                      location === "Delhi" ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.61368636906!2d77.0688975!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" :
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3444498305096!2d77.4824552!3d12.9113827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa0365530ab%3A0x2ea1617d2b28d62f!2sQXL+DIAGNOSTICS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    } 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location} Diagnostics Lab Location`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── MOBILE VIEW (lg:hidden) ── */}
      <div className="lg:hidden flex flex-col w-full overflow-x-hidden">


        {/* Mobile Hero Slider */}
        <section className="w-full bg-white pb-2">
          <div className="relative w-full overflow-hidden">
            {mobileSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`transition-opacity duration-500 ${idx === currentMobileSlide ? 'block' : 'hidden'}`}
              >
                {/* Content slides — text left, image right */}
                <div
                  className="mx-3 mt-2 rounded-2xl overflow-hidden flex flex-row items-stretch"
                  style={{
                    minHeight: '160px',
                    background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgTo} 100%)`
                  }}
                >
                  {/* Left: Text Content */}
                  <div className="flex-1 flex flex-col justify-center px-4 py-4 z-10 text-left">
                    {slide.badge && (
                      <span className="inline-block bg-[#2563eb] text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full tracking-widest uppercase mb-1.5 w-fit">
                        {slide.badge}
                      </span>
                    )}
                    <h2 className="text-[13px] font-extrabold text-[#0d2e42] leading-tight mb-0.5">
                      {slide.title}
                    </h2>
                    {slide.titleAccent && (
                      <h2 className="text-[13px] font-extrabold text-[#2563eb] leading-tight mb-1">
                        {slide.titleAccent}
                      </h2>
                    )}
                    {slide.subtitle && (
                      <p className="text-[10px] font-bold text-slate-600 mb-0.5">{slide.subtitle}</p>
                    )}
                    {slide.subtitleAccent && (
                      <p className="text-[10px] font-extrabold text-[#2563eb] mb-2">{slide.subtitleAccent}</p>
                    )}
                    {slide.cta && (
                      <Link
                        href={slide.ctaLink}
                        className="inline-block bg-[#2563eb] text-white font-bold px-4 py-1.5 rounded-full text-[10px] w-fit mt-1 shadow-sm active:scale-95 transition-transform"
                      >
                        {slide.cta}
                      </Link>
                    )}
                  </div>
                  {/* Right: Image */}
                  <div className="w-[130px] flex-shrink-0 relative overflow-hidden rounded-r-2xl bg-white/20">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover object-center"
                      style={{ imageRendering: 'auto' }}
                      priority
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots + prev/next */}
          <div className="flex justify-center items-center gap-1.5 pt-2 pb-1">
            {mobileSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentMobileSlide(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === currentMobileSlide ? 'w-5 bg-[#2563eb]' : 'w-1.5 bg-gray-300'}`}
              />
            ))}
          </div>
        </section>

        {/* Action Cards */}
        <section className="px-4 py-3 flex flex-col gap-2.5 bg-white border-t border-gray-100">
          <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Need help?</p>

          {/* Prescription Card */}
          <div
            onClick={() => setIsPrescriptionModalOpen(true)}
            className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-3.5 shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-extrabold text-[#0d2e42] text-sm leading-tight">Have a Prescription?</p>
              <p className="text-[11px] text-gray-400 mt-0.5">Upload and book your tests</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
          </div>

          {/* WhatsApp Booking */}
          <a
            href="https://wa.me/918105085888"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-3.5 shadow-sm active:scale-[0.98] transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-extrabold text-[#0d2e42] text-sm leading-tight">WhatsApp Booking</p>
              <p className="text-[11px] text-gray-400 mt-0.5">Text us on WhatsApp to book a test</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
          </a>

          {/* Franchise */}
          <Link
            href="/franchise"
            className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-3.5 shadow-sm active:scale-[0.98] transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-extrabold text-[#0d2e42] text-sm leading-tight">Franchise</p>
              <p className="text-[11px] text-gray-400 mt-0.5">You too can Grow with us</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
          </Link>
        </section>

        {/* Recommended Packages — one per screen, full-width snap scroll */}
        <section className="py-4 bg-[#f8faff] border-t border-gray-100">
          <div className="flex items-center justify-between px-4 mb-3">
            <div>
              <p className="text-[10px] font-extrabold text-[#2563eb] uppercase tracking-widest">Health Packages</p>
              <h2 className="text-[#0d2e42] font-extrabold text-base leading-tight">Recommended Packages</h2>
            </div>
            <Link href="/packages" className="text-[#2563eb] text-xs font-bold flex items-center gap-0.5">
              View All <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Full-width snap scroll — one card per viewport */}
          <div className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-0">
            {recommendedPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="w-[calc(100vw-32px)] mx-4 flex-shrink-0 snap-center bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
              >
                {/* Top colour strip */}
                <div className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-4 py-3 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-white/90 uppercase tracking-widest">
                    {pkg.tag || 'PACKAGE'}
                  </span>
                  {pkg.old_price && (
                    <span className="text-[10px] font-extrabold text-[#2563eb] bg-white px-2.5 py-1 rounded-full shadow-sm">
                      {Math.round((1 - Number(pkg.price) / Number(pkg.old_price)) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col gap-3">
                  <h3 className="font-extrabold text-[#0d2e42] text-[15px] leading-snug">{pkg.name}</h3>

                  {pkg.parameters && (
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-3.5 h-3.5 text-[#2563eb]" />
                      </div>
                      <p className="text-[12px] text-slate-600 font-bold">{pkg.parameters} Parameters Covered</p>
                    </div>
                  )}

                  {pkg.includes && (
                    <p className="text-[11px] text-slate-500 bg-blue-50 px-3 py-2 rounded-xl font-medium leading-relaxed">
                      {pkg.includes}
                    </p>
                  )}

                  <p className="text-[11px] text-slate-400 font-semibold">🏠 Free Home Collection Available</p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-1">
                    <div>
                      {pkg.old_price && (
                        <p className="text-[11px] text-gray-400 line-through font-medium">₹{pkg.old_price}</p>
                      )}
                      <p className="font-black text-[#0d2e42] text-[22px] leading-tight">₹{pkg.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="/packages"
                        className="border border-gray-200 text-slate-600 text-[11px] font-bold px-3 py-2.5 rounded-xl active:scale-95 transition-transform"
                      >
                        Details
                      </Link>
                      <Link
                        href={`/book?package=${encodeURIComponent(pkg.name)}`}
                        className="bg-[#2563eb] text-white text-[12px] font-extrabold px-5 py-2.5 rounded-xl active:scale-95 transition-transform shadow-md"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-1.5 mt-3">
            {recommendedPackages.map((_, idx) => (
              <div
                key={idx}
                className="h-1.5 w-1.5 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </section>

        {/* Speciality Tests — full vertical list */}
        <section className="bg-white border-t border-gray-100">
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <div>
              <p className="text-[10px] font-extrabold text-[#2563eb] uppercase tracking-widest">Our Specialities</p>
              <h2 className="text-[#0d2e42] font-extrabold text-base leading-tight">Speciality Tests</h2>
            </div>
            <Link href="/speciality-tests" className="text-[#2563eb] text-xs font-bold flex items-center gap-0.5">
              View All <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="flex flex-col divide-y divide-gray-100 px-4 pb-4">
            {[
              { title: "Neurology", desc: "Brain & Nervous System", icon: "/image/spec_neurology.png", href: "/specialities/neurology" },
              { title: "Hematology", desc: "Blood Disorders & CBC", icon: "/image/spec_hematology.png", href: "/specialities/hematology" },
              { title: "Cardiology", desc: "Heart & Cardiovascular", icon: "/image/spec_cardiology.png", href: "/specialities/cardiology" },
              { title: "Urology", desc: "Kidney & Urinary Health", icon: "/image/spec_urology.png", href: "/specialities/urology" },
              { title: "Endocrinology", desc: "Thyroid, Diabetes & Hormones", icon: "/image/spec_endocrinology.png", href: "/specialities/endocrinology" },
              { title: "Oncology", desc: "Cancer Markers & Screening", icon: "/image/spec_oncology.png", href: "/specialities/oncology" },
              { title: "Infectious Diseases", desc: "Viral, Bacterial & Fungal", icon: "/image/spec_infectious.png", href: "/specialities/infectious-diseases" },
              { title: "Women's Health", desc: "Gynaecology & Fertility", icon: "/image/spec_womens.png", href: "/specialities/womens-health" },
              { title: "Gastroenterology", desc: "Liver, Gut & Digestive", icon: "/image/spec_gastro.png", href: "/specialities/gastroenterology" },
              { title: "Bone Disorders", desc: "Calcium, Vitamin D & Joints", icon: "/image/spec_bone.png", href: "/specialities/bone-disorders" },
            ].map((spec, i) => (
              <Link
                key={i}
                href={spec.href}
                className="flex items-center gap-3 py-3 active:bg-blue-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#eff6ff] border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={spec.icon}
                    alt={spec.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-extrabold text-[#0d2e42] text-[13px] leading-tight">{spec.title}</p>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5">{spec.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0 group-active:text-[#2563eb] transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-8 bg-[#f0f9ff] border-t border-blue-100">
          <div className="px-4">
            <div className="mb-6 text-center">
              <span className="inline-block bg-blue-50 text-[#2563eb] text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest mb-1.5">Our Experts</span>
              <h2 className="text-[#0f2d5e] text-xl font-extrabold">Meet Our Team</h2>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Combining over four decades of medical expertise, our team delivers exceptional diagnostic services with a commitment to precision and care.
              </p>
              <div className="w-10 h-0.5 bg-[#2563eb] mx-auto rounded-full mt-3" />
            </div>
            <div className="flex overflow-x-auto gap-4 scrollbar-none pb-4 snap-x snap-mandatory">
              {[
                { name: "Dr. Shantakumar Muruda", qual: "MD, BIOCHEMISTRY", image: "/image/dr_shantakumar_home.png" },
                { name: "Dr. Pritilata Rout", qual: "MD, PATHOLOGY", image: "/image/dr_pritilata.png" },
                { name: "Dr. Ajitha Pillai", qual: "MD, MICROBIOLOGY", image: "/image/dr_ajitha.png" },
                { name: "Dr. Naveen Kumar N", qual: "DCP, DNB PATHOLOGY", image: "/image/dr_naveen.png" },
              ].map((doc) => (
                <div key={doc.name} className="w-[180px] bg-white rounded-2xl overflow-hidden flex flex-col items-center p-3 text-center border border-gray-100 shadow-sm flex-shrink-0 snap-start">
                  <div className="w-36 h-36 rounded-xl overflow-hidden mb-3 bg-[#dbeafe] flex items-center justify-center">
                    <Image src={doc.image} alt={doc.name} width={144} height={144}
                      className="w-full h-full object-contain object-bottom"
                      onError={(e) => { e.currentTarget.srcset = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop"; }} />
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-[12px] mb-0.5">{doc.name}</h3>
                  <p className="text-[9px] font-bold text-[#2563eb] uppercase tracking-wider">({doc.qual})</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Location Map */}
        <section className="py-8 bg-white border-t border-gray-150">
          <div className="px-4 flex flex-col gap-8">
            {/* Form */}
            <div className="bg-[#f0f9ff] p-5 rounded-2xl border border-[#2563eb]/10 shadow-sm">
              <span className="inline-block bg-white text-[#2563eb] text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest mb-2 shadow-xs">Get in Touch</span>
              <h2 className="text-[#0f2d5e] text-lg font-extrabold mb-1">Book a Test / Inquiry</h2>
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">Fill out the form below and our team will contact you shortly.</p>
              
              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Full Name" className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all" />
                <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all text-slate-600">
                  <option>Home Collection</option>
                  <option>Lab Visit</option>
                  <option>General Inquiry</option>
                </select>
                <textarea rows={3} placeholder="Message" className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all resize-none"></textarea>
                <button type="button" className="w-full bg-[#2563eb] text-white font-extrabold py-3 rounded-xl shadow-sm hover:bg-[#1d4ed8] transition-all text-xs uppercase tracking-wider mt-1">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="flex flex-col">
              <span className="inline-block bg-[#dbeafe] text-[#2563eb] text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest mb-2 w-fit">Our Location</span>
              <p className="text-slate-500 text-xs mb-3 leading-relaxed">Conveniently located in Bengaluru, providing state-of-the-art diagnostic facilities.</p>
              <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-xs border border-gray-200 mt-1">
                <iframe 
                  src={
                    location === "Gurgaon" ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192864!2d76.849658!3d28.4229575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" :
                    location === "Delhi" ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.61368636906!2d77.0688975!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" :
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3444498305096!2d77.4824552!3d12.9113827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa0365530ab%3A0x2ea1617d2b28d62f!2sQXL+DIAGNOSTICS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  } 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location} Diagnostics Lab Location`}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

      </div>

      <PrescriptionModal isOpen={isPrescriptionModalOpen} onClose={() => setIsPrescriptionModalOpen(false)} />

      <style>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
