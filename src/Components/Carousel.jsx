import { useEffect, useState } from "react";
import styled from "styled-components";
import '../styles/carousel.css';
import { useSelector } from "react-redux";

const CarouselContainer = styled.div`
background-color: white;
height: auto;
max-height:50%
width:100%;
`;

const CarouselImg = styled.img`
width: 100%;
height: 450px;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 15px;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  color: white;
  background-color: #eb118a;
  padding: 8px;
  margin: 0 5px;
`;

const Carousel = (props) => {
    console.log("Llegan props a carrusel", props.images[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoPlay || !props.showButtons) {
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, props.images[0]);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, []);

    useEffect(() => {

        let currentSlider = "";

        let allImages = props.images;
        currentSlider = allImages.map(function (image, index, array) {

            return image[0];

        });

        setSelectedImage(currentSlider);

    }, [props.images])

    const selectNewImage = (index, images, next = true) => {
        console.log(selectedImage);
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 1500);
    };

    const previous = () => {
        selectNewImage(selectedIndex, props.images[0], false);
    };

    const next = () => {
        selectNewImage(selectedIndex, props.images[0]);
    };
    return (
        <>
            <div className="mainSlider">
                <CarouselImg
                    src={selectedImage}
                    alt="Gentleman"
                    className={loaded ? "loaded" : ""}
                    onLoad={() => setLoaded(true)}
                />
                <CarouselButtonContainer>
                    {props.showButtons ? (
                        <>
                            <CarouselButton className="leftButton" onClick={previous}>{"<"}</CarouselButton>
                            <CarouselButton className="rightButton" onClick={next}>{">"}</CarouselButton>
                        </>
                    ) : (
                        <></>
                    )}
                </CarouselButtonContainer>
            </div>
        </>
    );
}

export default Carousel