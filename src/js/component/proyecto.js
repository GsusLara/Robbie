import React from "react";
import "../../styles/proyecto.scss";
import ima1 from "../../img/img1.png";

export const Proyecto = () => {
	let link = "https://drive.google.com/drive/mobile/folders/1VSGFI9QdTIXWPfDyBPPE4DoDLSJ3FHOo?usp=sharing";
	return (
		<div className="container-fluid  text-center cuerpoProyecto">
			<div className="row justify-content-center">
				<div className="col-12 margen" />
				<div className="col-10 mt-lg-5">
					<span id="titulo1">LIE++ </span>
					<span id="titulo2">Preescolar</span>
				</div>
				<div className="col-10 mt-3 infoProyecto">
					<p>
						Consiste estrategias pedagógicas de mediación y de evaluación que le permitirán, junto a sus
						estudiantes, ir desarrollando y comprendiendo los conceptos de cómputo, profundizar en las
						habilidades de programación, promover las prácticas y actitudes del pensamiento computacional
						con el propósito de formar ciudadanos capaces de comprender el mundo digital que nos rodea
					</p>
				</div>
				<div className="col-8 col-lg-5">
					<img className="img-fluid" src={ima1} />
				</div>
				<div className="col-12 mt-5 masInfo">
					<div className="row justify-content-end">
						<div className="col-12 mt-3 col-md-6 p-md-3 p-lg-5">
							<h3 className="text-center">Robbie++ y el aprendizaje</h3>
							<p className="text-md-right mt-2 mt-lg-5 ">
								De la mano con la propuesta preescolar LIE++ se incluye el Robbie++, el robot educativo
								diseñado y creado especialmente para el aprendizaje y el desarrollo del pensamiento
								computacional con algoritmos basicos de programación.
							</p>
							<br />
							<p>
								Ingrese al portal de recursos de la propuesta{" "}
								<a href={link}>
									<strong>aqui</strong>
								</a>{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
