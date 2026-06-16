"use client";
import React from 'react';
import Link from 'next/link';
import { Award, Users, Star } from 'lucide-react';

export default function FounderPage() {
  const founder = {
    name: "Dr. Shantakumar Muruda",
    role: "Founder & CEO",
    qualification: "MD (BIOCHEMISTRY)",
    image: "/image/Dr. Shantakumar Muruda  (MD, BIOCHEMISTRY)].png",
    bio: "Dr. Shantakumar Muruda, MD, brings over two decades of distinguished medical experience, having been trained at the prestigious Rajiv Gandhi University of Health Sciences, Bangalore. He has held various key positions, including Clinical Biochemist, Laboratory Director, and NABL Lead Assessor. Dr. Muruda's expertise as a PHFI-certified Diabetologist extends to consulting and managing diagnostic operations for leading laboratories nationwide and the successful completion of over 150 NABL assessments. His proficient use of technology and active participation in ethical committees have further solidified his esteemed position in the medical field.",
    highlights: ["Clinical Biochemist", "NABL Lead Assessor", "PHFI-Certified Diabetologist", "150+ NABL Assessments"],
  };

  const consultants = [
    {
      name: "Dr. Ajitha Pillai",
      role: "Senior Consultant",
      qualification: "MD (MICROBIOLOGY)",
      image: "/image/Dr. Ajitha Pillai (MD, MICROBIOLOGY).png",
      bio: "Dr. Ajitha Pillai is an experienced Clinical Microbiologist with an MD in Microbiology from Medical College Trivandrum, University of Kerala. She possesses extensive expertise in Microbiology, Molecular Biology, Infection Serology, Autoimmune Serology, Laboratory Management, and Infection Control. Dr. Ajitha has served as the Head of the Microbiology Division at United Hospital and Sagar Hospitals in Bangalore.",
      highlights: ["Clinical Microbiologist", "Molecular Biology Expert", "Head — Microbiology Division", "NABL Certified Lab Lead"],
    },
    {
      name: "Dr. Pritilata Rout",
      role: "Senior Consultant Histopathologist",
      qualification: "MD (PATHOLOGY), PDF (NEUROPATH)",
      image: "/image/Dr. Pritilata Rout (MD, PATHOLOGY).png",
      bio: "Dr. Pritilata Rout brings advanced expertise in Neuropathology with specialized training in epilepsy pathology and stereotactic biopsy interpretation. Since beginning her career in 1996, she has pursued a post-doctoral fellowship in Neuropathology from NIMHANS in 2001. Her proficiency extends across Cytopathology, Endocrine Pathology, and Onco-Pathology with focus on lymphoid malignancies.",
      highlights: ["Neuropathologist", "PDF — NIMHANS", "Cytopathology Expert", "PhD Guide & Mentor"],
    },
    {
      name: "Dr. Naveen Kumar N",
      role: "Consultant Pathologist",
      qualification: "DCP, DNB (PATHOLOGY)",
      image: "/image/Dr. Naveen Kumar N (DCP, DNB PATHOLOGY).png",
      bio: "Dr. Naveen Kumar N is a Consultant Pathologist with 8 years of experience across esteemed healthcare institutions. A graduate of M.S. Ramaiah Medical College, Bangalore, he holds a DCP (Pathology) from Kasturba Medical College, Mangalore, and a DNB (Pathology) from the National Institute of Medical Sciences, Jaipur. He has played a pivotal role in NABL certification maintenance.",
      highlights: ["8+ Years Experience", "MS Ramaiah Medical College", "NABL Accreditation Expert", "Hematology Specialist"],
    },
  ];

  const advisors = [
    {
      name: "Dr. Ashis Kumar Chand",
      role: "Medical Advisor",
      qualification: "MCH (NEUROSURGERY)",
      image: "/images/banners/indian_doctor_1_1781508338693.png",
      bio: "Dr. Ashis Kumar Chand is a highly esteemed Indian neurosurgeon with a distinguished career marked by significant achievements in neurosurgery. His expertise spans cranial and spinal surgeries, development of cost-effective medical devices, and medical skill development, having undergone specialized training in the USA, Germany, and Japan. He led the Department of Neurosurgery at St. John's Medical College, Bangalore.",
      highlights: ["MCH Neurosurgery", "St. John's Medical College Head", "International Training — USA, Germany, Japan", "Medical Device Innovator"],
    },
    {
      name: "Dr. (Col) P. S. Reddy",
      role: "Senior Medical Advisor",
      qualification: "MD (PATHOLOGY), DCP",
      image: "/images/banners/indian_doctor_2_1781508362920.png",
      bio: "Dr. (Col) P. S. Reddy is a highly esteemed figure in the field of pathology with 45 years of distinguished experience. He served as Consultant Pathologist at the Bangalore Institute of Pathology, Professor of Pathology at Vydehi Institute, and Director of Diagnostics at Sagar Hospitals. His career includes Armed Forces Medical Research Projects under DRDO.",
      highlights: ["45+ Years Experience", "Colonel (Armed Forces Medical)", "DRDO Research Projects", "Director — Diagnostics, Sagar Hospitals"],
    },
    {
      name: "Dr. Jagadeesha Chandra",
      role: "Clinical Advisor",
      qualification: "MD (INTERNAL MEDICINE)",
      image: "/images/banners/indian_doctor_3_1781508376626.png",
      bio: "Dr. Jagadeesha Chandra began his medical journey with an MBBS in 1988, followed by an MD in Internal Medicine in 1991 from JJM Medical College, Davangere. With over 28 years of experience, he has served as Vice President – Medical Services at Sagar Hospitals, Jayanagar, and founded the JC Medical Centre & Emergency Medical Services.",
      highlights: ["28+ Years Experience", "MD Internal Medicine — JJM", "VP Medical Services — Sagar Hospitals", "JC Medical Centre Founder"],
    },
  ];

  return (
    <div className="bg-[#f8faff] min-h-screen">

      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#e0f2fe] to-[#eff6ff] py-14 border-b border-gray-100">
        <div className="max-w-[1260px] mx-auto px-4 w-full">
          <span className="inline-block bg-[#2563eb] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Leadership
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f2d5e] mb-3 leading-tight">
            Founder &amp; Advisors
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl font-medium">
            Meet the visionaries, expert pathologists, and distinguished medical advisors guiding QXL Diagnostics to excellence.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-14 bg-white">
        <div className="max-w-[1260px] mx-auto px-4 w-full">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-5 h-5 text-[#2563eb]" />
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2d5e] uppercase tracking-wider">Founder &amp; CEO</h2>
          </div>
          <div className="bg-gradient-to-br from-[#e0f2fe] to-white border border-[#dbeafe] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-md transition-all">
            <div className="flex-shrink-0 w-full md:w-52">
              <div className="w-full md:w-52 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-md bg-[#dbeafe]">
                <img src={founder.image} alt={founder.name}
                  className="w-full h-full object-contain object-bottom"
                  onError={(e) => { e.currentTarget.src = "/images/banners/indian_doctor_4_1781508388275.png"; }} />
              </div>
              <div className="mt-4 space-y-2">
                {founder.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[8px] font-extrabold">✓</span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600">{h}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mb-1">{founder.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#2563eb] text-white text-[11px] font-extrabold px-3 py-1 rounded-full">{founder.role}</span>
                <span className="bg-[#dbeafe] text-[#2563eb] text-[11px] font-extrabold px-3 py-1 rounded-full">({founder.qualification})</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{founder.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Consultants */}
      <section className="py-14 bg-[#f8faff] border-t border-gray-100">
        <div className="max-w-[1260px] mx-auto px-4 w-full">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-5 h-5 text-[#2563eb]" />
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2d5e] uppercase tracking-wider">Senior Consultants</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consultants.map((doc, idx) => (
              <div key={idx} className="bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="h-64 bg-[#dbeafe] overflow-hidden">
                  <img src={doc.image} alt={doc.name}
                    className="w-full h-full object-contain object-bottom"
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop"; }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-extrabold text-slate-800 text-base mb-1">{doc.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-[#dbeafe] text-[#2563eb] text-[10px] font-extrabold px-2.5 py-1 rounded-full">{doc.role}</span>
                    <span className="bg-gray-100 text-slate-600 text-[10px] font-extrabold px-2.5 py-1 rounded-full">{doc.qualification}</span>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-medium mb-4 flex-1">{doc.bio}</p>
                  <div className="space-y-1.5 border-t border-gray-100 pt-4">
                    {doc.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                          <span className="text-[#2563eb] text-[7px] font-extrabold">✓</span>
                        </span>
                        <span className="text-[11px] font-semibold text-slate-600">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Advisory Board */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-[1260px] mx-auto px-4 w-full">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-[#2563eb]" />
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0f2d5e] uppercase tracking-wider">Medical Advisory Board</h2>
          </div>
          <p className="text-slate-500 text-sm font-medium mb-8 max-w-2xl">
            Our distinguished advisory board brings together over a century of combined medical expertise, guiding QXL Diagnostics on clinical excellence and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((adv, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#e0f2fe] to-white border border-[#dbeafe] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-extrabold text-slate-800 text-base mb-1">{adv.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-[#2563eb] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">{adv.role}</span>
                    <span className="bg-gray-100 text-slate-600 text-[10px] font-extrabold px-2.5 py-1 rounded-full">{adv.qualification}</span>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-medium mb-4 flex-1">{adv.bio}</p>
                  <div className="space-y-1.5 border-t border-gray-100 pt-4">
                    {adv.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-[7px] font-extrabold">✓</span>
                        </span>
                        <span className="text-[11px] font-semibold text-slate-600">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#2563eb] border-t border-blue-600">
        <div className="max-w-[1260px] mx-auto px-4 w-full text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Want to consult our experts?</h2>
          <p className="text-blue-100 text-sm font-medium mb-6 max-w-lg mx-auto">
            Book your diagnostic test today and get reports reviewed by our experienced team of pathologists and specialists.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919964639639"
              className="inline-block bg-white text-[#2563eb] font-extrabold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-md text-sm">
              📞 Call to Book
            </a>
            <a href="https://api.whatsapp.com/send?phone=919964639639" target="_blank" rel="noreferrer"
              className="inline-block bg-[#25d366] text-white font-extrabold px-8 py-3 rounded-full hover:bg-green-500 transition-colors shadow-md text-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
