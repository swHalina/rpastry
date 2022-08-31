import React, { useEffect } from 'react'
import '../styles/categorias.css';
import { useSelector, useDispatch } from "react-redux";

const Categorias = () => {
    // const imagenes = useSelector((state) => state.fichero);

    // const check = () => {

    //     setTimeout(() => {

    //         console.log("imagen actual Categoria", imagenes[0][0])
    //     }, 1000);

    // }

    // useEffect(() => {

    //     check();

    // }, [imagenes])


    return (
        <div>
            <section id="galletas" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-header">Galletas</div>
                            <span className="section-text">Nuestras Galletas estan elaboradas con la mas alta calidad en repostería, debido al cuidado en su elaboración e incorporando una gran variedad de ingredientes, resultado con un amplia gama de galletas para todos los gustos y paladares.</span>
                            <br />
                            <br />
                            <ul>
                                <li>Alfajores</li>
                                <li>Naranja Arandano</li>
                                <li>Besos de Nuez</li>
                                <li>Almendra o Nuez</li>
                                <li>Danesas</li>
                                <li>Chispas de Chocolate, Vainilla Coco o M&amp;M</li>
                                <li>Mantequilla Decoradas</li>
                                <li>Rellenas o Combinadas</li>
                            </ul>
                            <br />
                            <a className="button button-primary section-button" href="/cookies">Ver más</a>
                        </div>
                        <div className="col-md-6">
                            <img className="section-image" src="https://rsreal.herokuapp.com/assets/galletas1-cd209d66f096f50f53e3d4fe535bb1aeaa52d62b490abb0ef2712a00b49c767c.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categorias