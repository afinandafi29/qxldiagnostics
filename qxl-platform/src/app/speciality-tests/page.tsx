"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle, Phone, MessageCircle } from "lucide-react";

const specialities = [
  {
    id: "neurology",
    title: "NEUROLOGY",
    icon: "/image/spec_neurology.png",
    color: "#2563eb",
    description:
      "Our neurology diagnostic panel covers a comprehensive range of tests to evaluate brain, spinal cord, and peripheral nerve function. Early detection of neurological disorders enables timely intervention and better patient outcomes.",
    tests: [
      "CSF Analysis (Routine & Special)",
      "EEG Interpretation Support",
      "Nerve Conduction Studies",
      "Neurobiomarkers Panel",
      "Anti-NMDA Antibodies",
      "Myelin Basic Protein",
      "Anti-Ganglioside Panel",
      "ANA / ANA Profile",
      "Oligoclonal Bands",
      "Ceruloplasmin",
    ],
    benefits: [
      "Early detection of dementia and neurodegenerative diseases",
      "Autoimmune encephalitis screening",
      "Epilepsy and seizure workup",
      "Multiple sclerosis marker testing",
    ],
    packages: ["Neurology Basic Panel ₹2,500", "Autoimmune Neuro Panel ₹6,800"],
  },
  {
    id: "hematology",
    title: "HEMATOLOGY",
    icon: "/image/spec_hematology.png",
    color: "#c0392b",
    description:
      "Complete blood disorder diagnostics including advanced coagulation studies, bone marrow assessments, and specialized hematological panels for accurate diagnosis and monitoring of blood diseases.",
    tests: [
      "Complete Blood Count (CBC) — 24 Parameters",
      "Peripheral Blood Smear",
      "Reticulocyte Count",
      "Coagulation Profile (PT, APTT, INR)",
      "Factor Assays (Factor VIII, IX, etc.)",
      "Fibrinogen",
      "D-Dimer",
      "Hemoglobin Electrophoresis",
      "G6PD Deficiency Screen",
      "Flow Cytometry",
    ],
    benefits: [
      "Anemia diagnosis and classification",
      "Bleeding disorder evaluation",
      "Leukemia and lymphoma screening",
      "Thrombosis risk assessment",
    ],
    packages: ["Anemia Profile ₹1,200", "Complete Coagulation Panel ₹3,500"],
  },
  {
    id: "cardiology",
    title: "CARDIOLOGY",
    icon: "/image/spec_cardiology.png",
    color: "#e74c3c",
    description:
      "Comprehensive cardiac risk profiling and biomarker testing to detect and monitor heart diseases. Our advanced cardiology panel helps identify risk factors early, enabling preventive care.",
    tests: [
      "Cardiac Troponin I & T (High Sensitivity)",
      "BNP / NT-proBNP",
      "CK-MB",
      "Lipid Profile (9 Parameters)",
      "Lipoprotein (a)",
      "ApoA1 & ApoB",
      "hs-CRP (High Sensitivity)",
      "Homocysteine",
      "Myoglobin",
      "D-Dimer",
    ],
    benefits: [
      "Acute myocardial infarction detection",
      "Heart failure risk stratification",
      "Atherosclerosis risk profiling",
      "Cardiac inflammation markers",
    ],
    packages: ["Basic Cardiac Panel ₹1,800", "Advanced Cardiac Risk Panel ₹4,200"],
  },
  {
    id: "urology",
    title: "UROLOGY",
    icon: "/image/spec_urology.png",
    color: "#2980b9",
    description:
      "Comprehensive urological diagnostics including kidney function tests, prostate health markers, and urinary tract infection panels to support urological health assessment and disease monitoring.",
    tests: [
      "Kidney Function Test (KFT) — 11 Parameters",
      "Urine Routine & Microscopy",
      "24-Hour Urine Protein",
      "Urine Culture & Sensitivity",
      "PSA (Total & Free)",
      "PSA Ratio",
      "eGFR Calculation",
      "Cystatin C",
      "Beta-2 Microglobulin",
      "Kidney Stone Analysis (FTIR)",
    ],
    benefits: [
      "Early kidney disease detection",
      "Prostate cancer screening",
      "UTI diagnosis and monitoring",
      "Kidney stone composition analysis",
    ],
    packages: ["Kidney Health Panel ₹1,500", "Prostate Health Panel ₹2,800"],
  },
  {
    id: "endocrinology",
    title: "ENDOCRINOLOGY",
    icon: "/image/spec_endocrinology.png",
    color: "#8e44ad",
    description:
      "Advanced hormonal and metabolic testing for thyroid, adrenal, pituitary, and reproductive endocrine disorders. Comprehensive panels for diabetes monitoring, hormonal imbalances, and metabolic syndrome.",
    tests: [
      "Thyroid Profile (T3, T4, TSH, Free T3, Free T4)",
      "Anti-TPO, Anti-Thyroglobulin Antibodies",
      "Thyroglobulin",
      "HbA1c (Glycated Hemoglobin)",
      "Fasting & Post-Prandial Blood Glucose",
      "Insulin & C-Peptide",
      "Cortisol (Basal & Post ACTH)",
      "DHEAS, ACTH",
      "Growth Hormone, IGF-1",
      "Prolactin, FSH, LH, Estradiol",
    ],
    benefits: [
      "Thyroid disorder diagnosis",
      "Diabetes management and monitoring",
      "Hormonal imbalance workup",
      "Adrenal insufficiency screening",
    ],
    packages: ["Thyroid Profile ₹640", "Complete Hormonal Panel ₹5,200"],
  },
  {
    id: "oncology",
    title: "ONCOLOGY",
    icon: "/image/spec_oncology.png",
    color: "#16a085",
    description:
      "Comprehensive cancer biomarker panels for early detection, monitoring treatment response, and surveillance. Our oncology tests use the latest immunoassay and molecular techniques.",
    tests: [
      "PSA (Prostate Specific Antigen)",
      "CEA (Carcinoembryonic Antigen)",
      "CA 125 (Ovarian Cancer Marker)",
      "CA 19-9 (Pancreatic/GI Marker)",
      "AFP (Alpha Fetoprotein)",
      "Beta-HCG",
      "CA 15-3 (Breast Cancer Marker)",
      "Calcitonin",
      "NSE (Neuro-Specific Enolase)",
      "Cyfra 21-1",
    ],
    benefits: [
      "Early cancer detection",
      "Treatment response monitoring",
      "Recurrence surveillance",
      "Prognostic assessment",
    ],
    packages: ["Basic Tumor Markers ₹2,200", "Complete Oncology Panel ₹8,500"],
  },
  {
    id: "infectious-diseases",
    title: "INFECTIOUS DISEASES",
    icon: "/image/spec_infectious.png",
    color: "#d35400",
    description:
      "Advanced molecular and serological testing for infectious diseases using FilmArray PCR, CB-NAAT, and next-generation immunoassays. Rapid and accurate identification of pathogens.",
    tests: [
      "FilmArray Respiratory Panel (22 pathogens)",
      "FilmArray Blood Culture ID Panel",
      "CB-NAAT (TB / NTM Screening)",
      "Dengue NS1 Ag + IgM/IgG",
      "Malaria Antigen Rapid Test",
      "HIV 1 & 2 Antibody (4th Generation)",
      "Hepatitis B (HBsAg, Anti-HBs, HBeAg)",
      "Hepatitis C (Anti-HCV, HCV RNA)",
      "TORCH Profile",
      "Typhoid (Widal / Typhidot)",
    ],
    benefits: [
      "Rapid pathogen identification",
      "Antibiotic resistance profiling",
      "Travel-related infection diagnosis",
      "Immunocompromised patient screening",
    ],
    packages: ["Fever Panel ₹1,800", "Complete Infection Workup ₹6,500"],
  },
  {
    id: "womens-health",
    title: "WOMEN'S HEALTH",
    icon: "/image/spec_womens.png",
    color: "#e91e8c",
    description:
      "Specialized diagnostic panels addressing the unique health needs of women across all life stages — from reproductive health and prenatal care to menopause management and hormonal assessment.",
    tests: [
      "Hormonal Profile (FSH, LH, Estradiol, Progesterone)",
      "AMH (Anti-Müllerian Hormone)",
      "Fertility Panel",
      "Maternal Serum Screening (NIPT)",
      "Pap Smear / LBC",
      "BRCA Gene Testing",
      "CA 125",
      "Thyroid Profile",
      "TORCH Profile",
      "Vitamin D & B12",
    ],
    benefits: [
      "Fertility assessment and ovarian reserve",
      "Prenatal screening and NIPT",
      "Cervical cancer prevention (Pap smear)",
      "PCOS and menopause hormonal workup",
    ],
    packages: ["Women's Basic Panel ₹1,800", "Complete Women's Health ₹5,500"],
  },
  {
    id: "gastroenterology",
    title: "GASTROENTEROLOGY",
    icon: "/image/spec_gastro.png",
    color: "#27ae60",
    description:
      "Advanced hepatology and gastroenterology panels for liver disease, inflammatory bowel conditions, and gastrointestinal function evaluation. Accurate diagnosis enables targeted therapeutic decisions.",
    tests: [
      "Liver Function Test (LFT) — 11 Parameters",
      "Hepatitis Panel (A, B, C, E)",
      "Bile Acids — Serum",
      "Fecal Calprotectin",
      "Helicobacter Pylori (Stool Antigen & IgG)",
      "ASCA / Anti-pANCA (IBD Panel)",
      "Celiac Disease Panel (Anti-tTG IgA/IgG)",
      "Amylase & Lipase",
      "GI Cancer Markers (CEA, CA 19-9)",
      "Stool Routine & Occult Blood",
    ],
    benefits: [
      "Hepatitis and liver cirrhosis diagnosis",
      "Inflammatory bowel disease monitoring",
      "Celiac and malabsorption screening",
      "GI cancer surveillance",
    ],
    packages: ["Liver Health Panel ₹1,200", "Complete GI Panel ₹4,800"],
  },
  {
    id: "bone-disorders",
    title: "BONE DISORDERS",
    icon: "/image/spec_bone.png",
    color: "#795548",
    description:
      "Comprehensive musculoskeletal and bone metabolism panels for osteoporosis, arthritis, and metabolic bone disease. Early diagnosis and monitoring support effective management strategies.",
    tests: [
      "Calcium (Total & Ionized)",
      "Phosphorus",
      "Vitamin D — 25 Hydroxy (D2 + D3)",
      "PTH-Intact (Parathyroid Hormone)",
      "Alkaline Phosphatase",
      "Osteocalcin",
      "P1NP (Bone Formation Marker)",
      "Beta-CTX (Bone Resorption Marker)",
      "Rheumatoid Factor (RA Factor)",
      "Anti-CCP, ANA, CRP, ESR",
    ],
    benefits: [
      "Osteoporosis risk assessment",
      "Rheumatoid arthritis diagnosis",
      "Vitamin D deficiency treatment monitoring",
      "Bone turnover marker tracking",
    ],
    packages: ["Bone Health Panel ₹1,500", "Arthritis Profile ₹3,200"],
  },
];

export default function SpecialityTestsPage() {
  const [activeId, setActiveId] = useState("neurology");
  const active = specialities.find((s) => s.id === activeId)!;

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#e0f2fe] to-[#eff6ff] py-14 border-b border-gray-100">
        <div className="max-w-[1260px] mx-auto px-4 w-full">
          <span className="inline-block bg-[#2563eb] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-widest uppercase mb-4">
            10 Specialities
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f2d5e] mb-3 leading-tight">
            Speciality Diagnostic Tests
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl font-medium mb-6">
            Accurate and reliable diagnostics for all your health needs, with advanced testing across 10 medical specialties. Reviewed by expert consultants.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:+919964639639"
              className="inline-flex items-center gap-2 bg-[#2563eb] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1d4ed8] transition-all text-sm shadow-md">
              <Phone className="w-4 h-4" /> Call to Book
            </a>
            <a href="https://api.whatsapp.com/send?phone=919964639639" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#25d366] text-[#25d366] font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-all text-sm">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1260px] mx-auto px-4 py-10 w-full">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Sidebar Navigation ── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0">
            <div className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm sticky top-24">
              <div className="bg-[#2563eb] text-white px-5 py-4">
                <h3 className="font-extrabold text-sm tracking-wide">Our Specialities</h3>
                <p className="text-blue-100 text-[11px] mt-0.5">Select to explore tests</p>
              </div>
              <nav className="py-2">
                {specialities.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-all ${
                      activeId === s.id
                        ? "bg-[#dbeafe] text-[#2563eb] font-extrabold border-r-4 border-[#2563eb]"
                        : "text-slate-600 hover:bg-gray-50 font-semibold"
                    }`}
                  >
                    <img src={s.icon} alt={s.title} className="w-7 h-7 object-contain flex-shrink-0" />
                    <span className="text-[12px] leading-tight">{s.title}</span>
                    {activeId === s.id && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Main Content ── */}
          <main className="flex-1 min-w-0">
            <div className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm">
              {/* Speciality Header */}
              <div className="relative overflow-hidden p-8 border-b border-gray-100"
                style={{ background: `linear-gradient(135deg, ${active.color}15 0%, ${active.color}05 100%)` }}>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center p-3 flex-shrink-0">
                    <img src={active.icon} alt={active.title} className="w-14 h-14 object-contain" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f2d5e] mb-1">{active.title}</h2>
                    <p className="text-slate-500 text-sm font-medium max-w-xl">{active.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-8">
                {/* Tests List */}
                <div>
                  <h3 className="text-lg font-extrabold text-[#0f2d5e] mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#dbeafe] flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                    </span>
                    Available Tests
                  </h3>
                  <ul className="space-y-2.5">
                    {active.tests.map((test, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#2563eb] flex-shrink-0 mt-0.5" />
                        <span className="text-[13px] text-slate-700 font-semibold">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits + Packages */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0f2d5e] mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#dbeafe] flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                      </span>
                      Clinical Benefits
                    </h3>
                    <ul className="space-y-2.5">
                      {active.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#2563eb] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                          <span className="text-[13px] text-slate-700 font-semibold">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related Packages */}
                  <div className="bg-[#dbeafe]/50 rounded-2xl p-5 border border-[#2563eb]/10">
                    <h3 className="text-sm font-extrabold text-[#0f2d5e] mb-3">Related Packages</h3>
                    <div className="space-y-3">
                      {active.packages.map((pkg, i) => (
                        <div key={i} className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                          <span className="text-[12px] font-bold text-slate-700">{pkg}</span>
                          <a href={`https://api.whatsapp.com/send?phone=919964639639&text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(pkg)}`}
                            target="_blank" rel="noreferrer"
                            className="bg-[#2563eb] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-xl hover:bg-[#1d4ed8] transition-colors flex-shrink-0 ml-3">
                            Book
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2">
                    <a href="tel:+919964639639"
                      className="w-full flex items-center justify-center gap-2 bg-[#2563eb] text-white font-bold py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-colors text-sm shadow-md">
                      <Phone className="w-4 h-4" /> Call to Book This Test
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=919964639639&text=Hi%2C%20I%20want%20to%20know%20about%20${encodeURIComponent(active.title)}%20tests`}
                      target="_blank" rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 border-2 border-[#25d366] text-[#25d366] font-bold py-3 rounded-xl hover:bg-green-50 transition-colors text-sm">
                      <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                    </a>
                    <div className="text-center pt-1">
                      <span className="text-[11px] text-slate-400 font-medium">📞 +91 99646 39639 · 🕐 Open 24x7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation between specialities */}
            <div className="flex justify-between mt-6 gap-4">
              {specialities.findIndex((s) => s.id === activeId) > 0 && (
                <button
                  onClick={() => setActiveId(specialities[specialities.findIndex((s) => s.id === activeId) - 1].id)}
                  className="flex items-center gap-2 border border-gray-200 text-slate-600 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Previous Speciality
                </button>
              )}
              {specialities.findIndex((s) => s.id === activeId) < specialities.length - 1 && (
                <button
                  onClick={() => setActiveId(specialities[specialities.findIndex((s) => s.id === activeId) + 1].id)}
                  className="flex items-center gap-2 bg-[#2563eb] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[#1d4ed8] transition-colors text-sm ml-auto">
                  Next Speciality <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
