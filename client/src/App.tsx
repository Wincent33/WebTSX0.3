import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        {/* <Route path="/search" element={<SearchPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/simulasi-kpr" element={<KPRPage />} />
        <Route path="/dashboard/*" element={<DashBoard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
