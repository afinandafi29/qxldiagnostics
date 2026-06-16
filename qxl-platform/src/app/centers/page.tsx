"use client";
import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

export default function CentersPage() {
  const centers = [
    {
      name: "QXL Diagnostics Bengaluru (Main Lab & Center)",
      address: "3rd Floor, SLN Complex, Mysore Road, Kengeri, Bengaluru – 560 060",
      phone: "+91 99646 39639",
      email: "qxldiagnostics@gmail.com",
      hours: "Mon - Sat: 7:00 AM - 9:00 PM | Sun: 7:00 AM - 2:00 PM",
      mapUrl: "https://www.google.com/maps/place/QXL+DIAGNOSTICS/@12.9113827,77.4824552,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3fa0365530ab:0x2ea1617d2b28d62f!8m2!3d12.9113827!4d77.4850301!16s%2Fg%2F11y5z2g19j?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "QXL Diagnostics North Hub (At North City Specialities)",
      address: "L Square, R D, BB Rd, opposite RMZ Galleria Mall, Ambedkar Colony, Yelahanka, Bengaluru, Karnataka 560064",
      phone: "+91 99646 39639",
      email: "qxldiagnostics@gmail.com",
      hours: "Mon - Sat: 7:30 AM - 8:00 PM | Sun: 8:00 AM - 1:00 PM",
      mapUrl: "https://www.google.com/maps/place/QXL+Diagnostics+North+Hub+At+North+City+Specialities/@13.0948532,77.5915853,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae19152c93813d:0x7bc03d6b9254a87d!8m2!3d13.0948532!4d77.5941602!16s%2Fg%2F11yqqrjpfq?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <div className="bg-[#f8faff] min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#e0f2fe] to-[#fbf8f5] py-12 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f2d5e] mb-3">Our Diagnostic Centers</h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl font-medium">
            Locate our clinical labs and sample collection units across Bengaluru. Book a walk-in test or coordinate home collection.
          </p>
          <div className="w-16 h-1 bg-[#2563eb] rounded-full mt-4"></div>
        </div>
      </section>

      {/* Centers Listing */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {centers.map((center, idx) => (
              <div key={idx} className="bg-white border border-gray-150 rounded-3xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-start gap-2">
                    <Shield className="w-5.5 h-5.5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>{center.name}</span>
                  </h3>
                  
                  <div className="space-y-3.5 text-xs text-slate-600 font-semibold mb-6">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#0f2d5e] flex-shrink-0 mt-0.5" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#0f2d5e] flex-shrink-0" />
                      <a href={`tel:${center.phone.replace(/ /g, '')}`} className="hover:underline text-slate-850">{center.phone}</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#0f2d5e] flex-shrink-0" />
                      <a href={`mailto:${center.email}`} className="hover:underline text-slate-850">{center.email}</a>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#0f2d5e] flex-shrink-0 mt-0.5" />
                      <span>{center.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-gray-100 pt-4 mt-2">
                  <a 
                    href={center.mapUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 text-center border border-gray-200 text-[#0f2d5e] py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors"
                  >
                    View Map Directions
                  </a>
                  <a 
                    href="/book" 
                    className="flex-1 text-center bg-[#2563eb] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
