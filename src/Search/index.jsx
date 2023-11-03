import { motion } from "framer-motion";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { shopContext } from "../Context/Index";
import "./Search.css";

const Search = () => {
	const { setSearchProducts } = React.useContext(shopContext);

	return (
		<motion.div
			layout
			transition={{ duration: 1.2 }}
			className='input-search-container'>
			<BsSearch className='search-button' />
			<motion.input
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.2 },
				}}
				whileFocus={{ scale: 1.1, transition: { duration: 0.1 } }}
				onChange={(event) => {
					setSearchProducts(event.target.value);
				}}
				className='input-search'
				type='search'></motion.input>
		</motion.div>
	);
};

export { Search };
