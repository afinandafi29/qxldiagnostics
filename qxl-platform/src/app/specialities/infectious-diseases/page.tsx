"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Activity, Stethoscope, Microscope, Droplet, Heart, Shield, Bone } from 'lucide-react';

const iconMap = {
  Activity: Activity,
  Stethoscope: Stethoscope,
  Microscope: Microscope,
  Droplet: Droplet,
  Heart: Heart,
  Shield: Shield,
  Bone: Bone
};

export default function InfectiousDiseasesPage() {
  const IconComponent = iconMap["Shield"] || Activity;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Infectious Diseases</h1>
            <p className="text-sky-100 text-lg md:text-xl mb-8 leading-relaxed">
              Molecular and serological testing for viral, bacterial, and parasitic infections.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#test-profiles" className="bg-white font-bold px-6 py-3 rounded-full hover:bg-sky-50 transition-colors" style={{ color: '#0369a1' }}>
                View Test Profiles
              </a>
              <a href="tel:+919964639639" className="border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                Book a Test
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/specialities" className="hover:text-sky-600">Our Specialities</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-black font-medium">Infectious Diseases</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro text */}
            <section className="prose prose-blue max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                Advanced PCR and antibody testing for rapid, accurate detection of seasonal, chronic, and tropical infectious conditions.
              </p>
            </section>

            {/* Test Profiles */}
            <section id="test-profiles">
              <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <IconComponent className="w-8 h-8 text-sky-600" /> 
                Infectious Diseases Test Profiles
              </h2>
              <div className="grid gap-6">
                
                                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Fever Panel - Extended</h3>
                      <p className="text-gray-600 text-sm mb-4">Dengue NS1/IgG/IgM, Malaria Antigen, Typhoid TyphiDot, Complete Blood Count (CBC), ESR, Urine Routine.</p>
                    </div>
                    <Link href="/book" className="bg-sky-600 text-white font-medium px-4 py-2 rounded-lg whitespace-nowrap hover:bg-sky-700 transition-colors">
                      Request Latest Price
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Hepatitis Serology Profile</h3>
                      <p className="text-gray-600 text-sm mb-4">HBsAg (Hep B), Anti-HCV (Hep C), Hepatitis A IgM, Hepatitis E IgM.</p>
                    </div>
                    <Link href="/book" className="bg-sky-600 text-white font-medium px-4 py-2 rounded-lg whitespace-nowrap hover:bg-sky-700 transition-colors">
                      Request Latest Price
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">STD/STI Comprehensive Screening</h3>
                      <p className="text-gray-600 text-sm mb-4">HIV 1 & 2 ELISA, Syphilis VDRL, Chlamydia Trachomatis & Neisseria Gonorrhoeae PCR.</p>
                    </div>
                    <Link href="/book" className="bg-sky-600 text-white font-medium px-4 py-2 rounded-lg whitespace-nowrap hover:bg-sky-700 transition-colors">
                      Request Latest Price
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Tuberculosis (TB) Gold Panel</h3>
                      <p className="text-gray-600 text-sm mb-4">TB QuantiFERON Gold, TB PCR (Sputum/CSF), Acid-Fast Bacilli (AFB) Smear & Culture.</p>
                    </div>
                    <Link href="/book" className="bg-sky-600 text-white font-medium px-4 py-2 rounded-lg whitespace-nowrap hover:bg-sky-700 transition-colors">
                      Request Latest Price
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-4">Why Choose QXL Diagnostics?</h2>
              <p className="text-gray-700 mb-6">Choosing QXL Diagnostics means opting for excellence in diagnostic services. Our lab is dedicated to ensuring that each test is performed with the highest standards of accuracy and care.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-sky-100 p-2 rounded-lg text-sky-600"><Microscope className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-black">Advanced Diagnostic Tools</h4>
                    <p className="text-sm text-gray-600 mt-1">State-of-the-art diagnostic equipment ensuring precision insights into patient health.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-sky-100 p-2 rounded-lg text-sky-600"><CheckCircle className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-black">Comprehensive Testing</h4>
                    <p className="text-sm text-gray-600 mt-1">Identifying conditions at an early stage for effective treatment decisions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-sky-100 p-2 rounded-lg text-sky-600"><Stethoscope className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-black">Patient-Centered</h4>
                    <p className="text-sm text-gray-600 mt-1">We take time to explain each test and answer any questions to ease the process.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-sky-100 p-2 rounded-lg text-sky-600"><Activity className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-black">World-Class Facility</h4>
                    <p className="text-sm text-gray-600 mt-1">One of Bengaluru’s premier diagnostic labs meeting the highest safety standards.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">1. How fast can I get fever panel results?</h4>
                  <p className="text-gray-600 text-sm">Most fever panel results (Dengue, Malaria, CBC) are delivered within 4-6 hours to ensure rapid clinical intervention.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">2. What is the difference between PCR and antibody tests?</h4>
                  <p className="text-gray-600 text-sm">PCR tests detect the actual DNA/RNA of the pathogen, indicating active infection, while antibody tests detect your body's immune response to a past or present infection.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">3. Do I need to fast for infectious disease tests?</h4>
                  <p className="text-gray-600 text-sm">No fasting is required for standard serological or molecular tests for infectious diseases.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-gradient-to-br from-sky-600 to-sky-800 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-white">Need help booking a test?</h3>
              <p className="text-sky-100 text-sm mb-6">Our experts are available to guide you through the process and help you choose the right tests.</p>
              <a href="tel:+919964639639" className="w-full bg-white font-bold py-3 rounded-xl flex justify-center hover:bg-sky-50 transition-colors mb-3 shadow-md" style={{ color: '#0369a1' }}>
                Call +91 99646 39639
              </a>
              <a href="https://api.whatsapp.com/send?phone=919964639639" target="_blank" rel="noreferrer" className="w-full border border-sky-500 bg-sky-700 text-white font-bold py-3 rounded-xl flex justify-center hover:bg-sky-600 transition-colors">
                WhatsApp Us
              </a>
            </div>

            {/* Other Specialities */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-black mb-4 border-b border-gray-100 pb-2">Our Specialities</h3>
              <ul className="space-y-3">
                {["Neurology", "Hematology", "Cardiology", "Urology", "Endocrinology", "Oncology", "Infectious Diseases", "Women's Health", "Gastroenterology", "Bone Disorders"].map(spec => {
                  const href = `/specialities/${spec.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                  return (
                  <li key={spec}>
                    <Link href={href} className="text-gray-600 hover:text-sky-600 text-sm flex items-center justify-between group font-medium">
                      {spec}
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-sky-500" />
                    </Link>
                  </li>
                  )
                })}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
