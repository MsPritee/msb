import React, { useState } from 'react';
import './StickyHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function StickyHeader() {

    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        setSearchTerm('');
        
    };

    const handleSearch = () => {
        const elements = document.querySelectorAll('*'); // Select all elements

        elements.forEach(element => {
            const text = element.innerText || element.textContent;

            if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
                element.style.backgroundColor = 'yellow'; // Highlight matching elements
            }
        });
    };

    return (
        <div>
            <header className='header flex justify-between px-5 m-0 h-20 items-center'>
                <div className='left-side-header'>
                    <h1 className='header-title'>
                        MSB Notes
                    </h1>
                </div>
                <div className='right-side-header flex items-center'>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className={`menu mx-3  `}>
                        <ul className={`menu-ul flex  justify-between ${showMenu ? 'show' : ''} `}>
                            <li>
                                <Link to="/" onClick={toggleMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to='/about' onClick={toggleMenu}>About</Link>
                            </li>
                            <li>
                                <Link to='/notes' onClick={toggleMenu}>Notes</Link>
                            </li>
                            <li>
                                <Link to='/contact' onClick={toggleMenu}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                   
                    <button className='search-btn mx-3 text-blue-600' onClick={toggleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className='login-btn mx-3'>
                        Login/Signup
                    </button>
                </div>
            
            </header>
            {showSearch && (
                <div className="search-input z-12 fill-gray-400 border">
                    <button className="search-submit" onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="close-btn" onClick={() => setShowSearch(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                   
                    <input type="text" placeholder="Search..." value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    
                </div>
            )}
        </div>
    )
}
