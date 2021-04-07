import React from "react";

const Lending= function(props) {
	return(
		<div className="container">
			<h1>Lending</h1>
			<button className="btn" onClick={() => {
					props.history.push("/reg");
				}}>Registration</button>
			<button className="btn" onClick={() => {
					props.history.push("/login");
				}}>Login</button>
		</div>
	)
}

export default Lending;
