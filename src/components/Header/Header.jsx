import React from 'react'
import { jsPDF } from "jspdf";

const Header = ({ currentState }) => {
    // Function to generate and download PDF
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(parseInt(currentState.fontSize));
        doc.setFont(currentState.fontFamily);
        doc.setTextColor(currentState.color);
        doc.text(currentState.text, 10, 20);
        doc.save("resume.pdf");
    };

    return (
        <>
            <h1 className="text-3xl font-bold my-4">Resume Builder</h1>
            <button type="button" onClick={downloadPDF} className="mt-4 bg-green-500 text-white py-2 px-4 cursor-pointer">
                Download PDF
            </button>
        </>
    );
};

export default Header;
