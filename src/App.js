import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Categorias from "./Components/Categorias";
import { PeticionesAjax } from "./Components/PeticionesAjax";
import { useSelector } from "react-redux";

const App = () => {
  const dataCategorias = useSelector((state) => state.categorias[0]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    //console.log("Categorias en el app.js", dataCategorias);
    if (dataCategorias != null) {
      setCategorias(dataCategorias.categorias);
      //console.log(dataCategorias.categorias[0]);
      // let i = 0;
      // while (i < dataCategorias.categorias.length) {
      //   console.log(dataCategorias.categorias[i].categoria)
      //   console.log(dataCategorias.categorias[i].descripcion)
      //   console.log(dataCategorias.categorias[i].estado)
      //   i++;
      // }
    }
  }, [dataCategorias])

  return (
    <div className="App">
      <PeticionesAjax />
      <Header categorias={categorias} />
      {
        categorias.map((categoria, index) => {
          return (
            <Categorias key={index} id={categoria.uid} cat={categoria.categoria} des={categoria.descripcion} sabores={categoria.sabores} img={categoria.imagen} />
          )
        })
      }
    </div>
  );
};

export default App;
