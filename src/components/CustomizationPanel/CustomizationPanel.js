"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  setFontFamily,
  setFontSize,
  setMargin,
  setPadding,
  setColor,
  addSection,
} from "../../redux/resumeSlice";

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

const CustomizationPanel = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);

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
    <div className={`p-4 space-y-4 ${fontStyles[resume.fontFamily] || ""}`}>
      <h3 className="text-lg font-semibold">Customize Your Resume</h3>

      <div>
        <label className="block">Font Family</label>
        <select
          value={resume.fontFamily}
          onChange={(e) => dispatch(setFontFamily(e.target.value))}
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

      <div>
        <label className="block">Font Size</label>
        <input
          type="number"
          value={resume.fontSize}
          onChange={(e) => dispatch(setFontSize(e.target.value))}
          className="p-2 border"
        />
      </div>

      <div>
        <label className="block">Margin</label>
        <input
          type="number"
          value={resume.margin}
          onChange={(e) => dispatch(setMargin(e.target.value))}
          className="p-2 border"
        />
      </div>

      <div>
        <label className="block">Padding</label>
        <input
          type="number"
          value={resume.padding}
          onChange={(e) => dispatch(setPadding(e.target.value))}
          className="p-2 border"
        />
      </div>

      <div>
        <label className="block">Color</label>
        <input
          type="color"
          value={resume.color}
          onChange={(e) => dispatch(setColor(e.target.value))}
          className="p-2 border"
        />
      </div>

      <button
        onClick={() => dispatch(addSection("New Section"))}
        className="mt-4 px-4 py-2 bg-blue-500 text-white"
      >
        Add Section
      </button>
    </div>
  );
};

export default CustomizationPanel;
