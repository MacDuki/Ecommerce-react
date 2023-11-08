import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
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
				<section className='welcome-section'>
					<h1>Bienvenido a GARAGE SHOP </h1>
					<div className='welcome-boxes-container'>
						<NavLink className={"aElec"} to='/electronics'>
							<div className='electronic-box-container'>
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
									<div
										onMouseEnter={() => {
											setIsHoveredE(true);
										}}
										onMouseLeave={() => {
											setIsHoveredE(false);
										}}
										className='container-parrafo-categoryE'>
										{handleParrafoCategory("Electronica")}
									</div>
								) : null}
							</div>
						</NavLink>
						<div className='two-boxes-container'>
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
										<div
											onMouseEnter={() => {
												setIsHoveredC(true);
											}}
											onMouseLeave={() => {
												setIsHoveredC(false);
											}}
											className='container-parrafo-category-twoBoxes'>
											{handleParrafoCategory("Ropa")}
										</div>
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
										<div
											onMouseEnter={() => {
												setIsHoveredJ(true);
											}}
											onMouseLeave={() => {
												setIsHoveredJ(false);
											}}
											className='container-parrafo-category-twoBoxes'>
											{handleParrafoCategory("Joyería")}
										</div>
									) : null}
								</div>
							</NavLink>
						</div>
					</div>
				</section>
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
