
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notes from './Components/Homepage/Notes';
import Contact from './Components/Contact';
import StickyHeader from './Components/StickyHeader';
import Footer from './Components/Footer';
import About from './Components/About';
import Homepage from './Components/Homepage/Homepage';
import Container1 from './Components/Homepage/Container1';
import { useState } from 'react';

function App() {

  const [selectedPdf, setSelectedPdf] = useState(null);


  return (      
    <Router>
      <div className="App flex flex-col">
        <div className="">
          <StickyHeader />
        </div>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/notes' element={<Notes/>} />
            
          </Routes>
        </div>
        <div className='sm:bottom-0  bottom-0'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
