"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import NewSection from '../NewSection/NewSection'

const ResumePreview = ({ currentState, updateState }) => {
  const { sections } = useSelector((state) => state.resume);

  if (!currentState) {
    return <div>Error: currentState is undefined</div>;
  }

  const renderSection = (section) => {
    if (section.component === 'NewSection') {
      return <NewSection key={section.id} currentState={currentState} updateState={updateState} />;
      // Dynamically render NewSection component
    }
    return null;
  };

  return (
    <div className="border-2 border-black p-5">
      <textarea
        className="w-full text-center border rounded"
        style={{
          fontSize: currentState.fontSize || "16px",
          fontFamily: currentState.fontFamily || "Arial",
          fontWeight: currentState.fontWeight || "normal",
          color: currentState.color || "black",
          margin: `${currentState.margin || 0}px`,
          padding: `${currentState.padding || 0}px`,
        }}
        value={currentState.text || ""}
        onChange={(e) => updateState({ ...currentState, text: e.target.value })}
      />
      {sections.length === 0 ? (
        ""
      ) : (
        sections.map(renderSection)
      )}
    </div>
  );
};

export default ResumePreview;
