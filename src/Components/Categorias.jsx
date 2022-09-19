import React, { useEffect } from 'react'
import '../styles/categorias.css';

const Categorias = (props) => {
    // const imagenes = useSelector((state) => state.fichero);

    // const check = () => {

    //     setTimeout(() => {

    //         console.log("imagen actual Categoria", imagenes[0][0])
    //     }, 1000);

    // }

    useEffect(() => {
        console.log(props.id, props.cat, props.sabores, props.img);

    }, [props.id, props.cat, props.sabores, props.img])


    return (
        <div>
            <section id="galletas" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-header">{props.cat}</div>
                            <span className="section-text">{props.des}</span>
                            <br />
                            <br />
                            <ul>
                                {props.sabores.map((sabor, index) => {
                                    return (
                                        <li key={index}>
                                            {sabor.tipo}
                                        </li>
                                    );
                                })}
                            </ul>
                            <br />
                            <a className="button button-primary section-button" href="/cookies">Ver más</a>
                        </div>
                        <div className="col-md-6">
                            <img className="section-image" src={props.img} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categorias