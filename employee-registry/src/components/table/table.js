import React from "react";
import "./table.css";

import Header from "../theader/theader";
import Row from "../trow/trow";

function Table() {
	return (
		<div className="grid-x">
			<table className="hover">
				<Header />
				<tbody>
					<Row />
					<Row />
					<Row />
					<Row />
				</tbody>
			</table>
		</div>
	);
}

export default Table;