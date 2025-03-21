"use client";

import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    fontFamily: "Arial",
    fontSize: 16,
    margin: 10,
    padding: 10,
    color: "#000000",
    sections: ["Personal Info", "Experience", "Education"],
  },
  reducers: {
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setMargin: (state, action) => {
      state.margin = action.payload;
    },
    setPadding: (state, action) => {
      state.padding = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    addSection: (state, action) => {
      state.sections.push(action.payload);
    },
  },
});

export const {
  setFontFamily,
  setFontSize,
  setMargin,
  setPadding,
  setColor,
  addSection,
} = resumeSlice.actions;

export const selectResume = (state) => state.resume;

export default resumeSlice.reducer;
