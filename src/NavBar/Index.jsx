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
	const { cartNumber } = React.useContext(shopContext);

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
						<li>
							<NavLink to='/'>Category 1</NavLink>
						</li>
						<li>
							<NavLink to='/'>Category 2</NavLink>
						</li>
						<li>
							<NavLink to='/'>Category 3</NavLink>
						</li>
						<li>
							<NavLink to='/'>Category 4</NavLink>
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
					<NavLink to='/ItemBag'>{BsBag}</NavLink>
				</li>
			</ul>
			<div className='cart-number'>{cartNumber}</div>
		</nav>
	);
}

export { NavBar };
