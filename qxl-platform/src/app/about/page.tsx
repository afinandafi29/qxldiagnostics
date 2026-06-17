"use client";
import React from 'react';
import { ShieldCheck, MapPin, Award, BookOpen, Users, Settings, Activity, Beaker, HeartPulse, Stethoscope, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28 border-b border-gray-100 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/about_hero_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#f8faff]/85 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-[1260px] mx-auto px-4 flex flex-col items-center text-center">
          <span className="inline-block bg-[#2563eb] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-widest uppercase mb-4 shadow-sm">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f2d5e] mb-4 leading-tight">
            QXL Diagnostics Bengaluru
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-3xl font-medium mb-6">
            At QXL Diagnostics Super Speciality Lab, Bengaluru, we take pride in offering state-of-the-art diagnostic services, designed to deliver unmatched precision and efficiency.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[1260px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-[#0f2d5e] text-3xl font-extrabold mb-4">Precision & Efficiency</h2>
              <div className="w-16 h-1 bg-[#2563eb] rounded-full mb-6" />
              <p className="text-slate-600 leading-relaxed mb-4">
                Our services include seamless home and clinic sample collection across Bengaluru, ensuring timely and reliable results to support your patient care. <strong className="text-[#2563eb]">QXL Diagnostics Super Specialty Lab</strong>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our laboratory is equipped to perform advanced tests, including autoimmune panels, India-specific allergen panels, immunofluorescence, immunoblot, ELISA, chemiluminescence, Multiplex PCR (including FilmArray for syndrome-based testing), coagulation factor assays, TB PCR by CB NAAT (with NTM screening), automated advanced microbiology for infectious diseases, maternal screening, electrophoresis assays, and Histo-Cytopathology with IHC, along with other cutting-edge immunoassays. 
              </p>
              <p className="text-slate-600 leading-relaxed mt-4 font-bold">
                Each test is meticulously reviewed by our experienced consultants, including pathologists, microbiologists, and biochemists.
              </p>
              
              {/* Virtual tour moved to the right column */}
            </div>
            <div className="bg-[#dbeafe] rounded-3xl p-8 flex items-center justify-center relative overflow-hidden min-h-[400px]">
               <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2563eb]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#2563eb]/15 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!4v1710000000000!6m8!1m7!1sAF1QipOT_E1OvCmLPtbrGMkCFVjybPWfPYcc217TvRyC!2m2!1d12.9113766!2d77.4850736!3f193.36!4f89.83!5f0" 
                 width="100%" 
                 height="100%" 
                 className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-lg border-0" 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade" 
                 title="QXL Diagnostics Virtual Tour">
               </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-[#f8fbfe] border-y border-gray-150">
        <div className="max-w-[1260px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#0f2d5e] text-3xl font-extrabold mb-3">Our Analytical Equipment</h2>
            <div className="w-16 h-1 bg-[#2563eb] mx-auto rounded-full mb-6" />
            <p className="text-slate-500 text-sm max-w-3xl mx-auto font-medium mb-12">
              Equipped with state-of-the-art analytical instruments that ensure precision, accuracy, and efficiency in all our diagnostic processes.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-16 max-w-5xl mx-auto">
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                <img src="/image/equipment_1.jpg" alt="Analytical Equipment in use" className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                <img src="/image/equipment_2.png" alt="Lab Technician operating equipment" className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "DXI 9000 Analyzer",
                desc: "High-throughput clinical chemistry system renowned for its accuracy in analyzing biochemical parameters. Delivers rapid results for large-scale operations in areas like Electronic City and Marathahalli.",
                image: "/image/eq_dxi9000.png"
              },
              {
                title: "IMMULITE 2000",
                desc: "State-of-the-art immunoassay analyzer designed for comprehensive testing of hormones, tumor markers, infectious diseases, and allergy-related biomarkers. Versatile and reliable for residents in Rajajinagar and Malleshwaram.",
                image: "/image/eq_immulite.png"
              },
              {
                title: "VITEK System",
                desc: "Revolutionizing microbiology with automated microbial identification and susceptibility testing. Provides rapid and accurate identification of bacterial and fungal pathogens, vital for targeted antimicrobial therapy.",
                image: "/image/eq_vitek.png"
              },
              {
                title: "BACT ALERT",
                desc: "Automated blood culture system to detect microbial growth quickly, enabling early diagnosis of bloodstream infections. Crucial for timely and accurate diagnoses in critical care.",
                image: "/image/eq_bact.png"
              },
              {
                title: "PHADIATOP",
                desc: "Widely used in vitro allergy testing system capable of detecting specific IgE antibodies to a panel of common allergens. Aids in developing personalized treatment plans.",
                image: "/image/eq_phadiatop.png"
              },
              {
                title: "FTIR Spectroscopy",
                desc: "Powerful analytical technique for chemical compound characterization. Used for kidney stone analysis, drug analysis, and biomarker identification owing to high sensitivity.",
                image: "/image/eq_ftir.png"
              }
            ].map((eq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2563eb]/30 transition-all">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{eq.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="max-w-[1260px] mx-auto px-4 text-center">
          <h2 className="text-[#0f2d5e] text-3xl font-extrabold mb-4">What We Offer</h2>
          <div className="w-16 h-1 bg-[#2563eb] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
            At QXL Diagnostics, we leverage these advanced technologies to offer a wide range of diagnostic services, from routine screenings to specialized tests in oncology, reproductive health, autoimmune diseases, and more. Our lab’s capabilities ensure that we provide not just test results, but valuable insights that empower patients and healthcare providers to make informed decisions about health management and treatment.
          </p>
          
          <div className="bg-[#2563eb] rounded-3xl p-8 md:p-12 text-white text-center shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-900/10 rounded-full blur-2xl pointer-events-none" />
             <h2 className="text-3xl font-extrabold mb-4 relative z-10">Experience the QXL Diagnostics Advantage</h2>
             <p className="text-blue-50 max-w-3xl mx-auto leading-relaxed relative z-10 font-medium">
               Whether you are in the bustling tech hubs of Whitefield and Electronic City or the serene residential neighborhoods of JP Nagar and Jayanagar, QXL Diagnostics is committed to providing the highest standard of diagnostic care. Our advanced equipment and skilled professionals ensure that you receive accurate, timely, and actionable insights.
             </p>
             <p className="mt-4 font-bold text-white relative z-10">
               Explore our services today and discover the QXL difference—where innovation meets care, right here in Bengaluru.
             </p>
          </div>

          <div className="mt-12">
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Our Specialities</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Gastroenterology", "Hematology", "Infectious Diseases", "Neurology", "Oncology", "Urology", "Cardiology", "Endocrinology", "Women Health", "Bone Disorders"].map(spec => (
                 <span key={spec} className="bg-[#eff6ff] text-[#2563eb] border border-[#2563eb]/20 px-4 py-2 rounded-full text-sm font-bold shadow-sm">{spec}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B Services / Footer Pre-amble */}
      <section className="py-12 bg-slate-900 text-center">
        <div className="max-w-[1260px] mx-auto px-4">
          <p className="text-slate-300 font-medium max-w-3xl mx-auto mb-8">
            We are the leading provider of state-of-the-art laboratory solutions, offering customized B2B services that enable labs across diverse industries to thrive in their quest for scientific advancement and excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
             <div className="flex items-start gap-4">
               <div className="bg-[#2563eb] p-3 rounded-full flex-shrink-0"><MapPin className="text-white w-5 h-5" /></div>
               <div>
                 <h4 className="text-white font-bold mb-1">Address</h4>
                 <p className="text-slate-400 text-sm">3rd Floor, SLN Complex, Mysore Road, Kengeri, Bengaluru – 560 060</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="bg-[#2563eb] p-3 rounded-full flex-shrink-0"><Mail className="text-white w-5 h-5" /></div>
               <div>
                 <h4 className="text-white font-bold mb-1">Email</h4>
                 <p className="text-slate-400 text-sm">qxldiagnostics@gmail.com</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="bg-[#2563eb] p-3 rounded-full flex-shrink-0"><Phone className="text-white w-5 h-5" /></div>
               <div>
                 <h4 className="text-white font-bold mb-1">Phone</h4>
                 <p className="text-slate-400 text-sm">+91 9964 639639</p>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
