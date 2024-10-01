import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileUpload from "./containers/FileUpload";
import LandingPage from "./containers/LandingPage/LandingPage";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<FileUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
