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
			<div className="margen" /> {/*margen para el navbar */}
			{/*contenedor de la primera parte*/}
			<div className="container-fluid m-0 p-0 mb-5 recurso1">
				<div className="row justify-content-center">
					{/*contenedor del titulo*/}
					<div className="col-12 text-center mt-lg-3 pl-lg-5 text-lg-left">
						<span className="titulo2">¿Como </span>
						<span className="font-weight-bold">iniciar con </span>
						<span className="titulo1">Robbie++ </span>
						<span className="titulo2">?</span>
					</div>
					{/*primera caja */}
					<div
						id="espacio1"
						className="col-12 col-md-7 col-lg-4 mt-2 mt-lg-5 d-flex flex-column justify-content-center  espacio">
						<div className="col-8 mx-auto d-flex flex-column justify-content-center espacioInterno">
							<strong>
								Conoce la propuesta LIE++ <br /> preescolar
							</strong>
							<button type="button" className="btn btn-light mx-auto mt-5 descarga">
								Descargar
							</button>
						</div>
					</div>
					{/*segunda caja */}
					<div
						id="espacio2"
						className="col-12 col-md-7 col-lg-4 mt-2  mt-lg-5 d-flex flex-column justify-content-center  espacio">
						<div className="col-8 mx-auto d-flex flex-column justify-content-center espacioInterno">
							<strong>
								Aprende sobre su Arquitectura <br /> y componentes
							</strong>
						</div>
					</div>
					{/*tercera caja */}
					<div
						id="espacio3"
						className="col-12 col-md-7 col-lg-4 mt-2  mt-lg-5 d-flex flex-column justify-content-center  espacio">
						<div className="col-8 mx-auto d-flex flex-column justify-content-center espacioInterno">
							<strong>Sincroniza Robbie++ y tititbots</strong>
						</div>
					</div>
				</div>
			</div>
			{/*contenedor de la segunda parte*/}
			<div className="container mt-lg-5 mb-5 recurso2">
				<div className="row">
					{/*lado izquierdo*/}
					<div className="col-12 col-md-6">
						{/*contenedor del titulo*/}
						<div className="col-12 text-left mt-lg-5">
							<span>¡Vamos a </span>
							<spam className="titulo2">programar!</spam>
						</div>
						{/*decorador*/}
						<div className="col-6  col-lg-6">
							<img className="img-fluid" src={linea} />
						</div>
						<div className="col-6  col-lg-6 text-right text-md-center mt-lg-2">
							<ul className="list-unstyled text-nowrap">
								<li className="p-2">
									<span>Como </span>
									<a className="videoLink" href={linkMover} target="blank">
										avanzar
									</a>
								</li>
								<li className="p-2">
									<span>Aprende a </span>
									<a className="videoLink" href={linkGiro} target="blank">
										girar
									</a>
								</li>
								<li className="p-2">
									<span>Utiliza las </span>
									<a className="videoLink" href={linkPinzas} target="blank">
										pinzas
									</a>
								</li>
								<li className="p-2">
									<span>Enciende su </span>
									<a className="videoLink" href={linkLuz} target="blank">
										luz
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/*lado derecho*/}
					<div className="col-12 col-md-6 mt-2 mt-lg-0 d-flex flex-column justify-content-center">
						<div className="col-8 col-md-11 text-left ml-md-5 p-md-5 text-md-center d-flex flex-column justify-content-center">
							<span className="titulo2">¡Lo lograste!</span>
							<br />
							<span className="textResponsive">Crea desafios y disfruta de aprender jugando</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
