import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 p-6">
            {/* About Me Section */}
            <div id="aboutme" className="flex-1 flex flex-col items-center justify-start max-w-lg p-6 w-full">
                <h1 className="text-3xl font-bold text-sky-600 mb-6">About Me</h1>
                <p className="text-gray-700 leading-relaxed mb-4 text-center">
                    Hello! I’m <strong>Maroun Tarabey</strong>, a passionate biochemistry student dedicated to exploring the intricacies of life at the molecular level. Currently pursuing my studies, I am fascinated by the biochemical processes that underpin health, disease, and the development of new therapeutic strategies.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-center">
                    Throughout my academic journey, I have honed my skills in laboratory techniques and research methodologies, equipping myself with the tools necessary to contribute to innovative scientific discoveries. My interests span various fields within biochemistry, including metabolic pathways, enzyme kinetics, and molecular biology.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-center">
                    I thrive on collaborative projects and am always eager to learn from my peers and mentors. My goal is to leverage my education and experiences to make a meaningful impact in the scientific community and beyond.
                </p>


            </div>

            {/* Experience Section */}
            <div id="experience" className="flex-1 flex flex-col items-center justify-start w-full p-6">
                <h2 className="text-3xl font-semibold text-sky-600 mb-6">Experience</h2>

                <div className="bg-white p-4 rounded-lg shadow-md mb-4 transition transform hover:scale-105 text-center">
                    <div className="flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faBriefcase} className="text-sky-500 mr-2" size="2x" />
                        <h3 className="text-xl font-bold text-gray-800">Undergraduate Researcher at University of Ottawa</h3>
                    </div>
                    <p className="text-gray-700">
                        July 2024 - Present<br />
                        I worked with a PhD candidate on his research project, performing immunohistochemistry staining experiments and gathering information for experiment planning.
                        Performed genotyping experiments utilizing PCR technology and DNA extraction from freshly excised tissue.
                        Preparing primers for qPCR experiments from online resources.
                        Data collection and analysis - spatial transcriptomics, scRNA-seq, bulk RNA-seq, GSEA, hazard ratio graphs.
                        Laboratory maintenance (preparing reagents, calculating dilutions, sterilization, inventory management).
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mb-4 transition transform hover:scale-105 text-center">
                    <div className="flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faHandsHelping} className="text-sky-500 mr-2" size="2x" />
                        <h3 className="text-xl font-bold text-gray-800">Medical Venturer at Ottawa Medical Venturers</h3>
                    </div>
                    <p className="text-gray-700">
                        August 2023 - Present<br />
                        Responsible for first-line paramedical care administered to help treat patients before and as paramedics arrive.
                        Administering first aid at city events (dressings, treatment for shock, splints, oxygen management).
                        Acquiring vital signs of patients (HR, RR, pupil dilation, skin condition, SpO2, body temperature).
                        Providing shelter if needed to shield individuals from harsh environmental conditions.
                        Participating in city events as a public relations officer, and offering Paramedic HQ tours to the youth.
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mb-4 transition transform hover:scale-105 text-center">
                    <div className="flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faBriefcase} className="text-sky-500 mr-2" size="2x" />
                        <h3 className="text-xl font-bold text-gray-800">CO-OP Student (Assistant Physiotherapist) at Pro Physio & Sport Medicine Centres Cedarview</h3>
                    </div>
                    <p className="text-gray-700">
                        June 2022 - July 2022<br />
                        Socializing with the patients to form interpersonal relationships.
                        Treating patients with therapeutic ultrasounds and heat pads, and removing cups used for suction cup therapy.
                        Cleaning the clinic by sweeping, mopping, and disinfecting equipment and beds frequently.
                        Supporting the physiotherapists by aiding them in rehabilitation programs, like for neurodegenerative patients.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
