import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const EditContact = ({ contact }) => {
	const { actions } = useContext(Context);
	const [ addEdidedContact, setAddEdidedContact] = useState ({
		...contact, 
	});
	const changedContact = (e) =>{
		const {name, value} = e.target;
		setAddEdidedContact((prevState)=>({
			...prevState,
			[name]: value,
		}));
	};

	const donChange = () => {
		actions.cancel(contact.id)
	};

	return (
		<div>
			<h3>Edit contact</h3>
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
								onChange={changedContact}></input>
								
							</div>
							<div className="col">
								<label className="form-label">Last name</label>
								<input type="text" 
								className="form-control" 
								placeholder="Enter last..."
								id="lastName"
								value={addEdidedContact}
								onChange={changedContact}></input>
							</div>
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Email Address</label>
						<input type="text" 
						className="form-control" 
						placeholder="Enter email..."
						id="email"
						value={addEdidedContact}
						onChange={changedContact}></input>
					</div>
					<div className="mb-3">
						<label className="form-label">Phone Number</label>
						<input type="text" 
						className="form-control"
						placeholder="Enter phone nu..." 
						id="phone"
						value={addEdidedContact}
						onChange={changedContact}></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputtext1" className="form-label">Address</label>
						<input type="text" 
						className="form-control" 
						placeholder="Enter addre..."
						id="address"
						value={addEdidedContact}
						onChange={changedContact}></input>
					</div>
					<div className="d-grid gap-2">
  						<button className="btn btn-primary" 
						type="button"
						onClick={changedContact}>Save changes</button>
						<Link to="/">
							<button className="btn link-primary"
							type="button"
							onClick={donChange}>or get back to contacts...</button>
						</Link>
					</div>			
				</div>
			</form>
		</div>
	
	)

}

export default EditContact
