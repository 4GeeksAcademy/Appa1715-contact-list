import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { EditContact } from "../views/single";

export const Home = ({contact}) => {
	const { store, actions } = useContext(Context);
	const addEdidedInfo = () => {
		actions.submitInfo(contact.id)
	};
	const deleteInfo = () => {
		actions.cancelInfo (contact.id)
	};


	return (
		<div className="text-center mt-5">
			<div className="card" >
				<div className="row">
					<div className="col">
						
					</div>
					<div className="col-5">
						<div className="card-body">
							<h5 className="card-title">{Name}</h5>
							<p className="card-text"><strong></strong>{address}</p>
							<p className="card-text"><strong></strong>{phone}</p>
							<p className="card-text"><strong></strong>{email}</p>

						</div>
					</div>
					<div className="col">
						{!contact.isEditing ? (
							<>
								<button type="button" 
								className="btn btn-success"
								onClick={addEdidedInfo}>Submit</button>
								<button type="button" 
								className="btn btn-success"
								onClick={deleteInfo}>Cancel</button>
							</>): (<EditContact contact={contact} />)}
					</div>
			</div>
		</div>
	</div>
	)
	
};
