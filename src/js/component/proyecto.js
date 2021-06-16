import React from "react";
import "../../styles/proyecto.scss";
import ima1 from "../../img/img1.png";
import ima3 from "../../img/Mockup.png";

export const Proyecto = () => {
	let linkPropuesta = "https://drive.google.com/drive/mobile/folders/1VSGFI9QdTIXWPfDyBPPE4DoDLSJ3FHOo?usp=sharing";
	let linkRainforest = "https://www.rainforestlab.com/productos/titibots/";
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
						<div className="col-12 p-5 mt-3 col-md-6 p-md-3 p-lg-5">
							<h3 className="text-center">Robbie++ y el aprendizaje</h3>
							<p className="mt-2 mt-lg-5 ">
								De la mano con la propuesta preescolar LIE++ se incluye el Robbie++, el robot educativo
								diseñado y creado especialmente para el aprendizaje y el desarrollo del pensamiento
								computacional con algoritmos basicos de programación.
							</p>
							<p>
								Ingrese al portal de recursos de la propuesta{" "}
								<a href={linkPropuesta}>
									<strong>aqui</strong>
								</a>{" "}
							</p>
						</div>
					</div>
				</div>

				<div className="col-10 col-md-8 col-lg-4 p-lg-5 ">
					<div className=" p-2 rainInfo">
						<p className=" mt-4 ">
							En alianza con{" "}
							<a href={linkRainforest} target="blank">
								<strong>Rainforest Lab</strong>
							</a>{" "}
							por medio de sus aplicaciones para dispositivos moviles.
						</p>
						<p>
							Titibots y Titibots Colab cuentan con una interfaz de programación de tipo bloque, basada en
							iconos que permiten desarrollar en los niños fundamentos básicos de la programación, que
							serán transmitidos a Robie++ de forma asincrónica, efectuando la secuencia de comandos dada
							para lograr el objetivo.
						</p>
					</div>
				</div>
				<div className="col-12 mt-5 mt-lg-3 col-lg-6 ">
					<img className="img-fluid " src={ima3} />
				</div>
			</div>
		</div>
	);
};
