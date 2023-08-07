
import React, { useContext } from "react"

const Card = ({ contact }) => {
	const { store, actions } = useContext(Context);
  
	const handleSubmit = () => {
	  actions.acceptSubmit(contact.id);
	};
  
	const handleDelete = () => {
	  actions.deleteContact(contact.id);
	};

	return (

			<div className="card" style="width: 18rem;">
				<div className="card-header">
					<h1>CONTACTS</h1>
				</div>
				<div className="row ">
          			<div className="col-md-4">
            			<img
              			src={contact.avatar}
              			className="img-fluid rounded-start"
              			alt={contact.name}
            			/>
          			</div>
          		<div className="col-md-4">
            		<div className="card-body">
              			<h5 className="card-title">{contact.name}</h5>
              			<p className="card-text">📌  {contact.address}</p>
						<p className="card-text">☎️  {contact.phone}</p>
              			<p className="card-text">📧  {contact.email}</p>
					</div>
				</div>
				<div className="col-md-3 d-flex flex-column mt-4 ">
					{!contact.isSubmiting ? (
						<>
							<button
							type="button"
							className="btn btn-primary mt-3 me-4"
							onClick={handleSubmit}>Submit</button>
							<button type="button"
							className="btn btn-primary mt-3 me-4"
							onClick={handleDelete}>Cancel</button>
						</>
					) : ( <editContact contact ={contact}/>)}
				</div>
			</div>
		</div>
	)
};

export default Card;