
import React, { useContext } from "react"

const Card = ({ contact }) => {
	const { store, actions } = useContext(Context);
  
	const handleSubmit = () => {
	  actions.startEditing(contact.id);
	};
  
	const handleDelete = () => {
	  actions.deleteContact(contact.id);
	};

	return (
		<div className="card" style="width: 18rem;">
  			<div className="card-header">
    			<h1>CONTACTS</h1>
				<button>ADD CONTACT</button>
  			</div>
			<ul className="list-group list-group-flush">
    			<li className="list-group-item">An item</li>
    			<li className="list-group-item">A second item</li>
    			<li className="list-group-item">A third item</li>
			</ul>
		</div>
	)
};

export default Card;