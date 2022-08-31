import { configureStore } from "@reduxjs/toolkit";

import reducerImagenes from "../features/carrusel/imagenesListado";
import reducerCategorias from "../features/carrusel/categoriasListado";

export const store = configureStore({
    reducer: { fichero: reducerImagenes, categorias: reducerCategorias }
});