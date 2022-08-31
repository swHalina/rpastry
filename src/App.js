import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Categorias from "./Components/Categorias";
import { PeticionesAjax } from "./Components/PeticionesAjax";

const App = () => {

  return (
    <div className="App">
      <PeticionesAjax />
      <Header />
      <Categorias />
    </div>
  );
};

export default App;
