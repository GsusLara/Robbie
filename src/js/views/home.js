import React, { useEffect, useRef, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Principal } from "../component/principal";
import { Recursos } from "../component/recursos";
import { Proyecto } from "../component/proyecto";
import { Info } from "../component/info";
export const Home = () => {
	const { store, actions } = useContext(Context);

	const u = useRef();
	const d = useRef();
	const t = useRef();
	const c = useRef();

	const handleScroll = () => {
		u.current.getBoundingClientRect().y <= 0 && u.current.getBoundingClientRect().y > -400
			? actions.setVistaMenu("SeccionUno")
			: d.current.getBoundingClientRect().y <= 300 && d.current.getBoundingClientRect().y > -1100
			? actions.setVistaMenu("SeccionDos")
			: t.current.getBoundingClientRect().y <= 350 && t.current.getBoundingClientRect().y > -800
			? actions.setVistaMenu("SeccionTres")
			: c.current.getBoundingClientRect().y <= 300 && c.current.getBoundingClientRect().y > -400
			? actions.setVistaMenu("SeccionCuatro")
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
		<div className="container-fluid text-center p-0 m-0">
			<div ref={u} id="SeccionUno" className="container-fluid p-0 m-0 text-center secciones">
				<Principal />
			</div>
			<div ref={d} id="SeccionDos" className="container-fluid p-0 m-0 text-center">
				<Proyecto />
			</div>
			<div ref={t} id="SeccionTres" className="container-fluid p-0 m-0 text-center">
				<Recursos />
			</div>
			<div ref={c} id="SeccionCuatro" className="container-fluid m-0 p-0 secciones" style={{ height: "80vh" }}>
				{" "}
				<div className="container text-center">
					<Info />
				</div>{" "}
			</div>
		</div>
	);
};
