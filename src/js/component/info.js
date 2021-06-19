import React from "react";

import "../../styles/info.scss";

export const Info = () => {
	const whatsAppLink = "https://api.whatsapp.com/send?phone=(+506)87147996&amp;text= Tengo una consulta sobre LIE";
	return (
		<div className="container-fluid m-0 p-0 fondoInfo">
			<div className="row">
				<div className="col-12 margen" />
				<div className="col-12">
					<a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
						Enviar WhatsApp
					</a>
				</div>
			</div>
		</div>
	);
};
