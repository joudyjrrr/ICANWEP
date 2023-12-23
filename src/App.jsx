import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Pages/Header";
import Landing from "./Pages/Landing";
import Services from "./Pages/Services";
import Features from "./Pages/Features";
function App() {
  return (
    <>
      <div className="home">
        <Header />
        <Landing />
      </div>

      <Services />
      <Features />
    </>
  );
}

export default App;
