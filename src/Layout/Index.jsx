import React, { useContext } from "react";
import { shopContext } from "../Context/Index";
import "./layout.css";

function Layout({ children }) {
	const { cssClassHomeLayout, mobileWidth, showItemBag } =
		useContext(shopContext);
	function renderFooter() {
		if (mobileWidth) {
			if (!showItemBag) {
				return (
					<footer className='footer'>
						<p className='info-p'>sdsddsdsddsdsds </p>
						<p className='mention1-p'> dsdssdsddsd </p>
						<p className='mention2-p'>dsdsd ssdsd</p>
					</footer>
				);
			}
		} else
			return (
				<footer className='footer'>
					<p className='info-p'>sdsddsdsddsdsds </p>
					<p className='mention1-p'> dsdssdsddsd </p>
					<p className='mention2-p'>dsdsd ssdsd</p>
				</footer>
			);
	}
	return (
		<>
			<main className={cssClassHomeLayout + " layout"}>{children}</main>
			{renderFooter()}
		</>
	);
}

export { Layout };
