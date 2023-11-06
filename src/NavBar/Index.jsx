import React from "react";
import { BsBag, BsListCheck, BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { shopContext } from "../Context/Index";
import "./NavBar.css";

function NavBar() {
	const {
		cartNumber,
		setCategory,
		showItemBag,
		setShowItemBag,
		mobileWidth,
		layout,
	} = React.useContext(shopContext);

	return (
		<nav className='navbar'>
			<ul className='first-ul'>
				<li>
					<NavLink to='/'>{BsShop}</NavLink>
				</li>
				<li>
					<NavLink to='/SearchProducts'>Search</NavLink>
				</li>
				{mobileWidth ? null : (
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
