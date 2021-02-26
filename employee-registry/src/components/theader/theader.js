import React from "react";
import "./theader.css";

function Header(props) {
	// let icon = "";
	// if(props.sorter === "") {
	// 	icon = '<i class="fas fa-sort"></i>';
	// } else if (props.sorter === "ascending") {
	// 	icon = '<i class="fas fa-sort-up"></i>';
	// } else if (props.sorter === "descending") {
	// 	icon = '<i class="fas fa-sort-down"></i>';
	// }
	//    <i class="fas fa-sort"></i>
	//    <i class="fas fa-sort-up"></i>	
	//    <i class="fas fa-sort-down"></i>
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