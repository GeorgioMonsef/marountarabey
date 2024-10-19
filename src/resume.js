import React from 'react';

const Resume = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 id="marounresume" className="text-2xl font-bold text-center mb-4">Maroun Tarabey</h1>

            <h2 className="text-xl font-semibold mt-6">Summary</h2>
            <p>I am a secondary student desiring to create a longstanding impact in modern healthcare and receive lifelong, valuable, and extensive experience within the domain. With a background in first aid paramedicine acquired from my hours of volunteering in the Ottawa Medvent Scout group, my scientific background, and my strong work ethic, I am a strong candidate for any supportive role within medical workplaces.</p>

            <h2 className="text-xl font-semibold mt-6">Work/Volunteer Experience</h2>
            <div className="mt-2">
                <h3 className="font-semibold">University of Ottawa, Roger Guindon Hall, Ottawa, ON</h3>
                <p className="italic">Undergraduate Researcher | July 2024 - Present</p>
                <ul className="list-disc list-inside mt-1">
                    <li>Worked with a PhD candidate on his research project, performing immunohistochemistry staining experiments and gathering information for experiment planning.</li>
                    <li>Performed genotyping experiments utilizing PCR technology and DNA extraction from freshly excised tissue.</li>
                    <li>Preparing primers for qPCR experiments from online resources.</li>
                    <li>Data collection and analysis - spatial transcriptomics, scRNA-seq, bulk RNA-seq, GSEA, hazard ratio graphs.</li>
                    <li>Laboratory maintenance (preparing reagents, calculating dilutions, sterilization, inventory management).</li>
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold">Ottawa Medical Venturers, Ottawa, ON</h3>
                <p className="italic">Medical Venturer | August 2023 - Present</p>
                <ul className="list-disc list-inside mt-1">
                    <li>Responsible for first-line paramedical care administered to help treat patients before and as paramedics arrive.</li>
                    <li>Administering first aid at city events (dressings, treatment for shock, splints, oxygen management therapy).</li>
                    <li>Acquiring vital signs of patients (HR, RR, pupil dilation, skin condition, SpO2, body temperature).</li>
                    <li>Providing shelter if needed to shield individuals from harsh environmental conditions.</li>
                    <li>Participating in city events as a public relations officer, and offering Paramedic HQ tours to the youth.</li>
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold">Pro Physio & Sport Medicine Centres, Ottawa, ON</h3>
                <p className="italic">CO-OP Student (Assistant Physiotherapist) | June 2022 - July 2022</p>
                <ul className="list-disc list-inside mt-1">
                    <li>Socializing with the patients to form interpersonal relationships.</li>
                    <li>Treating patients with therapeutic ultrasounds and heat pads, and removing cups used for suction cup therapy.</li>
                    <li>Cleaning the clinic by sweeping, mopping, and disinfecting equipment and beds frequently.</li>
                    <li>Supporting the physiotherapists by aiding them in rehabilitation programs, like for neurodegenerative patients.</li>
                </ul>
            </div>

            <h2 className="text-xl font-semibold mt-6">Education</h2>
            <div className="mt-2">
                <p className="font-semibold">École Secondaire Catholique Pierre-Savard, Ottawa, Ontario</p>
                <p className="italic">SHSM in Health and Wellness | 2018 - 2024</p>
                <p className="font-semibold">University of Ottawa</p>
                <p className="italic">BSc in Biochemistry | 2024 - 2028</p>
            </div>

            <h2 className="text-xl font-semibold mt-6">Skills and Certifications</h2>
            <ul className="list-disc list-inside mt-1">
                <li>Trilingual; fluent in French and English; able to understand and speak Arabic at a beginner’s level.</li>
                <li>Traumatic and standard patient bedside transport, psychological first aid, and vital sign retrieval.</li>
                <li>Knowledgeable on the research process, and has experience writing research proposals with proper formatting (OSIC).</li>
                <li>Immunohistochemistry, DNA extraction, PCR, spatial transcriptomics, and scRNA-seq data analysis.</li>
                <li>Genotyping, PCR/qPCR primer design.</li>
                <li>Certified in BLS, CPR level C and AED, and Oxygen Therapy and Airway Management.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Achievements</h2>
            <ul className="list-disc list-inside mt-1">
                <li>Winner (alongside partner) of the research-based 2023 Ottawa Science Innovation Challenge.</li>
                <li>Placed in the top 10% in Canada and top 25% in the world for the 2023 Avogadro Exam.</li>
                <li>2024 uOttawa Undergraduate Research Scholarship recipient - Benoit Lab.</li>
                <li>First place in 3,2,1 Santé! 2024 medical competition at Collège La Cité.</li>
                <li>Acquired a position in the Ottawa MedVent group - volunteers with the OPS.</li>
                <li>National Biology Scholar - 37th-39th (tied) out of 2055 participants.</li>
                <li>Cumulative grade average of 98.4% (2023-2024).</li>
            </ul>
        </div>
    );
};

export default Resume;
