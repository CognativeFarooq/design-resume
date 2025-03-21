import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

// Forward the ref to the root element of ResumePreview
const ResumePreview = forwardRef((props, ref) => {
  const { fontFamily, fontSize, margin, padding, color, sections } =
    useSelector((state) => state.resume);

  const style = {
    fontFamily,
    fontSize: `${fontSize}px`,
    margin: `${margin}px`,
    padding: `${padding}px`,
    color,
  };

  return (
    <div ref={ref} className="border p-4" style={style}>
      <h1 className="text-2xl">Resume Preview</h1>
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-xl">{section}</h2>
          <p>Details for {section} will go here.</p>
        </div>
      ))}
    </div>
  );
});

export default ResumePreview;
