import React from "react";
import { gsap } from "gsap";
import { Tween } from 'react-gsap';
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import ruido from "./img/ruido.gif"
import signal from "./img/signa-1.jpg"
import slide_1 from "./img/sl-1.jpg"
import slide_2 from "./img/sl-2.jpg"

import "../App.css";

export default function Tomato() {

  const imageRuido = useRef(null);
  const imageSignal = useRef(null);
  const imageS1 = useRef(null);

  useLayoutEffect(()=>{
      
      const tl = gsap.timeline({ repeat: -1  ,} );
      tl.set(imageRuido.current,{ opacity: 100 } );
      
      tl.from(imageSignal.current,{ opacity: 0, duration: .3, delay: 0} );
      tl.to(imageSignal.current,{ opacity: 100, duration: .3, delay: 0} );
      
      
      tl.from(imageS1.current,{ opacity: 0, duration: .3, delay: 0} );
      tl.to(imageS1.current,{ opacity: 100, duration: 2.3, delay: 2} );
      
    }, [])

  return (<>

  <img id="ruido" ref={imageRuido} src={ruido} alt="Imagen 1" />
    <img id="signal" ref={imageSignal} src={signal} alt="Imagen 2" />
    <img id="slide_1" ref={imageS1} src={slide_1} alt="Imagen 3" />



    </>)
}
