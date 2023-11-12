import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import { ItemBag } from "../ItemBag/Index";
import "./Home.css";
import "./QuienesSomos.css";
import "./Span.css";
function Home() {
	const { setCategory, showItemBag } = React.useContext(shopContext);
	const [isHoveredE, setIsHoveredE] = useState(false);
	const [isHoveredJ, setIsHoveredJ] = useState(false);
	const [isHoveredC, setIsHoveredC] = useState(false);

	function handleParrafoCategory(category) {
		return <p className='parrafo-category'>{category}</p>;
	}

	return (
		<>
			<ItemBag />
			<Layout>
				{!showItemBag ? (
					<>
						{" "}
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
											loading='lazy'
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
												loading='lazy'
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
												loading='lazy'
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
						<motion.span
							layout
							whileInView={{ x: 0, opacity: 1 }}
							initial={{ x: -500, opacity: 0 }}
							transition={{ type: "linear", duration: 1 }}
							className='middle-span-home'>
							<img loading='lazy' src='src\assets\img\mini-logo-model.jpeg' />
						</motion.span>
						<motion.section
							layout
							whileInView={{ scale: 1, opacity: 1 }}
							initial={{ scale: 1, opacity: 0 }}
							transition={{ type: "linear", duration: 1 }}
							className='quienesSomos-section'>
							<h2>¿Quiénes Somos?</h2>
							<article className='quienes-info'>
								<p>
									Descubre nuestro exclusivo mercado en línea, donde cada
									artículo cuenta una historia única. Aunque nuestro catálogo es
									selecto, cada producto ha sido elegido con cuidado. <br /> Te
									invitamos a explorar y encontrar tesoros inesperados en
									nuestro espacio virtual.
								</p>
							</article>
							<div className='quienes-container'>
								<div className='linea-quienes'>
									<div>
										<img
											loading='lazy'
											src='src\assets\carrito-de-compras.gif'
										/>
										<p>
											Aunque somos un mercado pequeño, nuestra selección es
											sorprendentemente variada. Desde artículos electronicos
											hasta joyas únicas. <br />
										</p>
									</div>
									<div>
										<img loading='lazy' src='src\assets\Globo.gif' />
										<p>
											Desde nuestro pequeño garage hasta tu hogar en cualquier
											rincón del mundo.
										</p>
									</div>
								</div>
								<div className='linea-quienes'>
									<div>
										<img
											loading='lazy'
											src='src\assets\devolucion-de-dinero.gif'
										/>
										<p>
											Compra con confianza: devolución garantizada ante
											cualquier desperfecto.
										</p>
									</div>
									<div>
										<img loading='lazy' src='src\assets\reloj.gif' />
										<p>
											Entendemos tu impaciencia. Con tiempos de espera
											minimizados, aseguramos una entrega rápida y eficiente.
										</p>
									</div>
								</div>
							</div>
						</motion.section>{" "}
					</>
				) : null}
			</Layout>
		</>
	);
}

export { Home };
