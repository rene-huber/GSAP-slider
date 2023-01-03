import React from "react";
import { gsap } from "gsap";
import { Tween } from 'react-gsap';
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import ruido from "./img/ruido.gif"
import signal from "./img/signa-1.jpg"
import slide_1 from "./img/sl-1.jpg"
import slide_2 from "./img/sl-2.jpg"
import slide_3 from "./img/sl-3.jpg"
import slide_4 from "./img/sl-4.jpg"

import "../App.css";

export default function Tomato() {

  const el = useRef();
  const tl = useRef();

  const imageRuido = useRef(null);
  const imageSignal = useRef(null);
  const imageS1 = useRef(null);
  const imageS2 = useRef(null);
  const imageS3 = useRef(null);
  const imageS4 = useRef(null);

  useLayoutEffect(()=>{
      
    const ctx = gsap.context(() => {
       //const tl = gsap.timeline({  } )
      tl.current = gsap.timeline({ repeat: -1 })

        //tl.set("#ruido", { opacity: 100 });
        .from("#signal", { opacity: 0, duration: .5, })
        .set("#signal", { opacity: 100 })
        .to("#signal", { opacity: 0 })

        .from("#slide_1", { opacity: 0, duration: .5, delay:2.3  })
        .set("#slide_1", { opacity: 100 })
        .to("#slide_1", { opacity: 0, duration: .5,  })
        .set("#slide_1", { opacity: 0 , delay:.3})

        .from("#slide_2", { opacity: 0, duration: .5,  })
        .set("#slide_2", { opacity: 100 })
        .to("#slide_2", { opacity: 0, duration: .5,  })
        .set("#slide_2", { opacity: 0 , delay:.3})

        .from("#slide_3", { opacity: 0, duration: .5,  })
        .set("#slide_3", { opacity: 100 })
        .to("#slide_3", { opacity: 0, duration: .5,  })
        .set("#slide_3", { opacity: 0 , delay:.3})
        
        .from("#slide_4", { opacity: 0, duration: .5,  })
        .set("#slide_4", { opacity: 100 })
        .to("#slide_4", { opacity: 0, duration: .5,  })
        .set("#slide_4", { opacity: 0 , delay:.3})

    }, el);return () => ctx.revert(); }, [])

  return (
<div className="bkRuido" ref={el}>
  
    <img id="signal"   className="image" ref={imageSignal} src={signal} alt="Imagen 2" />
    <img id="slide_1"  className="image" ref={imageS1} src={slide_1} alt="Imagen 675" />
    <img id="slide_2"  className="image" ref={imageS2} src={slide_2} alt="Imagen 4" />
    <img id="slide_3"  className="image" ref={imageS3} src={slide_3} alt="Imagen 67dw5" />
    <img id="slide_4"  className="image" ref={imageS4} src={slide_4} alt="Imagen 4wd" />
    
    
    </div>)
}
