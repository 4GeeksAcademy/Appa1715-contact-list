import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import  EditContact from "../views/single";
import { Link } from "react-router-dom";
export const Home = ({contact}) => {
	const { store, actions } = useContext(Context);
	const addEdidedInfo = () => {
		actions.submitInfo(contact.item)
	};
	const deleteInfo = () => {
		actions.cancelInfo (contact.item)
	};


	return (
		<>
		<div className="container">
			<div className="row justify-content-center">
				{store.contact.length === 0 ? (
					<div className="text-center col-12">
						<h1>No contacts found</h1>
					</div>
				): (
					store.contact.map((item)=> {
						return (
							<div className="col-12 d-flex align-items-center border">
								<div className="flex-grow-0">
									<div className="image-profile">
										<img src="https://picsum.photos/150" alt=""/>
									</div>
								</div>
								<div className="flex-grow-1 text-description" >
									<p>{item.name}</p>
									<p>{item.lastName}</p>
									<p>{item.phone}</p>
									<p>{item.email}</p>
									<p>{item.address}</p>
								</div>
								<div className="flex-grow-0 align-self-md-start">
								<Link to={`/edit/${item.id}`} className="btn me-4 mt-1">
									<i className="fas fa-pencil-alt"></i>
								</Link>
								
								<button className="btn mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
									<i className="fas fa-trash-alt"></i>
								</button>
								<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalLabel">Are you sure?</h5>
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div className="modal-body">
												If you delete this contact, all the information related to this person will be totally erased from the cloud.
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
												<button type="button" className="btn btn-danger">Delete</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						)
					})
				)}
			</div>
		</div>
	</>
	)
	
};
