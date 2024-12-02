import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Jogadores from "./components/Jogadores";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="jogadores" element={<Jogadores />} />
      <Route path="sobre" element={<About />} />
    </Routes>
  </BrowserRouter>
);
