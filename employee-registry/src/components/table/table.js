import React from "react";
import "./table.css";

import Header from "../theader/theader";
import Row from "../trow/trow";

function Table(props) {
	let newUsers = props.users;
	if(props.searchTerm) {
		newUsers = newUsers.filter(user => user.name.toLowerCase().includes(props.searchTerm.toLowerCase()));
	} 
	// else {
	// 	newUsers = props.users;
	// }
	
	// setUsers(users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
    
	return (
		<div className="grid-x">
			<table className="hover">
				<Header />
				<tbody>
					{newUsers.map(user => (
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