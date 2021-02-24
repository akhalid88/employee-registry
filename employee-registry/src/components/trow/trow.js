import React from "react";
import  "./trow.css";

function Row({ name, image, email, phone, dob }) {
	return (
		<tr>
			<td><img className="card-img" src={image} alt={name} /></td>
			<td>{name}</td>
			<td>{phone}</td>
			<td><a href="mailto:{email}">{email}</a></td>
			<td>{dob}</td>
		</tr>
	);
}

export default Row;