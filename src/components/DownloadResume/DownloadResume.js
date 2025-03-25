"use client";
import React, { useState } from "react";
import { jsPDF } from "jspdf";
import ResumePreview from "../ResumePreview/ResumePreview";

const DownloadResume = () => {
  const ref = React.createRef();

  const [currentState, setCurrentState] = useState({
    fontSize: "16px",
    fontWeight: "normal",
    color: "black",
    text: "Hello, world!",
    fontFamily: "Arial",
    margin: 0,
    padding: 0,
  });

  // Define the updateState function
  const updateState = (newState) => {
    setCurrentState(newState);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.html(ref.current, {
      callback: function (doc) {
        doc.save("resume.pdf");
      },
      margin: [10, 10, 10, 10],
    });
  };

  return (
    <div>
      <div ref={ref}>
        {/* Pass updateState function here */}
        <ResumePreview currentState={currentState} updateState={updateState} />
      </div>

      <button
        type="button"
        className="mt-4 bg-green-500 text-white py-2 px-4 cursor-pointer"
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadResume;
