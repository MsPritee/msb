

import React from 'react';
import './Container1.css';

import items from './Items';
import { Link } from 'react-router-dom';


export default function Container1() {




  return (
    <div className='card-container flex mx-14 my-6 flex-wrap '>
      {items.map((item, index) => (
        <div key={index} className='card   '>
          <div className='inner-card my-8'>
            <div className='logo'>
              <img className='logo-img' src={item.imageUrl} alt={`Image ${index + 1}`} onError={(e) => console.error('Image failed to load:', e)} />
            </div>
            <div className='contain'>
              <h3>{item.title}</h3>
              <p></p>
            </div>
            <div>
              <p>{items.description}</p>
            </div>
            <div className='btn-box items-center justify-center mb-5'>
              <div className='yt-btn btn '>
                <Link to='/notes' >ClickMe</Link>
              </div>
            </div>
          </div>
        </div>
      ))}


    </div >
  )
}



