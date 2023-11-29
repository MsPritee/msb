import Pdf1 from './pdf/1.pdf';
import Pdf2 from './pdf/2.pdf';
import Pdf3 from './pdf/3.pdf';
import Pdf4 from './pdf/4.pdf';
import logo1 from './Images/yt-logo.png'
import logo2 from './Images/coding.png'
import logo3 from './Images/course-logo.png'

const items = [
    {
        title: 'Effective Learning Videos',
        description: 'Description download notes',
        imageUrl: logo1,
        buttonUrl: './notes',
        btnValue: 'Click Me',
        // pdfUrl: Pdf1
        pdfUrl: './pdf/1.pdf'
    },
    {
        title: 'Title 2',
        description: 'Description for item 2',
        imageUrl: logo2,
        buttonUrl: './notes',
        // pdfUrl: Pdf2
        pdfUrl: './pdf/2.pdf'

    },

    {
        title: 'Title 2',
        description: 'Description for item 2',
        imageUrl: logo3,
        buttonUrl: './notes',
        pdfUrl: Pdf3

    },

    {
        title: 'Title 2',
        description: 'Description for item 2',
        imageUrl: logo2,
        buttonUrl: './notes',
        pdfUrl: Pdf4

    },

    {
        title: 'Title 2',
        description: 'Description for item 2',
        imageUrl: logo2,
        buttonUrl: './notes',
        pdfUrl: Pdf1

    },
];

export default items;