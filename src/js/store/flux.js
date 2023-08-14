const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
				{
					id: 1,
					name: "Kristel Ester",
					lastName: "Corrales Granados",
					email: "kris.corrales08@gmail.com",
					phone: "+506 8894 0467",
					address: "Hatillo 4, San José",
				},
				{
					id: 2,
					name: "Steve Alonso",
					lastName: "Ramírez Bonilla",
					email: "alonbo30@gmail.com",
					phone: "+506 8669 7618",
					address: "Hatillo 8, San José",
				},
				{
					id: 3,
					name: "Carlos",
					lastName: "Calderón Zapata",
					email: "charliebrown1875@gmail.com",
					phone: "+506 8364 0095",
					address: "El Llano, Alajuela",
				},
				{
					id: 4,
					name: "Coline Stacy",
					lastName: "Marin Chinchilla",
					email: "cmarin@gmail.com",
					phone: "+506 8562 1538",
					address: "Desamparados, San José",
				},
			]
		},
		actions: {
			startEditing: (contactId) => {
				const store = getStore();
				const contacts = store.contacts.map((contact) => {
				  if (contact.id === contactId) {
					return { ...contact, isEditing: true };
				  } else {
					return contact;
				  }
				});
				setStore({ contacts });
			  },
		
			  cancelEditing: (contactId) => {
				const store = getStore();
				const contacts = store.contacts.map((contact) => {
				  if (contact.id === contactId) {
					return { ...contact, isEditing: false };
				  } else {
					return contact;
				  }
				});
				setStore({ contacts });
			  },
		
			  saveEditedContact: (editedContact) => {
				const store = getStore();
				const contacts = store.contacts.map((contact) => {
				  if (contact.id === editedContact.id) {
					return editedContact;
				  } else {
					return contact;
				  }
				});
				setStore({ contacts });
			  },
		
			  saveNewContact: (newContact) => {
				const store = getStore();
				const newId = store.contacts.length + 1;
				const contacts = [
				  ...store.contacts,
				  { ...newContact, id: newId, isEditing: false },
				];
				setStore({ contacts });
			  },
		
			  deleteContact: (contactId) => {
				const store = getStore();
				const filteredContacts = store.contacts.filter(
				  (contact) => contact.id !== contactId
				);
				setStore({ contacts: filteredContacts });
			  },
			},
		  };
	};


export default getState;
