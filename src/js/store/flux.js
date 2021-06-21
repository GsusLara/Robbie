const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vistaMenu: "SeccionUno"
		},
		actions: {
			setVistaMenu: item => {
				setStore({ vistaMenu: item });
			}
		}
	};
};

export default getState;
