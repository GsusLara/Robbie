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
		<nav className="navbar navbar-light fixed-top" style={{ backgroundColor: colorNav }}>
			<img className="logo" src={logob} />
			<div className="ml-auto"></div>
			<ul className="nav-menu d-none d-lg-flex">
				<li className="p-3">
					<Link
						to="SeccionUno"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "SeccionUno" ? " #FFC85B" : " #ffffff" }}
						className=" enlace text-decoration-none">
						Inicio
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="SeccionDos"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "SeccionDos" ? " #C832AF" : " #ffffff" }}
						className=" enlace text-decoration-none">
						Proyecto
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="SeccionTres"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "SeccionTres" ? " #C832AF" : " #ffffff" }}
						className=" enlace text-decoration-none">
						Arquitectura
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="SeccionCuatro"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "SeccionCuatro" ? " #C832AF" : " #ffffff" }}
						className=" enlace text-decoration-none">
						Contacto
					</Link>
				</li>
			</ul>
			<ul
				className="nav-menu flex-column d-lg-none position-fixed Celmenu"
				style={{ right: visible ? "0" : "-80%" }}>
				<li className="pt-3 pb-3 pr-3">
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
				<li className="pt-3 pb-3 pr-3">
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
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="SeccionTres"
						smooth={true}
						duration={2000}
						onClick={() => setvisible(false)}
						style={{ color: store.vistaMenu == "SeccionTres" ? " #FFC85B" : "#ffffff" }}
						className=" enlace text-decoration-none">
						Arquitectura
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="SeccionCuatro"
						smooth={true}
						duration={2000}
						onClick={() => setvisible(false)}
						style={{ color: store.vistaMenu == "SeccionCuatro" ? " #FFC85B" : "#ffffff" }}
						className=" enlace text-decoration-none">
						Contacto
					</Link>
				</li>
			</ul>
			<span className="d-lg-none tongle" onClick={() => setvisible(!visible)}>
				<i className="fas fa-bars" /> Menú
			</span>
		</nav>
	);
};
