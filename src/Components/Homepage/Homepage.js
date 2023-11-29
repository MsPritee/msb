

import React from 'react';
import StickyHeader from '../StickyHeader';
import './Homepage.css';
import Container1 from './Container1';
import Banner from './Banner';


export default function Homepage() {
  return (
    <div>

      <Banner />
      <h2 className='my-12 text-center font-bold text-3xl'>
        Download PDF
      </h2>
      <Container1 />
      
    </div>
  )
}
