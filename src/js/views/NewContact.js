import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from ".../store/appContext";

import "../../styles/demo.css";

export const NewContact = () => {
	const { store, actions } = useContext(Context);
	const [addContact, setAddContact] = useState ({
		name: "",
		address: "",
		phone: "",
		email: "",
		avatar: "",
		});
	
	const handleOnChange = (e) => {
		const {name, value} = e.target;
		setAddContact({...addContact, [name]: value})
	};

	const createContact = () => {
		actions.saveAddContact (addContact);
	}

	return (
		<div className="container">
			<h1>Create a New Contact</h1>
			<div>
				<label>Name</label>
				<input type="text"
				placeholder="Enter Name"
				value={addContact.name}
				onChange={handleOnChange}>
				</input>
			</div>
			<div>
				<label>Address</label>
				<input type="text"
				placeholder="Enter Address"
				value={addContact.address}
				onChange={handleOnChange}>
				</input>
			</div>
			<div>
				<label>Phone Number</label>
				<input type="text"
				placeholder="Phone number"
				value={addContact.phone}
				onChange={handleOnChange}>
				</input>
			</div>
			<div>
				<label>Email</label>
				<input type="text"
				placeholder="Email Address"
				value={addContact.email}
				onChange={handleOnChange}>
				</input>
			</div>
			<Link to="/">
				<button 
				className="btn btn-primary"
				onClick={createContact}>
					Save contact
				</button>
			</Link>
			<Link to="/">
				<button 
				className="btn btn-primary">
					or get back to contact list
				</button>
			</Link>
		</div>
	);
};
