import React from "react";
import "./table.css";

import Header from "../theader/theader";
import Row from "../trow/trow";

// function Table({ name, image, email, phone, dob }) {
function Table(props) {
	// console.log("I hate this");
	// console.log(props);
	// const users = props;
	return (
		<div className="grid-x">
			<table className="hover">
				<Header />
				<tbody>
					{props.users.map(user => (
						<Row
							name={user.name}
							image={user.image}
							email={user.email}
							phone={user.phone}
							dob={user.dob}
							key={user.name}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Table;