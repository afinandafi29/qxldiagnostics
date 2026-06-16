"use client";
import React, { useState } from 'react';
import { Award, Briefcase, DollarSign, ShieldCheck } from 'lucide-react';

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    investment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  const benefits = [
    {
      title: "Trusted Clinical Brand",
      description: "Operate under QXL Diagnostics, a leading clinical lab with high-tech equipment.",
      icon: <Award className="w-6 h-6 text-[#2563eb]" />
    },
    {
      title: "High Returns & Low Risks",
      description: "B2B and B2C collection models ensure steady volume and attractive profit margins.",
      icon: <DollarSign className="w-6 h-6 text-[#2563eb]" />
    },
    {
      title: "Operational Assistance",
      description: "Complete training, marketing material, and cold-chain sample transport logistics provided.",
      icon: <Briefcase className="w-6 h-6 text-[#2563eb]" />
    },
    {
      title: "NABL Quality Backing",
      description: "All samples are processed in our certified central laboratory by MD consultants.",
      icon: <ShieldCheck className="w-6 h-6 text-[#2563eb]" />
    }
  ];

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#e0f2fe] to-[#fbf8f5] py-12 border-b border-gray-150">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f2d5e] mb-3">Franchise Opportunities</h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl font-medium">
            Partner with QXL Diagnostics and establish a clinical collection center in your city.
          </p>
          <div className="w-16 h-1 bg-[#2563eb] rounded-full mt-4"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 w-full flex flex-col lg:flex-row gap-12">
          
          {/* Left info */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div>
              <h2 className="text-[#0f2d5e] text-2xl font-bold mb-3">Establish a QXL Collection Unit</h2>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                The diagnostic industry is one of the fastest-growing medical sectors in India. Partnering with QXL Diagnostics grants access to state-of-the-art laboratory infrastructure, specialized panels, and an advanced LIMS system to run a highly profitable collection franchise.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b, idx) => (
                <div key={idx} className="bg-white border border-gray-150 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                  <div className="w-11 h-11 rounded-full bg-[#dbeafe] flex items-center justify-center mb-3">
                    {b.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{b.title}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>

            {/* Models */}
            <div className="border-t border-gray-150 pt-8">
              <h3 className="text-[#0f2d5e] text-lg font-bold mb-4">Franchise Models Available</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl">
                  <span className="text-xs font-bold text-[#2563eb] block mb-1">FOFO Model</span>
                  <p className="text-[11px] text-slate-500 font-semibold">Franchise Owned Franchise Operated. Total control over local collections with QXL processing and logistics backup.</p>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl">
                  <span className="text-xs font-bold text-[#2563eb] block mb-1">FOCO Model</span>
                  <p className="text-[11px] text-slate-500 font-semibold">Franchise Owned Company Operated. Shared investment with laboratory management directly handled by QXL specialists.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead Form */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white border border-gray-150 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sticky top-24">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-[#dbeafe] text-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">✓</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Franchise Request Received</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-6">
                    Our partnership manager will contact you at <strong className="text-slate-700">{formData.phone}</strong> or email you detailed investment proposals within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', location: '', investment: '' }); }}
                    className="bg-[#2563eb] text-white font-bold px-6 py-2 rounded-full hover:bg-[#1d4ed8] transition-colors text-xs uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-slate-800 text-lg font-bold mb-3 border-b border-gray-100 pb-2">Franchise Inquiry</h3>
                  
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#2563eb] transition-colors bg-gray-50/50"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Contact Phone</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#2563eb] transition-colors bg-gray-50/50"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#2563eb] transition-colors bg-gray-50/50"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Proposed Location/City</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Whitefield, Bengaluru"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#2563eb] transition-colors bg-gray-50/50"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">Budget Capacity</label>
                    <select 
                      value={formData.investment}
                      onChange={(e) => setFormData({...formData, investment: e.target.value})}
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#2563eb] transition-colors bg-gray-50/50 text-slate-500"
                    >
                      <option value="">Select range</option>
                      <option value="5-10L">₹5 Lakhs - ₹10 Lakhs</option>
                      <option value="10-15L">₹10 Lakhs - ₹15 Lakhs</option>
                      <option value="15L+">₹15 Lakhs +</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#2563eb] text-white font-bold py-3 rounded-xl hover:bg-[#1d4ed8] transition-colors uppercase tracking-wider text-xs shadow-md mt-4"
                  >
                    Submit Franchise Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
