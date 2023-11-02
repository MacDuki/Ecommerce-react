import React from "react";
import { shopContext } from "../Context/Index";
import "./Search.css";

const Search = () => {
	const { setSearchProducts } = React.useContext(shopContext);

	return (
		<div className='input-search-container'>
			<span>Buscar:</span>
			<input
				onChange={(event) => {
					setSearchProducts(event.target.value);
				}}
				className='input-search'
				type='search'></input>
		</div>
	);
};

export { Search };
