import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./sections/Home";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main className="mx-auto max-w-7xl px-4 py-12">
        {activePage === "home" && <Home onNavigate={setActivePage} />}
        {activePage === "services" && <Services />}
        {activePage === "about" && <About />}
        {activePage === "contact" && <Contact />}
      </main>
    </div>
  );
}
