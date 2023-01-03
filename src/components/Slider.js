import React from "react";
import { gsap } from "gsap";
import { Controls, PlayState, Tween } from 'react-gsap';
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import ruido from "./img/ruido.gif"
import signal from "./img/signa-1.jpg"
import slide_1 from "./img/sl-1.jpg"
import slide_2 from "./img/sl-2.jpg"

import "../App.css";


export default function Slider() {
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
  

  return (
   <>
    <Tween to={{ x: '200px', repeat: -1 }} stagger={0.2} ease="elastic.out(0.2, 0.1)" yoyo={true}>
    <img id="ruido" ref={image1Ref} src={ruido} alt="Imagen 1" />
<img id="signal" ref={image2Ref} src={signal} alt="Imagen 2" />
   </Tween>
        {/* 
            <img id="ruido" alt="" src={ruido} />
        <img id="signal" alt="" src={signal} />
        <img id="slide1" alt="" src={slide_1} />
        <img id="slide2" alt="" src={slide_2} />
     */}
   </>
  )
}
