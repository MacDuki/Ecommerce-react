import React from "react";
import { NavLink } from "react-router-dom";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import "./Home.css";
function Home() {
	const { setCategory } = React.useContext(shopContext);
	return (
		<>
			<Layout>
				<section className='welcome-section'>
					<h1>Bienvenido a GARAGE SHOP </h1>
					<div className='img-container'>
						<div>
							<NavLink to='/clothing'>
								<img
									onClick={() => {
										setCategory("clothing");
									}}
									src='src\assets\img\clothing-model.jpeg'
								/>
							</NavLink>
						</div>
						<div>
							<NavLink to='/electronics'>
								<img
									onClick={() => {
										setCategory("electronics");
									}}
									src='src\assets\img\electronics-model.jpg'
								/>
							</NavLink>
						</div>
						<div>
							<NavLink to='/jewelery'>
								<img
									onClick={() => {
										setCategory("jewelery");
									}}
									src='src\assets\img\jewelery-model.jpeg'
								/>
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
