import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for social icons
import profileImage from './image.jpg'; // Replace with actual profile image
import imagenobg from './imagenobg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Replace with actual main image

const Portfolio = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Maroun Tarabey - Scientific Resume.pdf'; // path in the public folder
        link.setAttribute('download', 'Maroun Tarabey - Scientific Resume.pdf'); // sets the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="w-full md:w-1/4 bg-gray-100 flex flex-col items-center p-6 shadow-lg">
                {/* Profile Image */}

                {/* Name and Job Title */}
                <h2 className="text-lg md:text-xl font-semibold">Maroun Tarabey</h2>
                <p className="text-sm text-red-500">Biochemistry Student</p>
                <div className="flex justify-center space-x-4 p-6 bg-gray-100">

                    <a href="https://www.instagram.com/tmaroun11_/" target="_blank" rel="noopener noreferrer"
                       className="text-sky-500 hover:text-sky-700">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="mailto:marountarabey20@gmail.com" className="text-sky-500 hover:text-sky-700">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/maroun-tarabey-55a88b2a7/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer"
                       className="text-sky-500 hover:text-sky-700">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>

                {/* Navigation */}
                {/* Navigation */}
                <nav className="mt-8 w-full">
                    <ul className="flex flex-col items-center space-y-4 text-red-800">
                        {['About', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={
                                        item === 'About' ? '#aboutme' :
                                            item === 'Experience' ? '#experience' :
                                                item === 'Portfolio' ? '#marounresume' :
                                                    item === 'Contact' ? '#contact' : '#'
                                    }
                                    className="hover:text-black hover:underline"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>


                {/* Footer */}
                <footer className="mt-auto text-sm text-gray-400 text-center">
                    <p>&copy; 2024 All Rights Reserved.</p>
                    <span className="text-gray-400">Powered By </span>
                    <span
                        onClick={() => window.open('https://levantlabs.ca', '_blank')} // Opens the link in a new tab
                        className="cursor-pointer text-blue-500 hover:underline"
                    >
        Levant Labs
    </span></footer>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 relative">
                {/* Text Section */}
                <div className="absolute top-0 right-0 flex flex-col space-y-4 p-4 md:p-12 z-10">

                    <div className="flex space-x-2 md:space-x-4">


                    </div>
                </div>

                {/* Main Image covering the screen */}
                <img src={imagenobg} alt="Designer" className="w-full h-screen object-cover"/>

                {/* Resume Section */}
            </div>
        </div>
    );
};

export default Portfolio;
