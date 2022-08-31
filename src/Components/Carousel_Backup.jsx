import React, { useEffect, useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/carousel.css';

export const Carousel = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");
    const [url, setUrl] = useState(process.env.REACT_APP_remoteHost + "api/articulos/articulos/3");
    const [urlImg, setUrlImg] = useState(process.env.REACT_APP_remoteHost + "api/articulos/imagen/");
    const [isCircle, setIsCircle] = useState(true);
    // const [slideIndex, setSlideIndex] = useState(1);
    const [proper, setProper] = useState([]);
    let slideIndex = 1;
    // const [url, setUrl] = useState("https://reqres.in/api/users?page=2")
    const getUsuariosAjaxAW = async () => {

        console.log(urlImg);

        setTimeout(async () => {
            try {
                const peticion = await fetch(url);
                const datos = await peticion.json();

                setUsuarios(datos.data);
                // console.log(datos);

                setCargando(false);

            } catch (error) {
                setErrores(error.message);
            }

        }, 1000)
    }

    const showDivs = (n) => {
        setTimeout(async () => {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length }
            for (i = 0; i < x.length; i++) {
                // console.log(x[i]);
                setProper(x[i]);
                // x[i].classList.toggle("mySlides");
                // x[i].style.display = "none";
                // console.log(x[i]);
            }
            // x[i].classList.toggle("mySlides");
            let test = slideIndex - 1;
            console.log(x[test]);
            setIsCircle(false);
            // x[slideIndex - 1].classList.toggle("mySlides");

            // showCurrent()
        }, 3000)
        // console.log("El valor de slideIndex es " + slideIndex)
        // console.log(x[slideIndex - 1]);
        // let test = slideIndex - 1;
        // console.log("El valor actual de slideIndex es " + test + proper[0])
        // x[slideIndex - 1].classList.toggle("mySlides");
        // x[slideIndex - 1].style.display = "block";
    }

    const showCurrent = () => {

        // console.log("Esto traje " + x);
        proper.classList.toggle("mySlides");
        console.log("Esto traje en const " + proper);

    }


    useEffect(() => {
        // getUsuariosEstaticos();
        // getUsuariosAjaxPms();
        getUsuariosAjaxAW();
        // console.log(usuarios);
        showDivs(slideIndex);
        return () => {

        };

    }, [])

    return (
        <div>
            <h2 className="">Manual Slideshow</h2>
            <div className="mainSlider">
                {
                    usuarios.map((usuario, i) => (
                        <div index={i} key={usuario._id} className="mainSlide">
                            <img className={isCircle ? "mySlides" : "mySlidesVisible"}
                                src={urlImg + usuario.imagen}
                                alt="image not found"
                                style={{ width: "100%" }}
                            />
                        </div>
                    ))
                }
                <button className="mainButtons leftButton">&#10094;</button>
                <button className="mainButtons rightButton">&#10095;</button>
            </div>
        </div>
    )
}
