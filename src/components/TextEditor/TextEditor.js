import React, { useState } from "react";
import {
  Rubik,
  Montserrat,
  Lato,
  Raleway,
  Bitter,
  Chivo,
  Oswald,
  Volkhov,
} from "next/font/google";
import ResumePreview from "../ResumePreview/ResumePreview";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
const bitter = Bitter({ subsets: ["latin"], weight: ["400", "700"] });
const chivo = Chivo({ subsets: ["latin"], weight: ["400", "700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

const TextEditor = () => {
  const [currentState, setCurrentState] = useState({
    fontSize: "16px",
    fontWeight: "normal",
    color: "white",
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

  const fontStyles = {
    Rubik: rubik.className,
    Montserrat: montserrat.className,
    Lato: lato.className,
    Raleway: raleway.className,
    Bitter: bitter.className,
    Chivo: chivo.className,
    Oswald: oswald.className,
    Volkhov: volkhov.className,
  };

  return (
    <>
      <div className={`p-4 ${fontStyles[currentState.fontFamily] || ""}`}>
        <div>
          <button
            className="bg-gray-300 px-4 py-2 rounded mr-2"
            onClick={handleUndo}
            disabled={history.length <= 1}
          >
            Undo
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={handleRedo}
            disabled={future.length === 0}
          >
            Redo
          </button>
        </div>

        <div className="mt-4">
          <div className="mb-4">
            <label>Font Size:</label>
            <select
              className="ml-2 p-2 border rounded"
              value={currentState.fontSize}
              onChange={(e) =>
                updateState({ ...currentState, fontSize: e.target.value })
              }
            >
              <option value="16px">16px</option>
              <option value="20px">20px</option>
              <option value="24px">24px</option>
            </select>
          </div>

          <div className="mb-4">
            <label>Font Weight:</label>
            <select
              className="ml-2 p-2 border rounded"
              value={currentState.fontWeight}
              onChange={(e) =>
                updateState({ ...currentState, fontWeight: e.target.value })
              }
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
            </select>
          </div>

          <div>
            <label className="block">Font Family</label>
            <select
              value={currentState.fontFamily}
              onChange={(e) =>
                updateState({ ...currentState, fontFamily: e.target.value })
              }
              className="p-2 border"
            >
              <option value="Arial">Arial</option>
              <option value="Rubik">Rubik</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Lato">Lato</option>
              <option value="Raleway">Raleway</option>
              <option value="Bitter">Bitter</option>
              <option value="Chivo">Chivo</option>
              <option value="Verdana">Verdana</option>
              <option value="Oswald">Oswald</option>
              <option value="Volkhov">Volkhov</option>
              <option value="Times New Roman">Times New Roman</option>
            </select>
          </div>

          <div className="mb-4">
            <label>Text Color:</label>
            <input
              type="color"
              className="ml-2"
              value={currentState.color}
              onChange={(e) =>
                updateState({ ...currentState, color: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block">Margin</label>
            <input
              type="number"
              value={currentState.margin}
              onChange={(e) =>
                updateState({ ...currentState, margin: e.target.value })
              }
              className="p-2 border"
            />
          </div>

          <div>
            <label className="block">Padding</label>
            <input
              type="number"
              value={currentState.padding}
              onChange={(e) =>
                updateState({ ...currentState, padding: e.target.value })
              }
              className="p-2 border"
            />
          </div>
        </div>
      </div>
      <ResumePreview currentState={currentState} updateState={updateState} />
    </>
  );
};

export default TextEditor;
