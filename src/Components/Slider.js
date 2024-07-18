import React from "react";
import { Carousel } from "react-bootstrap";
import myphoto from '../Images/my-photo.jpg'
import mysecondphoto from '../Images/my-second-photo.jpg'
import bride from '../Images/bride.jpg'


export default function Slider() {
  return (
   <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" style={{maxHeight: "90vh", objectFit: "cover", objectPosition: "center"}} src={myphoto} alt="Моя фотография"/>
      <Carousel.Caption>
        <h3>Визажист стилист</h3>
        <p>Опыт с 2018 года</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" style={{maxHeight: "90vh", objectFit: "cover", objectPosition: "center"}} src={mysecondphoto} alt="Моя фоография"/>
      <Carousel.Caption>
        <h3>Визажист стилист</h3>
        <p>Более сотни бьюти-сертификатов</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" style={{maxHeight: "90vh", objectFit: "cover", objectPosition: "top"}} src={bride} alt="Моя фотография с невестой"/>
      <Carousel.Caption>
        <h3>Визажист стилист</h3>
        <p>Макияж для невест и фотосессий</p>
      </Carousel.Caption>
    </Carousel.Item>
   </Carousel>
  )
}