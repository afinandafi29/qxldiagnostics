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

export default function CardiologyPage() {
  const IconComponent = iconMap["Heart"] || Activity;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=2000')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Cardiology</h1>
            <p className="text-sky-100 text-lg md:text-xl mb-8 leading-relaxed">
              Diagnostic screenings for cardiovascular risks, lipid metabolism, and cardiac enzyme levels.
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
          <span className="text-black font-medium">Cardiology</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro text */}
            <section className="prose prose-blue max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                Evaluate your heart health and cardiovascular risks with our state-of-the-art lipid panels, inflammatory markers, and cardiac biomarker profiles.
              </p>
            </section>

            {/* Test Profiles */}
            <section id="test-profiles">
              <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <IconComponent className="w-8 h-8 text-sky-600" /> 
                Cardiology Test Profiles
              </h2>
              <div className="grid gap-6">
                
                                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Lipid Profile - Advanced</h3>
                      <p className="text-gray-600 text-sm mb-4">Total Cholesterol, HDL, LDL, VLDL, Triglycerides, Apolipoprotein A1 & B, Lp(a), Apo B/Apo A1 Ratio.</p>
                    </div>
                    <Link href="/book" className="bg-sky-600 text-white font-medium px-4 py-2 rounded-lg whitespace-nowrap hover:bg-sky-700 transition-colors">
                      Request Latest Price
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Cardiac Biomarker Panel</h3>
                      <p className="text-gray-600 text-sm mb-4">High-Sensitivity Troponin-I, CK-MB, NT-proBNP, Myoglobin.</p>
                    </div>
                    <Link href="/book" className="bg-sky-600 text-white font-medium px-4 py-2 rounded-lg whitespace-nowrap hover:bg-sky-700 transition-colors">
                      Request Latest Price
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Cardiovascular Risk Screen</h3>
                      <p className="text-gray-600 text-sm mb-4">hs-CRP, Homocysteine, Lipoprotein (a), Advanced Lipid Profile.</p>
                    </div>
                    <Link href="/book" className="bg-sky-600 text-white font-medium px-4 py-2 rounded-lg whitespace-nowrap hover:bg-sky-700 transition-colors">
                      Request Latest Price
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Hypertension Screening</h3>
                      <p className="text-gray-600 text-sm mb-4">Plasma Renin Activity, Aldosterone, Serum Electrolytes, Creatinine, Urine Microalbumin.</p>
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
                  <h4 className="font-bold text-black mb-2">1. How often should I get a lipid profile?</h4>
                  <p className="text-gray-600 text-sm">Healthy adults should get a lipid profile once a year. If you have risk factors like hypertension, smoking, or family history of heart disease, testing every 3-6 months is advised.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">2. What is a cardiac biomarker test?</h4>
                  <p className="text-gray-600 text-sm">It measures specific enzymes and proteins (like Troponin and CK-MB) that are released into the blood when heart muscle is damaged, critical for diagnosing acute cardiac events.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">3. Why are hs-CRP and Homocysteine important?</h4>
                  <p className="text-gray-600 text-sm">These are inflammatory and metabolic markers that help predict risk of plaque buildup in arteries, even when cholesterol levels appear normal.</p>
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
