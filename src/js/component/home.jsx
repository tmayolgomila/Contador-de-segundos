import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="Contador">
			<div className="Reloj"><i className="fa fa-clock"></i></div>
			<div className="Seis">{props.digitSix % 10}</div>
			<div className="Cinco">{props.digitFive % 10}</div>
			<div className="Cuatro">{props.digitFour % 10}</div>
			<div className="Tres">{props.digitThree % 10}</div>
			<div className="Dos">{props.digitTwo % 10}</div>
			<div className="Uno">{props.digitOne % 10}</div>
		</div>
	);
};

export default SimpleCounter;
