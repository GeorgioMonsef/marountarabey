import React from 'react';
import personImage from './image.jpg'; // Assuming the image is stored in the same directory
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Greeting = () => {
    return (
        <div className="flex min-h-screen bg-blue-100">
            <div className="justify-center w-full mt-20">
                <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
                    <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mt-2">
                        <img src={personImage} alt="Person" className="w-full h-full object-cover" />
                    </div>
                    {/* Name and Title */}
                    <h2 className="text-xl font-bold text-center mb-2">Maroun Tarabey</h2>
                    <p className="text-sm text-gray-500 text-center mb-6">First Year Biochemistry Student at the
                        University of Ottawa</p>

                    {/* Buttons for CV and Contact Info */}
                    <div className="flex justify-center space-x-4 mb-6">
                        <a href="/path/to/cv.pdf" download
                           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                            Download CV
                        </a>
                        <a href="mailto:your-email@example.com"
                           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                            Contact Info
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-4">
                        {/* Gmail */}
                        <a href="mailto:your-email@example.com" className="text-gray-500 hover:text-gray-700">
                            <i className="fas fa-envelope"></i>
                        </a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer"
                           className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-facebook"></i>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
                           className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"
                           className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="flex justify-between mt-6">
                    {/* Experience Bubble */}
                    <div className="bg-white rounded-3xl p-4 w-1/2 mr-2 shadow-md">
                        <h3 className="font-semibold text-lg">Experience</h3>
                        <p className="text-sm text-gray-600 text-left">
                            <strong>Undergraduate Researcher</strong><br/>
                            University of Ottawa, Roger Guindon Hall, Ottawa, ON<br/>
                            July 2024 - Present<br/>
                            - Collaborated with a PhD candidate on immunohistochemistry staining and experiment
                            planning.<br/>
                            - Conducted genotyping using PCR technology and DNA extraction.<br/>
                            - Prepared primers for qPCR and performed data collection/analysis for various RNA-seq
                            techniques.<br/>
                            - Managed laboratory tasks, including reagent preparation and inventory
                            management.<br/><br/>

                            <strong>Medical Venturer</strong><br/>
                            Ottawa Medical Venturers, Ottawa, ON<br/>
                            August 2023 - Present<br/>
                            - Provided first-line paramedical care and first aid at city events.<br/>
                            - Monitored vital signs and assisted individuals in emergency situations.<br/>
                            - Engaged in public relations and offered tours of Paramedic HQ to youth.<br/><br/>

                            <strong>CO-OP Student (Assistant Physiotherapist)</strong><br/>
                            Pro Physio & Sport Medicine Centres, Ottawa, ON<br/>
                            June 2022 - July 2022<br/>
                            - Developed rapport with patients and assisted in therapeutic treatments.<br/>
                            - Maintained clinic cleanliness and supported physiotherapists in rehabilitation programs.
                        </p>
                    </div>

                    {/* Other Education Bubble */}
                    <div className="bg-white rounded-3xl p-4 w-1/2 ml-2 shadow-md flex flex-col items-start">
                        <h3 className="font-semibold text-lg text-center">Education</h3>
                        <p className="text-sm text-gray-600 text-left">
                            <strong>University of Ottawa</strong><br/>
                            September 2024 - Present<br/>
                            - Honours bachelor's in biochemistry<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greeting;
