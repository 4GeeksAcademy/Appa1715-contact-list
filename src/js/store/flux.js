const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
				{id: 1,
				name: "Kristel Ester Corrales Granados",
				address: "Hatillo 4, Detrás de Plaza América",
				phone: "(+506)8894-0467",
				email: "kristelestercorrales@gmail.com",
				avatar: "",
			},
		],
	},
	actions: {
		editInfo: (contactId) => {
			const store = getStore();
			const contact = store.contact.map((contact)=>{
				if (contact.id === contactId){
					return {...contact, isChanging: true};
				} else {return contact};
			});
			setStore({contact});
		},
	}
	
};}

export default getState;
