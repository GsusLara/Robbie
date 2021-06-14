import React from "react";
import linea from "../../img/linea.png";
import "../../styles/arquitectura.scss";

export const Arquitectura = () => {
	return (
		<div className="container-fluid m-0 p-0">
			<div className="margen"></div>
			<div className="container cuerpo">
				<div className="row">
					<div className="col-12 text-left mt-lg-5" style={{ height: "20vh" }}>
						<h4>Componentes</h4>
					</div>
					<div className="col-11 text-left mt-3">
						<i className="fas fa-microchip"></i>
						<span className="p-2">Microcontrolador S4Aedu</span>
					</div>
					<div className="col-9 text-left mt-2">
						<i className="fab fa-bluetooth"></i>
						<span className="p-2">Bluethooth HC-06</span>
					</div>
					<div className="col-9 text-left mt-2">
						<i className="fas fa-cogs"></i>
						<span className="p-2">Servo motor SG-90</span>
					</div>
					<div className="col-9 text-left mt-2">
						<i className="fas fa-ring"></i>
						<span className="p-2">Micro motor 200RPM</span>
					</div>
					<div className="col-9 text-left mt-2">
						<i className="fas fa-battery-half"></i>
						<span className="p-2">Baterias AA</span>
					</div>
					<div className="col-9 text-left mt-2">
						<i className="far fa-lightbulb"></i>
						<span className="p-2">Diodo Led</span>
					</div>
					<div className="col-9 text-left mt-2">
						<i className="fas fa-volume-down"></i>
						<span className="p-2">Buzzer pasivo</span>
					</div>
				</div>
			</div>
		</div>
	);
};
