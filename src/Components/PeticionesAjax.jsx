import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addImagenes } from "../features/carrusel/imagenesListado";
import { addCategorias } from "../features/carrusel/categoriasListado";

export const PeticionesAjax = () => {
    const [fetchImagenes, setFetchImagenes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");
    const [urlBanner, setUrlBanner] = useState(process.env.REACT_APP_remoteHost + "api/articulos/articulos/3/");
    const [urlRuta, setUrlRuta] = useState(process.env.REACT_APP_remoteHost + "api/articulos/imagen/");
    const [urlCategorias, setUrlCategorias] = useState(process.env.REACT_APP_remoteHost + "api/categorias");
    const dispatch = useDispatch();

    const getUsuariosAjaxAW = async () => {

        try {
            const peticion = await fetch(urlBanner);
            const datos = await peticion.json();

            const peticionCategorias = await fetch(urlCategorias);
            const datosCategorias = await peticionCategorias.json();

            let dt = datos.data;
            let task_names = [];

            task_names = dt.map(function (task, index, array) {

                return urlRuta + task.imagen;

            });

            console.log(task_names);

            setTimeout(() => {
                makeDispacth(task_names);
                makeDispacthCategorias(datosCategorias);

            }, 2000);

        } catch (error) {
            setErrores(error.message);
        }

    }

    const makeDispacth = (x) => {
        console.log("Pasa por aqui")
        return dispatch(
            addImagenes(x)
        );

    }

    const makeDispacthCategorias = (x) => {
        console.log("Pasa por aqui")
        return dispatch(
            addCategorias(x
            )
        );

    }

    useEffect(() => {
        getUsuariosAjaxAW();
    }, [])

}


