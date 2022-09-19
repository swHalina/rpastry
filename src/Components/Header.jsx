import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { useSelector } from "react-redux";

const Header = (props) => {
    const dataImagenes = useSelector((state) => state.fichero);
    const [fetchImagenes, setFetchImagenes] = useState(dataImagenes);
    const [listadoDeCategorias, setlistadoDeCategorias] = useState(
        props.categorias
    );
    const [cargando, setCargando] = useState(false);

    const check = (x) => {
        setTimeout(() => {
            console.log("Seteo de imagenes", fetchImagenes);
            return setFetchImagenes(x);
        }, 1000);
    };

    /* A hook that is called when the component is mounted and when the props.categorias or dataImagenes
      change. */
    useEffect(() => {
        check(dataImagenes);
        if (props.categorias != null) {
            setlistadoDeCategorias(props.categorias);
            console.log("listado de categorias en el header", props.categorias)
        }
    }, [dataImagenes, props.categorias]);

    useEffect(() => {
        setCargando(true);
    }, [fetchImagenes]);

    return (
        <>
            <div className="customHeader">
                <nav id="nav-wrap">
                    <div id="nav" className="navbarMiddle">
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">
                                    Home
                                </a>
                            </li>
                            {listadoDeCategorias.map((categoria, index) => {
                                return (
                                    <li key={index}>
                                        <a className="smoothscroll" href="#{categoria.categoria}">
                                            {categoria.categoria}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="navbarFooter"></div>
                </nav>
            </div>
            {cargando === true && (
                <Carousel images={fetchImagenes} autoPlay={false} showButtons={true} />
            )}
        </>
    );
};

export default Header;
