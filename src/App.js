import React from 'react';
import './App.css'; // You can add custom global styles here if needed
import Portfolio from './top'; // Import the Greeting component
import Resume from './resume'
import About from './contact'
import Greeting from './greeting'
import Contact from './email'

function App() {
  return (
      <div className="App">
        {/* Greeting Component */}
          <Portfolio />
          <About />
          <Resume />
          <Contact />




      </div>
  );
}

export default App;
