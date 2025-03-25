"use client";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import TextEditor from "@/components/TextEditor/TextEditor";
import ResumePreview from "@/components/ResumePreview/ResumePreview";

export default function Page() {
  const [currentState, setCurrentState] = useState({
    fontSize: "16px",
    fontWeight: "normal",
    color: "black",
    text: "Hello, world!",
    fontFamily: "Arial",
    margin: 0,
    padding: 0,
  });

  const [history, setHistory] = useState([currentState]);
  const [future, setFuture] = useState([]);

  const updateState = (newState) => {
    if (JSON.stringify(currentState) !== JSON.stringify(newState)) {
      setHistory([...history, currentState]);
      setCurrentState(newState);
      setFuture([]);
    }
  };

  const handleUndo = () => {
    if (history.length > 1) {
      const lastState = history[history.length - 1];
      setCurrentState(lastState);
      setFuture([currentState, ...future]);
      setHistory(history.slice(0, history.length - 1));
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      const nextState = future[0];
      setCurrentState(nextState);
      setHistory([...history, nextState]);
      setFuture(future.slice(1));
    }
  };

  return (
    <>
      <div className="text-center px-5">
        <Header currentState={currentState} />
        <div className="flex items-center justify-between">
          <TextEditor
            currentState={currentState}
            updateState={updateState}
            handleUndo={handleUndo}
            handleRedo={handleRedo}
            history={history}
            future={future}
          />
          <ResumePreview
            currentState={currentState}
            updateState={updateState}
          />
        </div>
      </div>
    </>
  );
}
