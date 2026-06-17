import os

specialities = {
    "neurology": {
        "title": "Neurology",
        "icon": "Activity",
        "bg_img": "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000",
        "description": "Advanced diagnostic screening for neurological disorders, nerve function, and brain health.",
        "intro": "At QXL Diagnostics, we offer specialized test panels designed to evaluate brain and nerve function, diagnose neurodegenerative conditions, and monitor vital neurotransmitters.",
        "profiles": [
            {
                "name": "Neuropathy Profile",
                "tests": "Vitamin B12, Folate, HbA1c, ANA, ESR, Blood Sugar (Fasting & PP)."
            },
            {
                "name": "Encephalitis & CSF Panel",
                "tests": "CSF analysis, oligoclonal bands, HSV 1 & 2 PCR, CSF Protein & Glucose."
            },
            {
                "name": "Myasthenia Gravis Panel",
                "tests": "AChR Antibodies (Acetylcholine Receptor), MuSK Antibodies."
            },
            {
                "name": "Neuro-Infectious Screen",
                "tests": "Meningitis PCR panel, TB PCR, Cryptococcal Antigen, CSF Culture."
            }
        ],
        "faqs": [
            {
                "q": "1. What neurological tests do you offer?",
                "a": "We offer comprehensive neuropathy panels, cerebrospinal fluid (CSF) analysis, neuro-infectious PCR screens, and vitamin B12/folate neural health assessments."
            },
            {
                "q": "2. How should I prepare for a neuropathy blood test?",
                "a": "Most antibody and molecular panels require no fasting. However, if your panel includes fasting blood sugar or metabolic markers, you will need to fast for 8-12 hours."
            },
            {
                "q": "3. What are the symptoms that warrant a neurology diagnostic test?",
                "a": "Symptoms like chronic numbness, tingling in hands or feet, unexplained muscle weakness, severe headaches, memory issues, or balance disorders often warrant these diagnostic profiles."
            }
        ]
    },
    "hematology": {
        "title": "Hematology",
        "icon": "Droplet",
        "bg_img": "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000",
        "description": "Comprehensive blood and bone marrow diagnostics for anemia, coagulation disorders, and leukemia.",
        "intro": "Our advanced hematology panels assess blood cell counts, hemoglobin variants, and coagulation factors to diagnose and monitor blood-related conditions.",
        "profiles": [
            {
                "name": "Anemia Profile - Extended",
                "tests": "Complete Blood Count (CBC), Iron Studies, Ferritin, Transferrin, Vitamin B12, Folate, Erythropoietin."
            },
            {
                "name": "Coagulation Profile",
                "tests": "Prothrombin Time (PT/INR), Activated Partial Thromboplastin Time (APTT), Fibrinogen, D-Dimer."
            },
            {
                "name": "Thalassemia & Hemoglobinopathy Screening",
                "tests": "Hb HPLC, CBC, Peripheral Smear review, Reticulocyte count."
            },
            {
                "name": "Bleeding Disorders Panel",
                "tests": "Bleeding Time, Clotting Time, Platelet Aggregation, Factor VIII & IX Assay."
            }
        ],
        "faqs": [
            {
                "q": "1. What does a hematology test diagnose?",
                "a": "Hematology tests help diagnose conditions like iron-deficiency anemia, vitamin deficiencies, bleeding/clotting disorders, thalassemia, leukemia, and platelet disorders."
            },
            {
                "q": "2. Do I need to fast for hematology blood tests?",
                "a": "Standard CBC and coagulation profiles do not require fasting. However, if you are getting an Anemia Profile that includes Iron Studies, an 8-12 hour fast is highly recommended."
            },
            {
                "q": "3. What is Hb HPLC?",
                "a": "High-Performance Liquid Chromatography (HPLC) is a precise test used to screen for abnormal hemoglobin types, essential for diagnosing thalassemia and sickle cell traits."
            }
        ]
    },
    "cardiology": {
        "title": "Cardiology",
        "icon": "Heart",
        "bg_img": "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=2000",
        "description": "Diagnostic screenings for cardiovascular risks, lipid metabolism, and cardiac enzyme levels.",
        "intro": "Evaluate your heart health and cardiovascular risks with our state-of-the-art lipid panels, inflammatory markers, and cardiac biomarker profiles.",
        "profiles": [
            {
                "name": "Lipid Profile - Advanced",
                "tests": "Total Cholesterol, HDL, LDL, VLDL, Triglycerides, Apolipoprotein A1 & B, Lp(a), Apo B/Apo A1 Ratio."
            },
            {
                "name": "Cardiac Biomarker Panel",
                "tests": "High-Sensitivity Troponin-I, CK-MB, NT-proBNP, Myoglobin."
            },
            {
                "name": "Cardiovascular Risk Screen",
                "tests": "hs-CRP, Homocysteine, Lipoprotein (a), Advanced Lipid Profile."
            },
            {
                "name": "Hypertension Screening",
                "tests": "Plasma Renin Activity, Aldosterone, Serum Electrolytes, Creatinine, Urine Microalbumin."
            }
        ],
        "faqs": [
            {
                "q": "1. How often should I get a lipid profile?",
                "a": "Healthy adults should get a lipid profile once a year. If you have risk factors like hypertension, smoking, or family history of heart disease, testing every 3-6 months is advised."
            },
            {
                "q": "2. What is a cardiac biomarker test?",
                "a": "It measures specific enzymes and proteins (like Troponin and CK-MB) that are released into the blood when heart muscle is damaged, critical for diagnosing acute cardiac events."
            },
            {
                "q": "3. Why are hs-CRP and Homocysteine important?",
                "a": "These are inflammatory and metabolic markers that help predict risk of plaque buildup in arteries, even when cholesterol levels appear normal."
            }
        ]
    },
    "urology": {
        "title": "Urology",
        "icon": "Microscope",
        "bg_img": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000",
        "description": "Renal function, bladder health, and prostate screenings for comprehensive urological wellness.",
        "intro": "We provide specialized urine chemistry and blood filtration markers to assess kidney function, prostate health, and urinary tract conditions.",
        "profiles": [
            {
                "name": "Kidney Function Test (KFT) - Advanced",
                "tests": "Urea, Creatinine, Uric Acid, Blood Urea Nitrogen (BUN), Electrolytes (Sodium, Potassium, Chloride), eGFR."
            },
            {
                "name": "Prostate Health Panel",
                "tests": "Prostate Specific Antigen (PSA) - Free, PSA - Total, Free/Total PSA Ratio."
            },
            {
                "name": "Urinary Stone Risk Profile",
                "tests": "Urine Calcium, Oxalate, Uric Acid, Citrate, Creatinine, Phosphorus, pH, Urine Volume (24 Hours)."
            },
            {
                "name": "Urinary Tract Infection (UTI) Screen",
                "tests": "Urine Routine & Microscopy, Urine Culture & Sensitivity."
            }
        ],
        "faqs": [
            {
                "q": "1. What is the PSA test for?",
                "a": "The Prostate Specific Antigen (PSA) test screens for prostate inflammation, benign enlargement (BPH), or prostate cancer in men."
            },
            {
                "q": "2. What does a kidney function test measure?",
                "a": "It measures waste products like urea and creatinine in your blood to check how effectively your kidneys are filtering fluids and waste."
            },
            {
                "q": "3. How should I prepare for a 24-hour urine collection test?",
                "a": "We will provide a special container and instructions to collect all urine over a full 24-hour cycle, keeping it refrigerated during collection."
            }
        ]
    },
    "endocrinology": {
        "title": "Endocrinology",
        "icon": "Activity",
        "bg_img": "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000",
        "description": "Hormonal evaluations for thyroid, diabetes, adrenal, and reproductive system health.",
        "intro": "Comprehensive endocrine panels designed to diagnose and manage thyroid disorders, diabetes mellitus, and complex hormonal imbalances.",
        "profiles": [
            {
                "name": "Thyroid Profile - Ultra",
                "tests": "Free T3, Free T4, TSH, Anti-TPO Antibodies, Anti-Thyroglobulin Antibodies."
            },
            {
                "name": "Diabetes Care Panel",
                "tests": "HbA1c, Fasting Blood Sugar, PP Blood Sugar, Fasting Insulin, C-Peptide."
            },
            {
                "name": "Adrenal Function Panel",
                "tests": "Cortisol (AM/PM), ACTH, DHEAS, Aldosterone."
            },
            {
                "name": "Reproductive Hormone Panel",
                "tests": "FSH, LH, Prolactin, Estradiol, Testosterone (Free & Total)."
            }
        ],
        "faqs": [
            {
                "q": "1. What are the signs of a thyroid disorder?",
                "a": "Common symptoms include unexplained weight gain or loss, chronic fatigue, sensitivity to cold or heat, hair loss, and changes in heart rate."
            },
            {
                "q": "2. What is the HbA1c test?",
                "a": "It measures your average blood sugar level over the past 3 months to monitor diabetes management or screen for pre-diabetes."
            },
            {
                "q": "3. Does a hormone blood test require fasting?",
                "a": "Many hormone tests (like Cortisol or Growth Hormone) are time-sensitive and should be taken in the morning. Fasting is required if blood sugar or insulin is part of the panel."
            }
        ]
    },
    "oncology": {
        "title": "Oncology",
        "icon": "Microscope",
        "bg_img": "https://images.unsplash.com/photo-1579156492187-c374b2739e91?q=80&w=2000",
        "description": "Tumor marker screenings and advanced diagnostic assays for cancer risk evaluation and monitoring.",
        "intro": "We offer specialized tumor marker profiles to aid in screening, treatment monitoring, and post-therapy surveillance for various malignancies.",
        "profiles": [
            {
                "name": "Male Tumor Marker Panel",
                "tests": "PSA (Prostate), CEA (Colon/Lungs), AFP (Liver/Testes), CA 19-9 (Pancreas/Biliary)."
            },
            {
                "name": "Female Tumor Marker Panel",
                "tests": "CA 125 (Ovarian), CA 15-3 (Breast), CEA (Colon/Lungs), AFP (Liver/Germ Cell), CA 19-9."
            },
            {
                "name": "Gastrointestinal Oncology Panel",
                "tests": "CEA, CA 19-9, CA 72-4, AFP."
            },
            {
                "name": "Ovarian Cancer Screen (ROMA Index)",
                "tests": "HE4, CA 125, Risk of Ovarian Malignancy Algorithm calculation."
            }
        ],
        "faqs": [
            {
                "q": "1. What are tumor markers?",
                "a": "These are substances (usually proteins) produced by cancer cells or by the body in response to cancer. They can be measured in blood or urine."
            },
            {
                "q": "2. Can a tumor marker test diagnose cancer on its own?",
                "a": "No, tumor markers are not definitive diagnostic tools on their own. They are used in combination with biopsies, imaging, and clinical symptoms to form a diagnosis."
            },
            {
                "q": "3. How are tumor markers used during cancer treatment?",
                "a": "Doctors track tumor marker levels over time. A decrease in levels often indicates that the treatment is effective, while an increase may suggest recurrence."
            }
        ]
    },
    "infectious-diseases": {
        "title": "Infectious Diseases",
        "icon": "Shield",
        "bg_img": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000",
        "description": "Molecular and serological testing for viral, bacterial, and parasitic infections.",
        "intro": "Advanced PCR and antibody testing for rapid, accurate detection of seasonal, chronic, and tropical infectious conditions.",
        "profiles": [
            {
                "name": "Fever Panel - Extended",
                "tests": "Dengue NS1/IgG/IgM, Malaria Antigen, Typhoid TyphiDot, Complete Blood Count (CBC), ESR, Urine Routine."
            },
            {
                "name": "Hepatitis Serology Profile",
                "tests": "HBsAg (Hep B), Anti-HCV (Hep C), Hepatitis A IgM, Hepatitis E IgM."
            },
            {
                "name": "STD/STI Comprehensive Screening",
                "tests": "HIV 1 & 2 ELISA, Syphilis VDRL, Chlamydia Trachomatis & Neisseria Gonorrhoeae PCR."
            },
            {
                "name": "Tuberculosis (TB) Gold Panel",
                "tests": "TB QuantiFERON Gold, TB PCR (Sputum/CSF), Acid-Fast Bacilli (AFB) Smear & Culture."
            }
        ],
        "faqs": [
            {
                "q": "1. How fast can I get fever panel results?",
                "a": "Most fever panel results (Dengue, Malaria, CBC) are delivered within 4-6 hours to ensure rapid clinical intervention."
            },
            {
                "q": "2. What is the difference between PCR and antibody tests?",
                "a": "PCR tests detect the actual DNA/RNA of the pathogen, indicating active infection, while antibody tests detect your body's immune response to a past or present infection."
            },
            {
                "q": "3. Do I need to fast for infectious disease tests?",
                "a": "No fasting is required for standard serological or molecular tests for infectious diseases."
            }
        ]
    },
    "womens-health": {
        "title": "Women's Health",
        "icon": "Activity",
        "bg_img": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000",
        "description": "Customized screenings for reproductive hormones, bone density, and maternal health.",
        "intro": "Tailored health panels supporting women through all stages of life, from reproductive wellness and pregnancy to menopause and bone health.",
        "profiles": [
            {
                "name": "PCOS/PCOD Screening",
                "tests": "Luteinizing Hormone (LH), Follicle Stimulating Hormone (FSH), Prolactin, Free & Total Testosterone, DHEAS, Fasting Insulin."
            },
            {
                "name": "Maternal Antenatal Profile (ANC)",
                "tests": "Blood Group, CBC, Blood Sugar (Fasting & PP), HIV, HBsAg, VDRL, Rubella IgG, Urine Culture."
            },
            {
                "name": "Menopause Health Panel",
                "tests": "FSH, Estradiol, TSH, Vitamin D, Serum Calcium, Lipid Profile."
            },
            {
                "name": "Cervical Cancer Screening Support",
                "tests": "Liquid-Based Cytology (LBC), High-Risk HPV DNA PCR."
            }
        ],
        "faqs": [
            {
                "q": "1. When is the best time to take a PCOS hormone test?",
                "a": "Reproductive hormone blood tests (LH, FSH) are typically recommended on Day 2 or Day 3 of your menstrual cycle for the most accurate baseline."
            },
            {
                "q": "2. Why is rubella screening important during pregnancy?",
                "a": "It checks if the mother has immunity to the rubella virus, which is critical because contracting rubella during pregnancy can cause severe birth defects."
            },
            {
                "q": "3. What is HPV DNA testing?",
                "a": "It is a highly sensitive molecular test that detects high-risk strains of Human Papillomavirus (HPV) responsible for cervical changes, recommended alongside Pap smears."
            }
        ]
    },
    "gastroenterology": {
        "title": "Gastroenterology",
        "icon": "Activity",
        "bg_img": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000",
        "description": "Liver function panels, pancreatic health markers, and digestive disorder diagnostics.",
        "intro": "Assess your digestive tract health, liver enzymes, and pancreatic function with our specialized diagnostic assays.",
        "profiles": [
            {
                "name": "Liver Function Test (LFT) - Advanced",
                "tests": "Bilirubin (Total, Direct, Indirect), SGOT (AST), SGPT (ALT), Alkaline Phosphatase, GGTP, Total Protein, Albumin, Globulin, A/G Ratio."
            },
            {
                "name": "Pancreatic Wellness Panel",
                "tests": "Serum Amylase, Serum Lipase."
            },
            {
                "name": "Celiac Disease Screening",
                "tests": "Anti-Tissue Transglutaminase (tTG) IgA, Total IgA, Anti-Deamidated Gliadin Peptide (DGP) IgG."
            },
            {
                "name": "H. Pylori (Gastro-Duodenal) Screen",
                "tests": "H. Pylori Antigen in Stool, H. Pylori IgG Antibody."
            }
        ],
        "faqs": [
            {
                "q": "1. What does an elevated ALT or AST level mean?",
                "a": "Elevated liver enzymes (SGOT/SGPT) can indicate liver inflammation or cell injury, which may be caused by fatty liver, medications, alcohol, or viral hepatitis."
            },
            {
                "q": "2. Do I need to fast for a Liver Function Test?",
                "a": "Yes, a fasting period of 10-12 hours is recommended before an LFT to ensure accurate lipid and bilirubin readings."
            },
            {
                "q": "3. How is celiac disease diagnosed through blood?",
                "a": "By testing for specific antibodies (like Anti-tTG IgA) that are elevated when someone with celiac disease consumes gluten, causing autoimmune gut lining damage."
            }
        ]
    },
    "bone-disorders": {
        "title": "Bone Disorders",
        "icon": "Bone",
        "bg_img": "https://images.unsplash.com/photo-1581093450096-2679234857b7?q=80&w=2000",
        "description": "Bone health panels, mineral metabolism, and arthritis diagnostics.",
        "intro": "At QXL Diagnostics, we offer specialized test panels designed to assess bone density markers, diagnose arthritis, and monitor mineral balance.",
        "profiles": [
            {
                "name": "Arthritis Profile",
                "tests": "Calcium, Uric Acid, ANA IFA, ASLO, CRP, CBC, ESR, RA Factor, Vitamin D, Anti CCP, HLA B27."
            },
            {
                "name": "Bone & Mineral Metabolism Panel",
                "tests": "Calcium (Total & Ionized), Calcium/Creatinine Ratio Urine, Calcium Urine."
            },
            {
                "name": "Bone Function & Disorders Panel",
                "tests": "Alkaline Phosphatase, P1NP, Osteocalcin, Bone GLA Protein (BGP)."
            },
            {
                "name": "Bone Health (Osteoscreen) Panel",
                "tests": "Calcium, Phosphorus, PTH-Intact, Vitamin D 25 Hydroxy."
            },
            {
                "name": "Rheumatoid Arthritis Panel",
                "tests": "Rheumatoid Factor, Anti CCP, Anti Nuclear Antibody (ANA) ELISA, CRP, ANA Profile, C3 Complement, C4 Complement."
            }
        ],
        "faqs": [
            {
                "q": "1. What bone disorders can be diagnosed at QXL Diagnostics?",
                "a": "We diagnose a wide range of bone disorders, including arthritis, osteoporosis, and other conditions affecting bone metabolism and health."
            },
            {
                "q": "2. How should I prepare for a bone disorder diagnostic test?",
                "a": "Preparation varies by test. You may need to fast or avoid certain medications before tests. Detailed instructions will be provided before your appointment."
            },
            {
                "q": "3. What are the risks associated with diagnostic procedures?",
                "a": "Most procedures are safe but may involve minor risks such as discomfort or infection. Our team will explain any risks beforehand and take steps to minimize them."
            }
        ]
    }
}

template_code = """\"use client\";
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

export default function PAGE_CLASS_NAME() {
  const IconComponent = iconMap["ICON_NAME"] || Activity;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 HERO_BG_STYLE bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">PAGE_TITLE</h1>
            <p className="text-sky-100 text-lg md:text-xl mb-8 leading-relaxed">
              PAGE_DESCRIPTION
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
          <span className="text-black font-medium">PAGE_TITLE</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro text */}
            <section className="prose prose-blue max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                PAGE_INTRO
              </p>
            </section>

            {/* Test Profiles */}
            <section id="test-profiles">
              <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <IconComponent className="w-8 h-8 text-sky-600" /> 
                PAGE_TITLE Test Profiles
              </h2>
              <div className="grid gap-6">
                
                TEST_PROFILE_CARDS_PLACEHOLDER
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
                FAQ_CARDS_PLACEHOLDER
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
"""

base_dir = "/Users/afi/Downloads/Qxldiagnostics/qxl-platform/src/app/specialities"

for slug, data in specialities.items():
    target_dir = os.path.join(base_dir, slug)
    os.makedirs(target_dir, exist_ok=True)
    
    # Build test profile cards
    profile_cards = []
    for prof in data["profiles"]:
        card = f"""                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">{prof["name"]}</h3>
                      <p className="text-gray-600 text-sm mb-4">{prof["tests"]}</p>
                    </div>
                    <Link href="/book" className="bg-sky-600 text-white font-medium px-4 py-2 rounded-lg whitespace-nowrap hover:bg-sky-700 transition-colors">
                      Request Latest Price
                    </Link>
                  </div>
                </div>"""
        profile_cards.append(card)
    profile_cards_str = "\n\n".join(profile_cards)
    
    # Build FAQ cards
    faq_cards = []
    for faq in data["faqs"]:
        card = f"""                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">{faq["q"]}</h4>
                  <p className="text-gray-600 text-sm">{faq["a"]}</p>
                </div>"""
        faq_cards.append(card)
    faq_cards_str = "\n".join(faq_cards)
    
    # Create final content
    content = template_code
    content = content.replace("PAGE_CLASS_NAME", data["title"].replace(" ", "").replace("'", "") + "Page")
    content = content.replace("ICON_NAME", data["icon"])
    content = content.replace("HERO_BG_STYLE", "bg-[ur" + "l('" + data["bg_img"] + "')]")
    content = content.replace("PAGE_TITLE", data["title"])
    content = content.replace("PAGE_DESCRIPTION", data["description"])
    content = content.replace("PAGE_INTRO", data["intro"])
    content = content.replace("TEST_PROFILE_CARDS_PLACEHOLDER", profile_cards_str)
    content = content.replace("FAQ_CARDS_PLACEHOLDER", faq_cards_str)
    
    # Write to file
    with open(os.path.join(target_dir, "page.tsx"), "w") as f:
        f.write(content)

print("Successfully generated rich, sky blue speciality pages.")
