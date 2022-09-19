import React, { useEffect } from 'react'
import '../styles/categorias.css';

const Categorias = (props) => {
    useEffect(() => {
        console.log(props.id, props.cat, props.sabores, props.img);

    }, [props.id, props.cat, props.sabores, props.img])


    return (
        <div>
            <section id={props.cat} className="section">
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
                            <img className="section-image" src={props.img} alt="Sin imagen" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categorias