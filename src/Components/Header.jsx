import React, { useEffect, useState } from 'react'
import Carousel from "./Carousel";
import { useSelector } from "react-redux";

const Header = () => {
    const dataImagenes = useSelector((state) => state.fichero);
    const [fetchImagenes, setFetchImagenes] = useState(dataImagenes);
    const [cargando, setCargando] = useState(false);

    const check = (x) => {

        setTimeout(() => {
            console.log("Seteo de imagenes", fetchImagenes);
            return setFetchImagenes(x);
        }, 1000);

    }

    useEffect(() => {
        check(dataImagenes)
    }, [dataImagenes])

    useEffect(() => {
        setCargando(true);
    }, [fetchImagenes])

    return (
        <>
            <div className='customHeader'>
                <nav id="nav-wrap">
                    <div className="navbarUpper">
                        <a className="" href="/">R &amp; A Real Pastry</a>
                    </div>
                    <div id="nav" className="navbarMiddle">
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#resume">
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio">
                                    Works
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbarFooter">
                    </div>
                </nav>
            </div>
            {cargando == true && <Carousel images={fetchImagenes} autoPlay={false} showButtons={true} />}
        </>
    );
};

export default Header;
