import os

base_dir = "/Users/afi/Downloads/Qxldiagnostics/qxl-platform/src/app/specialities"

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file == "page.tsx":
            path = os.path.join(root, file)
            with open(path, "r") as f:
                content = f.read()
            
            # Fix duplicate import
            content = content.replace(
                "import { ChevronRight, CheckCircle, Activity, Stethoscope, Microscope, Activity } from 'lucide-react';",
                "import { ChevronRight, CheckCircle, Activity, Stethoscope, Microscope } from 'lucide-react';"
            )
            
            # Fix unescaped quote in women's health
            if "womens-health" in path:
                # The python script literally put 'Women's Health' into the array which breaks JSX syntax
                # Let's fix the array definition globally
                old_arr = "['Neurology', 'Hematology', 'Cardiology', 'Urology', 'Endocrinology', 'Oncology', 'Infectious Diseases', 'Women's Health', 'Gastroenterology', 'Bone Disorders']"
                new_arr = '["Neurology", "Hematology", "Cardiology", "Urology", "Endocrinology", "Oncology", "Infectious Diseases", "Women\'s Health", "Gastroenterology", "Bone Disorders"]'
                content = content.replace(old_arr, new_arr)
            
            # Since the array might already be messed up with mixed quotes from the replace:
            content = content.replace("'Women's Health'", "\"Women's Health\"")
            
            with open(path, "w") as f:
                f.write(content)

print("Fixed syntax errors.")
