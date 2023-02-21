import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Comics } from "./pages/Comics";

export function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/inicio"} />} />
          <Route path="/" element={<Navigate to={"/inicio"} />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/characters" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
