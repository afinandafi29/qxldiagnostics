import os

specialities = [
    ("Neurology", "neurology"),
    ("Hematology", "hematology"),
    ("Cardiology", "cardiology"),
    ("Urology", "urology"),
    ("Endocrinology", "endocrinology"),
    ("Oncology", "oncology"),
    ("Infectious Diseases", "infectious-diseases"),
    ("Women's Health", "womens-health"),
    ("Gastroenterology", "gastroenterology")
]

base_dir = "/Users/afi/Downloads/Qxldiagnostics/qxl-platform/src/app/specialities"
template_file = os.path.join(base_dir, "bone-disorders/page.tsx")

with open(template_file, "r") as f:
    template = f.read()

for title, slug in specialities:
    target_dir = os.path.join(base_dir, slug)
    os.makedirs(target_dir, exist_ok=True)
    
    # Replace references
    content = template.replace("Bone Disorders", title)
    content = content.replace("BoneDisordersPage", title.replace(" ", "").replace("'", "") + "Page")
    content = content.replace("Bone", "Activity") # Replace the bone icon with a generic activity icon for now
    
    # Write to file
    with open(os.path.join(target_dir, "page.tsx"), "w") as f:
        f.write(content)
        
print("Successfully generated all speciality pages.")
