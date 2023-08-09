import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { actions } = useContext(Context);
	const [addedContact, setAddedContact] = useState ({
		Name: "",
		lastName: "",
		email: "",
		phone: "",
		address: "",
	});

	const changeContact =(e) => {
		const {name, value} = e.target;
		setAddedContact({...addedContact,[name]: value});
	};

	const createContact = ()=> {
		actions.createdContact(addedContact);
	};

	return (
		<div className="container">
			<h3>New contact</h3>
			<form>
				<div className="the-add mb-3">
					<div className="mb-3">
						<div className="row">
							<div className="col">
								<label className="form-label">Name</label>
								<input type="text" 
								className="form-control" 
								placeholder="Enter name..."
								id="name"
								onChange={changeContact}></input>
							</div>
							<div className="col">
								<label className="form-label">Last name</label>
								<input type="text" 
								className="form-control" 
								placeholder="Enter last..."
								id="lastName"
								onChange={changeContact}></input>
							</div>
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Email Address</label>
						<input type="text" 
						className="form-control" 
						placeholder="Enter email..."
						id="email"
						onChange={changeContact}></input>
					</div>
					<div className="mb-3">
						<label className="form-label">Phone Number</label>
						<input type="text" 
						className="form-control"
						placeholder="Enter phone nu..." 
						id="phone"
						onChange={changeContact}></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputtext1" className="form-label">Address</label>
						<input type="text" 
						className="form-control" 
						placeholder="Enter addre..."
						id="address"
						onChange={changeContact}></input>
					</div>
					<div className="d-grid gap-2">
  						<button className="btn btn-primary" 
						type="button"
						onClick={createContact}>Save</button>
						<Link to="/">
							<button className="btn link-primary ">or get back to contacts...</button>
						</Link>
					</div>				
				</div>
			</form>
			
		</div>
	);
}
