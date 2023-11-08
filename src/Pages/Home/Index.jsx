import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import { ItemBag } from "../ItemBag/Index";
import "./Home.css";
function Home() {
	const { setCategory } = React.useContext(shopContext);
	const [isHoveredE, setIsHoveredE] = useState(false);
	const [isHoveredJ, setIsHoveredJ] = useState(false);
	const [isHoveredC, setIsHoveredC] = useState(false);

	function handleParrafoCategory(category) {
		return <p className='parrafo-category'>{category}</p>;
	}

	return (
		<>
			<Layout>
				<ItemBag />
				<motion.section
					layout
					animate={{ scale: 1 }}
					initial={{ scale: 0.2 }}
					transition={{ type: "linear", duration: 0.5 }}
					className='welcome-section'>
					<h1>Bienvenido a GARAGE SHOP </h1>
					<div className='welcome-boxes-container'>
						<NavLink className={"aElec"} to='/electronics'>
							<motion.div
								layout
								animate={{ x: 0 }}
								initial={{ x: -500 }}
								transition={{ type: "linear", duration: 1 }}
								className='electronic-box-container'>
								<img
									onClick={() => {
										setCategory("electronics");
									}}
									onMouseEnter={() => {
										setIsHoveredE(true);
									}}
									onMouseLeave={() => {
										setIsHoveredE(false);
									}}
									src='src\assets\img\electronics-model.jpg'
								/>
								{isHoveredE ? (
									<motion.div
										animate={{ x: 0 }}
										initial={{ x: -100 }}
										transition={{ type: "linear", duration: 0.4 }}
										onMouseEnter={() => {
											setIsHoveredE(true);
										}}
										onMouseLeave={() => {
											setIsHoveredE(false);
										}}
										className='container-parrafo-categoryE'>
										{handleParrafoCategory("Electronica")}
									</motion.div>
								) : null}
							</motion.div>
						</NavLink>
						<motion.div
							layout
							animate={{ x: 0 }}
							initial={{ x: 500 }}
							transition={{ type: "linear", duration: 1 }}
							className='two-boxes-container'>
							<NavLink className={"aCloth"} to='/clothing'>
								<div>
									<img
										onClick={() => {
											setCategory("clothing");
										}}
										onMouseEnter={() => {
											setIsHoveredC(true);
										}}
										onMouseLeave={() => {
											setIsHoveredC(false);
										}}
										src='src\assets\img\clothing-model.jpeg'
									/>
									{isHoveredC ? (
										<motion.div
											animate={{ y: 0 }}
											initial={{ y: 20 }}
											transition={{ type: "linear", duration: 0.4 }}
											onMouseEnter={() => {
												setIsHoveredC(true);
											}}
											onMouseLeave={() => {
												setIsHoveredC(false);
											}}
											className='container-parrafo-category-twoBoxes'>
											{handleParrafoCategory("Ropa")}
										</motion.div>
									) : null}
								</div>
							</NavLink>
							<NavLink className={"aJew"} to='/jewelery'>
								<div>
									<img
										onClick={() => {
											setCategory("jewelery");
										}}
										onMouseEnter={() => {
											setIsHoveredJ(true);
										}}
										onMouseLeave={() => {
											setIsHoveredJ(false);
										}}
										src='src\assets\img\jewelery-model.jpeg'
									/>
									{isHoveredJ ? (
										<motion.div
											animate={{ y: 0 }}
											initial={{ y: 20 }}
											transition={{ type: "linear", duration: 0.4 }}
											onMouseEnter={() => {
												setIsHoveredJ(true);
											}}
											onMouseLeave={() => {
												setIsHoveredJ(false);
											}}
											className='container-parrafo-category-twoBoxes'>
											{handleParrafoCategory("Joyería")}
										</motion.div>
									) : null}
								</div>
							</NavLink>
						</motion.div>
					</div>
				</motion.section>
				<section>
					<h2></h2>
					<article></article>
				</section>
				<footer>
					<p></p>
				</footer>
			</Layout>
		</>
	);
}

export { Home };
