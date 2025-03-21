"use client";
import React from "react";
import { jsPDF } from "jspdf";
import ResumePreview from "../ResumePreview/ResumePreview";

const DownloadResume = () => {
  const ref = React.createRef();

  // Function to generate the PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.html(ref.current, {
      callback: function (doc) {
        // Download the generated PDF as 'resume.pdf'
        doc.save("resume.pdf");
      },
      margin: [10, 10, 10, 10],
    });
  };

  return (
    <div>
      {/* Pass the ref to the ResumePreview component */}
      <div ref={ref}>
        <ResumePreview />
      </div>

      {/* Button to trigger PDF download */}
      <button
        type="button"
        className="mt-4 bg-green-500 text-white py-2 px-4 cursor-pointer"
        onClick={generatePDF} // Call the function when the button is clicked
      >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadResume;
