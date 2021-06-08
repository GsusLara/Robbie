import React, { useEffect, useRef, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Principal } from "../component/principal";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const h = useRef();
	const i = useRef();
	const p = useRef();
	const c = useRef();

	const handleScroll = () => {
		h.current.getBoundingClientRect().y <= 0 && h.current.getBoundingClientRect().y > -400
			? actions.setVistaMenu("home")
			: i.current.getBoundingClientRect().y <= 300 && i.current.getBoundingClientRect().y > -400
			? actions.setVistaMenu("info")
			: p.current.getBoundingClientRect().y <= 300 && p.current.getBoundingClientRect().y > -400
			? actions.setVistaMenu("proyectos")
			: c.current.getBoundingClientRect().y <= 300 && c.current.getBoundingClientRect().y > -400
			? actions.setVistaMenu("contacto")
			: actions.setVistaMenu("");
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div ref={h} className="container-fluid text-center p-0 m-0">
			<div id="principal" className="container-fluid p-0 m-0 text-center secciones">
				<Principal />
			</div>
			<div ref={i} id="info" className="container-fluid p-0 m-0 text-center secciones">
				{" "}
				<div className="container contenido">hola</div>{" "}
			</div>
			<div ref={p} id="Proyectos" className="container-fluid p-0 m-0 text-center secciones">
				{" "}
				<div className="container contenido">hola</div>{" "}
			</div>
			<div ref={c} id="contacto" className="container-fluid m-0 p-0 secciones" style={{ height: "80vh" }}>
				{" "}
				<div className="container text-center">hola</div>{" "}
			</div>
		</div>
	);
};
