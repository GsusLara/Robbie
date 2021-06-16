import React from "react";
import linea from "../../img/linea.png";
import "../../styles/recursos.scss";

export const Recursos = () => {
	let linkGiro = "https://www.youtube.com/watch?v=yk8--5ucCns";
	let linkPinzas = "https://www.youtube.com/watch?v=FNqeC1l4lJE";
	let linkMover = "https://www.youtube.com/watch?v=UA82wBsGP-8";
	let linkLuz = "https://www.youtube.com/watch?v=qACE5L7M22Q";

	return (
		<div className="container-fluid m-0 p-0">
			<div className="margen"></div>
			<div className="container-fluid m-0 p-0 mb-5 recurso1">
				<div className="row">
					<div className="col-12 text-center mt-lg-3 pl-lg-5 text-lg-left ">
						<span className="font-weight-bold" style={{ fontSize: "1.5rem" }}>
							¿Como{" "}
						</span>
						<span className="font-weight-bold">iniciar con </span>
						<span className="titulo1">Robbie++ </span>
						<span className="titulo2">?</span>
					</div>

					<div
						id="espacio1"
						className="col-12 col-lg-4 mt-3 mt-lg-5 d-flex flex-column justify-content-center espacio ">
						<div className="mr-5 p-5 espacioInterno">
							<strong>Conoce la propuesta LIE++ preescolar</strong>
						</div>
					</div>
					<div
						id="espacio2"
						className="col-12 col-lg-4 mt-2  mt-lg-5 d-flex flex-column justify-content-center text-wrap espacio">
						<div className="mr-5 p-5 espacioInterno">
							<div className="p-lg-4 mr-lg-2">
								<strong>Aprende sobre su Arquitectura y componentes</strong>
							</div>
						</div>
					</div>
					<div
						id="espacio3"
						className="col-12 mb-lg-5 mb-lg-0 col-lg-4 mt-lg-5 d-flex flex-column justify-content-center espacio">
						<div className="mx-5 px-4 espacioInterno">
							<strong>Sincroniza Robbie++ y tititbots</strong>
						</div>
					</div>
				</div>
			</div>

			<div className="container mt-lg-5 mb-5 recurso2">
				<div className="row">
					<div className="col-12 col-lg-6">
						<div className="col-12 text-left mt-lg-5" style={{ height: "30vh" }}>
							<h4>
								<strong>Empieza a programar</strong>
							</h4>
							<img className="decoracion" src={linea} />
						</div>
						<div className="col-11 text-left mt-5 mt-lg-0">
							<a className="p-3" href={linkMover} target="blank">
								Avanzar
							</a>
						</div>
						<div className="col-11 text-left mt-2 ">
							<a className="p-3" href={linkGiro} target="blank">
								¿Como girar?
							</a>
						</div>
						<div className="col-11 text-left mt-2">
							<a className="p-3" href={linkPinzas} target="blank">
								Utilizar pinzas
							</a>
						</div>
						<div className="col-11 text-left mt-2">
							<a className="p-3" href={linkLuz} target="blank">
								Enciende su luz
							</a>
						</div>
					</div>
					<div className="col-12 mt-5 col-lg-6 mt-lg-0 d-flex flex-column justify-content-center">
						<div className="col-11 text-left col-lg-12 ml-lg-5 p-lg-5 text-lg-center">
							<span>Lo lograste!</span>
							<br />
							<span>Crea desafios y disfrutemos de aprender jugando</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
