import React from "react";

import "../../styles/info.scss";

export const Info = () => {
	const linkFb = "https://m.facebook.com/FundacionOmarDengo/";
	const linkTwi = "https://mobile.twitter.com/funda_omardengo?lang=es";
	const linkInsta = "https://www.instagram.com/fundacionomardengo/?hl=es";
	const linkYou = "https://m.youtube.com/user/FundacionOmarDengo";
	const linkLie = "http://lieencasa.fod.ac.cr/";
	const whatsAppLink = "https://wa.me/50687147996/?text=";
	const texto = "Tengo una consulta sobre LIE";
	let salida = whatsAppLink + texto;

	return (
		<div className="container-fluid m-0 p-0 fondoInfo">
			<div className="row justify-content-center justify-content-lg-end">
				<div className="col-12 mb-lg-5 margen" />
				<div className="col-10 col-lg-4 redes">
					<h6>
						<span className="titulo1">Dudas </span>
						<span className="titulo2">o consultas?</span>
					</h6>
					<p className="mt-lg-5 ">
						Si desea conocer más sobre la propuesta LIE++ en distintos niveles, visita nuestro sitio web{" "}
						<a href={linkLie} target="_blank" rel="noopener noreferrer">
							LIE en casa
						</a>
					</p>
					<p className="mt-lg-3 ">Siguenos en redes sociales</p>
					<span>
						<a href={linkFb} className="fbIco">
							<i className="fab fa-facebook-square fa-2x p-2"></i>
						</a>
						<a href={linkInsta} className="instaIco">
							<i className="fab fa-instagram-square fa-2x p-2"></i>
						</a>
						<a href={linkTwi} className="twiterIco">
							<i className="fab fa-twitter fa-2x p-2"></i>
						</a>
						<a href={linkYou} className="youtubeIco">
							<i className="fab fa-youtube fa-2x p-2"></i>
						</a>
					</span>
				</div>
				<div className="col-10 col-lg-6 mt-3 mt-lg-0">
					<h6 className="titulo2">
						<span>Contactanos </span>
						<i className="fab fa-whatsapp whatIco"></i>
					</h6>
					<p className="mt-lg-5">Para reportes consultas o dudas, escribenos via Whatsapp</p>
					<input type="text" className="mensaje mt-lg-3" placeholder="Escribe tu mensaje acá..." />
					<br />
					<a href={salida} target="_blank" rel="noopener noreferrer">
						<button type="button" className="btn btn-success mt-4 enviar">
							Enviar<i className="fas fa-paper-plane"></i>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
