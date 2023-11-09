import React, { useState } from "react";
import { BsBag, BsListCheck, BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { NavLink, useLocation } from "react-router-dom";
import { shopContext } from "../Context/Index";
import "./NavBar.css";

function NavBar() {
	const { cartNumber, setCategory, showItemBag, setShowItemBag, mobileWidth } =
		React.useContext(shopContext);
	const location = useLocation();
	const pathname = location.pathname;

	const [pathActive, setPathActive] = useState("");

	function setStylePath(path) {
		if (path === pathActive) {
			return "path-active";
		} else {
			return "";
		}
	}
	return (
		<nav className='navbar'>
			<ul className='first-ul'>
				<li
					onClick={() => {
						setPathActive("");
					}}>
					<NavLink to='/'>{BsShop}</NavLink>
				</li>
				<li
					className={setStylePath("Search")}
					onClick={() => {
						setPathActive("Search");
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
							}}>
							<NavLink to='/clothing'>Ropa</NavLink>
						</li>
						<li
							className={setStylePath("jewelery")}
							onClick={() => {
								setCategory("jewelery");
								setPathActive("jewelery");
							}}>
							<NavLink to='/jewelery'>Joyería</NavLink>
						</li>
						<li
							className={setStylePath("electronics")}
							onClick={() => {
								setCategory("electronics");
								setPathActive("electronics");
							}}>
							<NavLink to='/electronics'>Electronica</NavLink>
						</li>
					</>
				)}
			</ul>
			<ul className='second-ul'>
				<li>
					<NavLink to='/MyAccount'>{VscAccount}</NavLink>
				</li>
				<li>
					<NavLink to='/MyOrders'>{BsListCheck}</NavLink>
				</li>
				<li
					onClick={() => {
						setShowItemBag(!showItemBag);
					}}>
					<BsBag />
				</li>
			</ul>
			<div className='cart-number'>{cartNumber}</div>
		</nav>
	);
}

export { NavBar };
