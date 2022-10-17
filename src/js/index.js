//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let seg_derecha = 0;
let seg_izquierda = 0;
let min_derecha = 0;
let min_izquierda = 0;
let hor_izquierda = 0;
let hor_derecha = 0;

setInterval(()=>{
    seg_derecha++;
    if (seg_derecha > 9) {
        seg_derecha = 0
        seg_izquierda++
        if (seg_izquierda > 5) {
            seg_izquierda = 0
            min_derecha++
            if (min_derecha > 9) {
                min_derecha = 0
                min_izquierda++
                if (min_izquierda > 5) {
                    min_izquierda = 0
                    hor_derecha++
                    if (hor_derecha > 9) {
                        hor_derecha = 0
                        hor_izquierda++
                    }
                }
            }
        }
    }
    ReactDOM.render(<Home 
                        segundos_derecha={seg_derecha} 
                        segundos_izquierda={seg_izquierda}
                        minutos_derecha = {min_derecha}
                        minutos_izquierda = {min_izquierda}
                        hora_derecha = {hor_derecha}
                        hora_izquierda = {hor_izquierda}
                        />, 
                        document.querySelector("#app"));
},1000)