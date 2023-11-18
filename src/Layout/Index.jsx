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
						<p className='info-p'>
							<a
								href='https://www.flaticon.es/iconos-animados-gratis/usuario'
								title='usuario iconos animados'>
								iconos animados- Flaticon
							</a>
						</p>
						<p className='mention1-p'>
							{" "}
							icons by <a href='https://icons8.com/'>icons8.com</a>
						</p>
					</footer>
				);
			}
		} else
			return (
				<footer className='footer'>
					<p className='info-p'>
						<a
							href='https://www.flaticon.es/iconos-animados-gratis/usuario'
							title='usuario iconos animados'>
							iconos animados creados por Freepik - Flaticon
						</a>
					</p>
					<p className='mention1-p'>
						{" "}
						icons by <a href='https://icons8.com/'>icons8.com</a>
					</p>
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
