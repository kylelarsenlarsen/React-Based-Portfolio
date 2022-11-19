import React from "react";
import './resumeStyle.css';
import resume from '../images/Resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    return(
        <div className='res'>
           <Document
           file={resume}
           onLoadError={console.error}
           style={{width: '100vw', height: 'auto'}}>
            <Page pageIndex={0}/>
           </Document>
        </div>
    )
}

export default Resume;