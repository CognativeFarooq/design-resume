import React from "react";

const ResumePreview = ({ currentState, updateState }) => {
  if (!currentState) {
    return <div>Error: currentState is undefined</div>;
  }

  return (
    <div className="mt-4">
      <label className="block mb-2">Text Editor</label>
      <textarea
        className="w-full border rounded"
        style={{
          fontSize: currentState.fontSize || "16px",
          fontWeight: currentState.fontWeight || "normal",
          color: currentState.color || "black",
          margin: `${currentState.margin || 0}px`,
          padding: `${currentState.padding || 0}px`,
        }}
        value={currentState.text || ""}
        onChange={(e) => updateState({ ...currentState, text: e.target.value })}
      />
    </div>
  );
};

export default ResumePreview;
