import React from "react";
import linea from "../../img/linea.png";
import "../../styles/recursos.scss";

export const Recursos = () => {
	const linkGiro = "https://www.youtube.com/watch?v=yk8--5ucCns";
	const linkPinzas = "https://www.youtube.com/watch?v=FNqeC1l4lJE";
	const linkMover = "https://www.youtube.com/watch?v=UA82wBsGP-8";
	const linkLuz = "https://www.youtube.com/watch?v=qACE5L7M22Q";
	const configuracion =
		"https://github.com/GsusLara/Robbie/raw/Desarrollo/src/doc/Configuracion_Robbie%2B%2B_titibots.pdf";
	const manual = "https://github.com/GsusLara/Robbie/raw/Desarrollo/src/doc/Manual_Robbie%2B%2B.pdf";
	const propuesta = "https://github.com/GsusLara/Robbie/raw/Desarrollo/src/doc/Lie%2B%2B_Propuesta_Preescolar.pdf";

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
							<h1>
								<strong>1</strong>
							</h1>
							<strong>
								Analiza la propuesta <br />
								LIE++, preescolar
							</strong>
							<a href={propuesta} target="blank" rel="noopener noreferrer">
								<button type="button" className="btn btn-light mx-auto mt-5 descarga">
									Descargar
								</button>
							</a>
						</div>
					</div>
					{/*segunda caja */}
					<div
						id="espacio2"
						className="col-12 col-md-7 col-lg-4 mt-2  mt-lg-5 d-flex flex-column justify-content-center  espacio">
						<div className="col-8 mx-auto d-flex flex-column justify-content-center espacioInterno">
							<h1>
								<strong>2</strong>
							</h1>
							<strong>
								Conoce su Arquitectura <br /> y componentes
							</strong>
							<a href={manual} target="blank" rel="noopener noreferrer">
								<button type="button" className="btn btn-light mx-auto mt-4 descarga">
									Descargar
								</button>
							</a>
						</div>
					</div>
					{/*tercera caja */}
					<div
						id="espacio3"
						className="col-12 col-md-7 col-lg-4 mt-2  mt-lg-5 d-flex flex-column justify-content-center  espacio">
						<div className="col-8 mx-auto d-flex flex-column justify-content-center espacioInterno">
							<h1>
								<strong>3</strong>
							</h1>
							<strong>
								Sincroniza <br /> Robbie++ y tititbots
							</strong>
							<a href={configuracion} target="blank" rel="noopener noreferrer">
								<button type="button" className="btn btn-light mx-auto mt-5 descarga">
									Descargar
								</button>
							</a>
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
							<span className="titulo2">Programar!</span>
						</div>
						{/*decorador*/}
						<div className="col-6  col-lg-6 flecha">
							<img className="img-fluid" src={linea} loading="lazy" />
						</div>
						<div className="col-6  col-lg-6 text-right text-md-center mt-lg-2">
							<ul className="list-unstyled text-nowrap">
								<li className="p-2">
									<span>Como </span>
									<a className="videoLink" href={linkMover} target="blank" rel="noopener noreferrer">
										avanzar
									</a>
								</li>
								<li className="p-2">
									<span>Aprende a </span>
									<a className="videoLink" href={linkGiro} target="blank" rel="noopener noreferrer">
										girar
									</a>
								</li>
								<li className="p-2">
									<span>Utiliza las </span>
									<a className="videoLink" href={linkPinzas} target="blank" rel="noopener noreferrer">
										pinzas
									</a>
								</li>
								<li className="p-2">
									<span>Enciende su </span>
									<a className="videoLink" href={linkLuz} target="blank" rel="noopener noreferrer">
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
