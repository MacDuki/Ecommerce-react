import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsBag, BsListCheck, BsShop } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { shopContext } from "../Context/Index";
import "./NavBar.css";

function NavBar() {
	const { cartNumber, setCategory, showItemBag, setShowItemBag, mobileWidth } =
		React.useContext(shopContext);

	const [pathActive, setPathActive] = useState("");
	const [showMenuMobile, setShowMenuMobile] = useState(false);
	function setStylePath(path) {
		if (path === pathActive) {
			return "path-active";
		} else {
			return "";
		}
	}

	function toggleMenu() {
		if (showMenuMobile) {
			return (
				<motion.div
					layout
					animate={{ scale: 1, y: 0 }}
					initial={{ scale: 0.2, y: -100 }}
					transition={{ type: "linear", duration: 0.3 }}
					className='toggle-menu-container'>
					<li
						className={setStylePath("clothing")}
						onClick={() => {
							setCategory("clothing");
							setPathActive("clothing");
							setShowMenuMobile(false);
							setShowItemBag(false);
						}}>
						<NavLink to='/clothing'>Ropa</NavLink>
					</li>
					<li
						className={setStylePath("jewelery")}
						onClick={() => {
							setCategory("jewelery");
							setShowMenuMobile(false);
							setPathActive("jewelery");
							setShowItemBag(false);
						}}>
						<NavLink to='/jewelery'>Joyería</NavLink>
					</li>
					<li
						className={setStylePath("electronics")}
						onClick={() => {
							setCategory("electronics");
							setPathActive("electronics");
							setShowMenuMobile(false);
							setShowItemBag(false);
						}}>
						<NavLink to='/electronics'>Electronica</NavLink>
					</li>
				</motion.div>
			);
		} else null;
	}

	return (
		<>
			<nav className='navbar'>
				<ul className='first-ul'>
					{!mobileWidth ? null : (
						<li>
							{showMenuMobile ? (
								<AiOutlineClose
									onClick={() => {
										setShowMenuMobile(!showMenuMobile);
										setShowItemBag(false);
									}}
								/>
							) : (
								<AiOutlineMenu
									onClick={() => {
										setShowMenuMobile(!showMenuMobile);
										setShowItemBag(false);
									}}
								/>
							)}
						</li>
					)}
					<li
						onClick={() => {
							setPathActive("");
							setShowMenuMobile(false);
							setShowItemBag(false);
						}}>
						<NavLink to='/'>{BsShop}</NavLink>
					</li>
					<li
						className={setStylePath("Search")}
						onClick={() => {
							setPathActive("Search");
							setShowMenuMobile(false);
							setShowItemBag(false);
						}}>
						<NavLink to='/SearchProducts'>Buscar</NavLink>
					</li>
					{mobileWidth ? null : (
						<>
							<li
								className={setStylePath("clothing")}
								onClick={() => {
									setCategory("clothing");
									setPathActive("clothing");
									setShowItemBag(false);
								}}>
								<NavLink to='/clothing'>Ropa</NavLink>
							</li>
							<li
								className={setStylePath("jewelery")}
								onClick={() => {
									setCategory("jewelery");
									setPathActive("jewelery");
									setShowItemBag(false);
								}}>
								<NavLink to='/jewelery'>Joyería</NavLink>
							</li>
							<li
								className={setStylePath("electronics")}
								onClick={() => {
									setCategory("electronics");
									setPathActive("electronics");
									setShowItemBag(false);
								}}>
								<NavLink to='/electronics'>Electronica</NavLink>
							</li>
						</>
					)}
				</ul>
				<ul className='second-ul'>
					<li
						onClick={() => {
							setPathActive("");
							setShowMenuMobile(false);
							setShowItemBag(false);
						}}>
						<NavLink to='/MyOrders'>{BsListCheck}</NavLink>
					</li>
					<li
						onClick={() => {
							setShowItemBag(!showItemBag);
							setShowMenuMobile(false);
						}}>
						<BsBag />
					</li>
				</ul>
				<div className='cart-number'>{cartNumber}</div>
			</nav>
			{toggleMenu()}
		</>
	);
}

export { NavBar };
