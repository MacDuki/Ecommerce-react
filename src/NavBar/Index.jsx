import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBag, BsListCheck, BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
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
				<div className='toggle-menu-container'>
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
				</div>
			);
		} else null;
	}

	return (
		<>
			<nav className='navbar'>
				<ul className='first-ul'>
					{!mobileWidth ? null : (
						<li>
							<AiOutlineMenu
								onClick={() => {
									setShowMenuMobile(!showMenuMobile);
								}}
							/>
						</li>
					)}
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
					<li
						onClick={() => {
							setPathActive("");
						}}>
						<NavLink to='/MyAccount'>{VscAccount}</NavLink>
					</li>
					<li
						onClick={() => {
							setPathActive("");
						}}>
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
			{toggleMenu()}
		</>
	);
}

export { NavBar };
