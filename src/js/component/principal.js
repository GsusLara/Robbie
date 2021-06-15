import React from "react";
import "../../styles/principal.scss";
import marca from "../../img/marca.png";
import mep from "../../img/mep.png";

export const Principal = () => {
	return (
		<div className="container-fluid m-0 p-0">
			<div className="row m-0 p-0 portada w-100">
				<div className="col-12 col-md-4 align-self-end align-self-lg-center mb-5 m-lg-3  Description">
					<h2 id="titulo">Robbie++</h2>
					<p>
						Es un robot educativo para el desarrollo del pensamiento computacional, creado e impulsado por
						Fundacion Omar dengo y el programa nacional de informática educativa del ministerio de educacion
						publica
					</p>
					<div className="row mt-3">
						<div className="col-sm-12 co col-lg-6">
							<img id="marca" className="img-fluid" src={marca} />
						</div>
						<div className="col-sm-12 col-lg-4 mt-3 mt-lg-0">
							<img id="mep" className="img-fluid" src={mep} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
