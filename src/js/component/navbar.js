import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import { Link } from "react-scroll";

import logob from "../../img/LogoB.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [visible, setvisible] = useState(false);
	const colorNav = store.vistaMenu == "SeccionUno" ? "rgba(91, 99, 102, 0.200)" : "#FFC85B";
	return (
		<nav className="navbar navbar-light fixed-top p-0 " style={{ backgroundColor: colorNav }}>
			<div className="row">
				<div className="col-5 col-md-3 col-lg-2 pt-2 pt-sm-0 pl-3 pl-lg-2 m-0">
					<img className="img-fluid" src={logob} />
				</div>
				<div className="col-7 col-md-9 col-lg-10  pr-5 pt-3 pt-sm-4 pr-lg-0 text-right">
					<ul className="nav-menu d-none d-md-inline-flex">
						<li className="pr-5">
							<Link
								to="SeccionUno"
								smooth={true}
								duration={2000}
								style={{ color: store.vistaMenu == "SeccionUno" ? " #FFC85B" : " #ffffff" }}
								className=" enlace text-decoration-none">
								Inicio
							</Link>
						</li>
						<li className="pr-5">
							<Link
								to="SeccionDos"
								smooth={true}
								duration={2000}
								style={{ color: store.vistaMenu == "SeccionDos" ? " #C832AF" : " #ffffff" }}
								className=" enlace text-decoration-none">
								Proyecto
							</Link>
						</li>
						<li className="pr-5">
							<Link
								to="SeccionTres"
								smooth={true}
								duration={2000}
								style={{ color: store.vistaMenu == "SeccionTres" ? " #C832AF" : " #ffffff" }}
								className=" enlace text-decoration-none">
								Recursos
							</Link>
						</li>
						<li className="pr-5">
							<Link
								to="SeccionCuatro"
								smooth={true}
								duration={2000}
								style={{ color: store.vistaMenu == "SeccionCuatro" ? " #C832AF" : " #ffffff" }}
								className=" enlace text-decoration-none">
								Consultas
							</Link>
						</li>
					</ul>
					<ul
						className="nav-menu text-left d-flex flex-column d-md-none position-fixed Celmenu"
						style={{ right: visible ? "0%" : "-80%" }}>
						<li className="p-3">
							<Link
								to="SeccionUno"
								smooth={true}
								duration={2000}
								onClick={() => setvisible(false)}
								style={{ color: store.vistaMenu == "SeccionUno" ? " #FFC85B" : "#ffffff" }}
								className=" enlace text-decoration-none">
								Inicio
							</Link>
						</li>
						<li className="p-3 ">
							<Link
								to="SeccionDos"
								smooth={true}
								duration={2000}
								onClick={() => setvisible(false)}
								style={{ color: store.vistaMenu == "SeccionDos" ? " #FFC85B" : "#ffffff" }}
								className=" enlace text-decoration-none">
								Proyecto
							</Link>
						</li>
						<li className="p-3">
							<Link
								to="SeccionTres"
								smooth={true}
								duration={2000}
								onClick={() => setvisible(false)}
								style={{ color: store.vistaMenu == "SeccionTres" ? " #FFC85B" : "#ffffff" }}
								className=" enlace text-decoration-none">
								Recursos
							</Link>
						</li>
						<li className="p-3 ">
							<Link
								to="SeccionCuatro"
								smooth={true}
								duration={2000}
								onClick={() => setvisible(false)}
								style={{ color: store.vistaMenu == "SeccionCuatro" ? " #FFC85B" : "#ffffff" }}
								className=" enlace text-decoration-none">
								Consultas
							</Link>
						</li>
					</ul>
					<div className="mt-2">
						<span className="d-md-none tongle pr-2" onClick={() => setvisible(!visible)}>
							<i className="fas fa-bars" /> Menú
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
};
