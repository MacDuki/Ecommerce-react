import { useContext } from "react";
import { shopContext } from "../Context/Index";
import "./layout.css";

function Layout({ children }) {
	const { cssClassHomeLayout } = useContext(shopContext);

	return (
		<main className={cssClassHomeLayout + " layout"}>
			{children}
			<footer className='footer'>
				<p className='info-p'>sdsddsdsddsdsds </p>
				<p className='mention1-p'> dsdssdsddsd </p>
				<p className='mention2-p'>dsdsd ssdsd</p>
			</footer>
		</main>
	);
}

export { Layout };
