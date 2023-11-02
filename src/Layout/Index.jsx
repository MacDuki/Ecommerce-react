import { useContext } from "react";
import { shopContext } from "../Context/Index";
import "./layout.css";

function Layout({ children }) {
	const { cssClassHomeLayout } = useContext(shopContext);

	return <main className={cssClassHomeLayout + " layout"}>{children}</main>;
}

export { Layout };
