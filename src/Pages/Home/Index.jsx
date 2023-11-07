import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import "./Home.css";
function Home() {
	const { setCategory } = React.useContext(shopContext);
	const [isHoveredE, setIsHoveredE] = useState(false);
	let parrafoBox;

	function handleHovered(Which) {
		if (Which === "Electronica") {
			parrafoBox = Which;
			return;
		} else if (Which === "Ropa") {
			parrafoBox = Which;
			return <p className='parrafo-category'>{parrafoBox}</p>;
		} else {
			parrafoBox = Which;
			return <p className='parrafo-category'>{parrafoBox}</p>;
		}
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
									<p className='parrafo-category'>Electronica</p>
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
										onMouseEnter={() => {}}
										onMouseLeave={() => {}}
										src='src\assets\img\clothing-model.jpeg'
									/>
								</div>
							</NavLink>
							<NavLink className={"aJew"} to='/jewelery'>
								<div>
									<img
										onClick={() => {
											setCategory("jewelery");
										}}
										onMouseEnter={() => {}}
										onMouseLeave={() => {}}
										src='src\assets\img\jewelery-model.jpeg'
									/>
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
