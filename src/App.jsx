import { useState } from "react";
import "./App.css";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import { NavbarDefault } from "./components/Header/NavbarDefault";

function App() {
  return (
    <>
      <div className="navbar">
        <NavbarDefault />
      </div>
      <section className="login flex w-full justify-center items-center h-[80vh] ">
        <LoginRegister />
      </section>
    </>
  );
}

export default App;
