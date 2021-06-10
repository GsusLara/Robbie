import React from "react";
import "../../styles/principal.scss";
import marca from "../../img/marca.png";
import mep from "../../img/mep.png";

export const Principal = () => {
	return (
		<div className="container-fluid m-0 p-0 portada">
			<div className="p-3 d-lg-none celDescription">
				<h2>Robbie++</h2>
				<p>Es un robot educativo para el desarrollo del pensamiento computacional</p>
				<div>
					<p>
						Desarrollado e impulsado por Fundacion Omar dengo y el pograma Nacional de informática Educativa
					</p>
					<div className="text-center mx-auto logosBox ">
						<img className=" logos " src={marca} />
						<img className="logos  " src={mep} />
					</div>
				</div>
			</div>
		</div>
	);
};
