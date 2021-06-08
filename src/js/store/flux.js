const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vistaMenu: "home"
		},
		actions: {
			setVistaMenu: item => {
				setStore({ vistaMenu: item });
			}
		}
	};
};

export default getState;
