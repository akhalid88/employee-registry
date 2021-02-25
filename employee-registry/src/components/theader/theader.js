import React from "react";
import "./theader.css";

function Header(props) {
	return (
		<thead>
			<tr>
				<th>Image</th>
				<th 
					onClick={props.handleSortUsers}
					data-value={props.sorter}>
					Name<i className="fas fa-caret-down"></i>
				</th>
				<th>Phone</th>
				<th>Email</th>
				<th>DOB</th>
			</tr>
		</thead>
	);
}

export default Header;