import React, { useState } from "react";
import { BsBag, BsListCheck, BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { shopContext } from "../Context/Index";
import "./NavBar.css";

function NavBar() {
	const activeStyle = "underline";
	const [width, setWidth] = useState(window.innerWidth);
	const showToggleNav = width <= 768;
	const { cartNumber, setCategory, showItemBag, setShowItemBag } =
		React.useContext(shopContext);

	return (
		<nav className='navbar'>
			<ul className='first-ul'>
				<li>
					<NavLink to='/'>{BsShop}</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}>
						Home
					</NavLink>
				</li>
				{showToggleNav ? null : (
					<>
						<li
							onClick={() => {
								setCategory("clothing");
							}}>
							<NavLink to='/clothing'>Clothing</NavLink>
						</li>
						<li
							onClick={() => {
								setCategory("jewelery");
							}}>
							<NavLink to='/jewelery'>Jewelery</NavLink>
						</li>
						<li
							onClick={() => {
								setCategory("electronics");
							}}>
							<NavLink to='/electronics'>Electronics</NavLink>
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
				<li>
					<NavLink
						to='/ItemBag'
						onClick={() => {
							setShowItemBag(!showItemBag);
						}}>
						{BsBag}
					</NavLink>
				</li>
			</ul>
			<div className='cart-number'>{cartNumber}</div>
		</nav>
	);
}

export { NavBar };
