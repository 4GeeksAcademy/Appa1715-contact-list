import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

 const EditContact = ({contact}) => {
	const { actions } = useContext(Context);
	const [editInfo, setEditInfo]= useState({ ...contact});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setEditInfo((prevState)=>({
			...prevState,
			[name]: value,
		}));
	};
	const save = () => {
		actions.saveInfo(editInfo)
	};
	const deleteInfoContact = () => {
		actions.deleteInfo(contact.id)
	};

	
	return (
		<div>
			<h1 className="display-4">Add Contact Information</h1>
			<form>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Full Name
				</label>
				<input
            		type="text"
            		className="form-control"
            		id="name"
            		name="name"
            		value={editInfo.name}
            		onChange={handleChange}
          		/>
			</div>
			<div className="mb-3">
				<label htmlFor="address" className="form-label">
					Address
				</label>
				<input
            		type="text"
            		className="form-control"
            		id="Address"
            		name="Address"
            		value={editInfo.address}
            		onChange={handleChange}
          		/>
			</div>
			<div className="mb-3">
				<label htmlFor="phone" className="form-label">
					Phone Number
				</label>
				<input
            		type="text"
            		className="form-control"
            		id="phone"
            		name="phone"
            		value={editInfo.phone}
            		onChange={handleChange}
          		/>
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input
            		type="text"
            		className="form-control"
            		id="email"
            		name="email"
            		value={editInfo.email}
            		onChange={handleChange}
          		/>
			</div>
			<button
          		type="button"
          		className="btn btn-primary me-4 mb-3"
          		onClick={save}>
          		Save Changes
        	</button>
        	<button
          		type="button"
          		className="btn btn-secondary mb-3"
          		onClick={deleteInfoContact}>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default EditContact
