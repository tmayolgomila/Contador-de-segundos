//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SimpleCounter from "./component/home.jsx";


let Contador = 0;
setInterval(function(){
const Seis = Math.floor(Contador/100000);
const Cinco = Math.floor(Contador/10000);
const Cuatro = Math.floor(Contador/1000);
const Tres = Math.floor(Contador/100);
const Dos = Math.floor(Contador/10);
const Uno = Math.floor(Contador/1);
Contador++;



ReactDOM.render(<SimpleCounter digitOne={Uno} digitTwo={Dos} digitThree={Tres} digitFour={Cuatro} digitFive={Cinco} digitSix={Seis}/>, document.querySelector("#app"));
}, 1000);
