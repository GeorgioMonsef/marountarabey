import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="flex flex-col items-center justify-center bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-sky-600 mb-4">Contact Me</h1>
            <p className="text-gray-700 mb-6 text-center">
                Have questions or collaboration ideas? Reach out!
            </p>
            <a
                href="mailto:marountarabey20@gmail.com"
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
            >
                Email Me
            </a>
        </div>
    );
};

export default Contact;
