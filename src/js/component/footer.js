import React, { Component } from "react";
import mep from "../../img/mepB.png";
import marca from "../../img/LogoB.png";
import "../../styles/footer.scss";

export const Footer = () => {
	const gitLink = "https://github.com/GsusLara";
	return (
		<footer className="footer mt-auto">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<hr className="lineDiv" />
						<div className="row">
							<div className="col-lg-3">
								<div className="col-lg-10">
									<img className="img-fluid" src={mep} />
								</div>
							</div>
							<div className="col-lg-6 text-center d-flex flex-column justify-content-center">
								<span>
									<i className="far fa-copyright" /> 2021 PRONIE MEP - FOD | Desarrollador Jesus Lara{" "}
									<a href={gitLink} target="blank" rel="noopener noreferrer">
										<i className="fab fa-github" />
									</a>
								</span>
							</div>
							<div className="col-lg-3">
								<img className="img-fluid" src={marca} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
