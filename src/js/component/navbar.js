import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import { Link } from "react-scroll";
import logo from "../../img/Logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [visible, setvisible] = useState(false);
	const colorNav = store.vistaMenu == "home" ? "rgba(91, 99, 102, 0.200)" : "#FFC85B";
	return (
		<nav className="navbar navbar-light fixed-top" style={{ backgroundColor: colorNav }}>
			<img className="logo" src={logo} />
			<div className="ml-auto"></div>
			<ul className="nav-menu d-none d-lg-flex">
				<li className="p-3">
					<Link
						to="principal"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "home" ? " #ffffff" : " #0a0a0a" }}
						className=" enlace text-decoration-none">
						Inicio
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="info"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "info" ? " #ffffff" : " #0a0a0a" }}
						className=" enlace text-decoration-none">
						Componentes
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="Proyectos"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "proyectos" ? " #ffffff" : " #0a0a0a" }}
						className=" enlace text-decoration-none">
						Proyecto
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="contacto"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "contacto" ? " #ffffff" : " #0a0a0a" }}
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
						to="principal"
						smooth={true}
						duration={2000}
						onClick={() => setvisible(false)}
						style={{ color: store.vistaMenu == "home" ? " #FFC85B" : "#ffffff" }}
						className=" enlace text-decoration-none">
						Inicio
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="info"
						smooth={true}
						duration={2000}
						onClick={() => setvisible(false)}
						style={{ color: store.vistaMenu == "info" ? " #FFC85B" : "#ffffff" }}
						className=" enlace text-decoration-none">
						Componentes
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="Proyectos"
						smooth={true}
						duration={2000}
						onClick={() => setvisible(false)}
						style={{ color: store.vistaMenu == "proyectos" ? " #FFC85B" : "#ffffff" }}
						className=" enlace text-decoration-none">
						Proyecto
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="contacto"
						smooth={true}
						duration={2000}
						onClick={() => setvisible(false)}
						style={{ color: store.vistaMenu == "contacto" ? " #FFC85B" : "#ffffff" }}
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
