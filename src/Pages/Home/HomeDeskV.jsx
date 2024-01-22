import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import { shopContext } from "../../Context/Index";
import globo from "../../assets/Globo.gif";
import carritoComp from "../../assets/carrito-de-compras.gif";
import devDinero from "../../assets/devolucion-de-dinero.gif";
import reloj from "../../assets/reloj.gif";
import "./Home.css";
import "./QuienesSomos.css";
import "./Span.css";
function HomeDeskV() {
	const { setCategory } = React.useContext(shopContext);
	return (
		<>
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
								src='src\assets\img\electronics-model.jpg'
							/>

							<div className='container-parrafo-categoryE'>
								<p className='parrafo-category'>Electronica</p>
							</div>
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
									src='src\assets\img\clothing-model.jpeg'
								/>

								<div className='container-parrafo-category-twoBoxes'>
									<p className='parrafo-category'>Ropa</p>
								</div>
							</div>
						</NavLink>
						<NavLink className={"aJew"} to='/jewelery'>
							<div>
								<img
									loading='lazy'
									onClick={() => {
										setCategory("jewelery");
									}}
									src='src\assets\img\jewelery-model.jpeg'
								/>

								<div className='container-parrafo-category-twoBoxes'>
									<p className='parrafo-category'>Joyería</p>
								</div>
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
						Descubre nuestro exclusivo mercado en línea, donde cada artículo
						cuenta una historia única. Aunque nuestro catálogo es selecto, cada
						producto ha sido elegido con cuidado. <br /> Te invitamos a explorar
						y encontrar tesoros inesperados en nuestro espacio virtual.
					</p>
				</article>
				<div className='quienes-container'>
					<div className='linea-quienes'>
						<div>
							<img loading='lazy' src={carritoComp} />
							<p>
								Aunque somos un mercado pequeño, encontraras artículos
								electronicos, ropa y joyas. <br />
							</p>
						</div>
						<div>
							<img loading='lazy' src={globo} />
							<p>
								Desde nuestro pequeño garage hasta tu hogar en cualquier rincón
								del mundo.
							</p>
						</div>
					</div>
					<div className='linea-quienes'>
						<div>
							<img loading='lazy' src={devDinero} />
							<p>
								Compra con confianza: devolución garantizada ante cualquier
								desperfecto.
							</p>
						</div>
						<div>
							<img loading='lazy' src={reloj} />
							<p>
								Entendemos tu impaciencia. Con tiempos de espera minimizados,
								aseguramos una entrega rápida y eficiente.
							</p>
						</div>
					</div>
				</div>
			</motion.section>
		</>
	);
}

export { HomeDeskV };
