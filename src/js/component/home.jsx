import React from "react";
  
const Home = (props) => {
	return (
        <div className="d-flex justify-content-center">
			<div className="border border-secondary rounded align-self-center p-2 m-1 bg-secondary text-light">
				<i className="far fa-clock fa-2x"></i>
			</div>
			<div className="border border-secondary rounded px-2 m-1 align-self-center bg-secondary text-light">
				<h1>{props.hora_izquierda}</h1>
			</div>
			<div className="border border-secondary rounded px-2 m-1 align-self-center bg-secondary text-light">
				<h1>{props.hora_derecha}</h1>
			</div>
			<div className="border border-secondary rounded px-2 m-1 align-self-center bg-secondary text-light">
				<h1>{props.minutos_izquierda}</h1>
			</div>
			<div className="border border-secondary rounded px-2 m-1 align-self-center bg-secondary text-light">
				<h1>{props.minutos_derecha}</h1>
			</div>
			<div className="border border-secondary rounded px-2 m-1 align-self-center bg-secondary text-light">
				<h1>{props.segundos_izquierda}</h1>
			</div>
            <div className="border border-secondary rounded px-2 m-1 align-self-center bg-secondary text-light">
				<h1>{props.segundos_derecha}</h1>
			</div>
		</div>
	);
};

export default Home;
