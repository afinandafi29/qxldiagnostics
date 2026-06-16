"use client";
import React from 'react';
import { Shield, Clock, PhoneCall } from 'lucide-react';

export default function PackagesPage() {
  const packages = [
    { name: "Health Basic Checkup", price: "1899", old_price: "2532", parameters: "42 Parameters" },
    { name: "Full Body Comprehensive Checkup", price: "4499", old_price: "5999", parameters: "86 Parameters" },
    { name: "Health Master Checkup", price: "3299", old_price: "4399", parameters: "68 Parameters" },
    { name: "Senior Citizen Female Checkup", price: "4799", old_price: "6399", parameters: "74 Parameters" },
    { name: "Senior Citizen Male Checkup", price: "4799", old_price: "6399", parameters: "72 Parameters" },
    { name: "Women's Health Checkup", price: "3499", old_price: "4665", parameters: "60 Parameters" },
    { name: "Vitamin & Mineral Panel", price: "1999", old_price: "2665", parameters: "12 Parameters" },
  ];

  const tests = [
    { name: "BILE ACIDS - SERUM", price: "2500", old_price: "3333", parameters: "Single Parameter" },
    { name: "COMPLETE BLOOD COUNT (CBC)", price: "395", old_price: "527", parameters: "24 Parameters" },
    { name: "HBA1C, GLYCATED HEMOGLOBIN", price: "610", old_price: "813", parameters: "Single Parameter" },
    { name: "LIPID PROFILE", price: "800", old_price: "1067", parameters: "9 Parameters" },
    { name: "LIVER FUNCTION TEST (LFT)", price: "800", old_price: "1067", parameters: "11 Parameters" },
    { name: "SEX HORMONE BINDING GLOBULIN (SHBG)", price: "2900", old_price: "3867", parameters: "Single Parameter" },
    { name: "THYROID STIMULATING HORMONE (TSH), SERUM", price: "340", old_price: "453", parameters: "Single Parameter" },
    { name: "VITAMIN B12", price: "1350", old_price: "1800", parameters: "Single Parameter" },
    { name: "VITAMIN D - 25 HYDROXY (D2+D3)", price: "1900", old_price: "2533", parameters: "Single Parameter" },
  ];

  const Card = ({ name, price, old_price, parameters }: { name: string, price: string, old_price: string, parameters: string }) => (
    <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-slate-800 text-[16px] leading-snug">{name}</h3>
          <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider flex-shrink-0">SAFE</span>
        </div>
        <p className="text-[12px] text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#0f2d5e]" /> {parameters}
        </p>
        <p className="text-[12px] text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
          🏠 Free Home Sample Collection
        </p>
        <p className="text-[12px] text-slate-500 font-semibold mb-4 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#0f2d5e]" /> Same Day Reports Available
        </p>
      </div>

      <div className="border-t border-gray-100 pt-4 mt-2">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-black text-slate-900">₹{price}</span>
          <span className="text-sm text-slate-400 line-through">₹{old_price}</span>
          <span className="text-xs text-[#2563eb] font-extrabold">25% OFF</span>
        </div>
        <a 
          href={`https://api.whatsapp.com/send?phone=919964639639&text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(name)}`} 
          target="_blank" 
          rel="noreferrer" 
          className="block w-full text-center bg-[#2563eb] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors"
        >
          Book Now via WhatsApp
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#e0f2fe] to-[#fbf8f5] py-12 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f2d5e] mb-3">Health Check Packages & Tests</h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl font-medium">
            Browse our clinical packages and blood tests, certified with NABL-level quality and same-day electronic reports.
          </p>
          <div className="w-16 h-1 bg-[#2563eb] rounded-full mt-4"></div>
        </div>
      </section>

      {/* Recommended Packages Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <div className="mb-8">
            <h2 className="text-[#0f2d5e] text-2xl font-bold mb-1">Recommended Health Packages</h2>
            <p className="text-slate-500 text-xs font-semibold">Popular choices for complete system-wide wellness</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map(p => <Card key={p.name} {...p} />)}
          </div>
        </div>
      </section>

      {/* Booked Tests Section */}
      <section className="py-12 bg-[#f8faff] border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <div className="mb-8">
            <h2 className="text-[#0f2d5e] text-2xl font-bold mb-1">Individual Diagnostic Tests</h2>
            <p className="text-slate-500 text-xs font-semibold">Direct path lab panels with specific biochemical parameters</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map(t => <Card key={t.name} {...t} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
