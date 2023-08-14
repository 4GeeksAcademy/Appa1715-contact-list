import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
 const EditContact = ({contact}) => {


	return (
		<div className="container">
			<h3>Edit contact info</h3>
			<form>
				<div className="the-add mb-3">
					<div className="mb-3">
						<div className="row">
							<div className="col">
								<label className="form-label">Name</label>
								<input type="text" 
								className="form-control" 
								placeholder="Enter name..."></input>
								
							</div>
							<div className="col">
								<label className="form-label">Last name</label>
								<input type="text" 
								className="form-control" 
								placeholder="Enter last..."
								></input>
							</div>
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Email Address</label>
						<input type="text" 
						className="form-control" 
						placeholder="Enter email..."
						></input>
					</div>
					<div className="mb-3">
						<label className="form-label">Phone Number</label>
						<input type="text" 
						className="form-control"
						placeholder="Enter phone nu..." 
						></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputtext1" className="form-label">Address</label>
						<input type="text" 
						className="form-control" 
						placeholder="Enter addre..."
						></input>
					</div>
					<button className="btn btn-primary ">Submit</button>
					<Link to="/">
							<button className="btn btn-secondary ">Cancel</button>
					</Link>
  								
				</div>
			</form>
			
		</div>
	);
};

export default EditContact
