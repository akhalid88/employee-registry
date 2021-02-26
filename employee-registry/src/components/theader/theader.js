import React from "react";
import "./theader.css";

function Header(props) {
	return (
		<thead>
			<tr>
				<th>Image</th>
				<th className="sortButton"
					onClick={props.handleSortUsers}
					data-value={props.sorter}>
					Name <i className="fas fa-sort"></i>
				</th>
				<th>Phone</th>
				<th>Email</th>
				<th className="sortButton"
					onClick={props.handleSortDob}
					data-value={props.dobSorter}>
					DOB <i className="fas fa-sort"></i>
				</th>
			</tr>
		</thead>
	);
}

export default Header;