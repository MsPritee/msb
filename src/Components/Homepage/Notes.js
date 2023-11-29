
import React from 'react';
import PdfFile from './pdf/4.pdf';


export default function Notes() {

  const pdfUrl = PdfFile;

  console.log('PDF URL received:', pdfUrl);

  return (
    <div className='h-screen'>
 
      <iframe src={pdfUrl} width="100%" height="100%" title="PDF Viewer" />
       
    </div>
  );
}



