import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import { Link } from "react-scroll";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [visible, setvisible] = useState(false);

	return (
		<nav className="navbar navbar-light fixed-top">
			<h1>Hola!</h1>
			<div className="ml-auto"></div>
			<ul className="nav-menu d-none d-lg-flex">
				<li className="p-3">
					<Link
						to="principal"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "home" ? "gold" : "black" }}>
						Home
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="info"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "info" ? "gold" : "black" }}>
						Acerca de
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="Proyectos"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "proyectos" ? "gold" : "black" }}>
						Proyectos
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="contacto"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "contacto" ? "gold" : "black" }}>
						Contacto
					</Link>
				</li>
			</ul>
			<ul
				className="nav-menu flex-column d-lg-none position-fixed Celmenu"
				style={{ right: visible ? "0" : "-40%" }}>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="principal"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "home" ? "gold" : "black" }}>
						Home
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="info"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "info" ? "gold" : "black" }}>
						Acerca de
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="Proyectos"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "proyectos" ? "gold" : "black" }}>
						Proyectos
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="contacto"
						smooth={true}
						duration={2000}
						style={{ color: store.vistaMenu == "contacto" ? "gold" : "black" }}>
						Contacto
					</Link>
				</li>
			</ul>
			<span className="d-lg-none tongle" onClick={() => setvisible(!visible)}>
				<i className="fas fa-bars"></i>
			</span>
		</nav>
	);
};
