import React, { useEffect, useState } from "react";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import { MaximizedProduct } from "../../MaximizedProduct/Index";
import { MinimizedProduct } from "../../MinimizedProduct";

import "./Home.css";

function Home() {
	const [products, setProducts] = useState(null);
	const { showMaximized } = React.useContext(shopContext);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products").then((response) =>
			response.json().then((data) => setProducts(data))
		);
	}, []);

	return (
		<Layout>
			{showMaximized ? (
				<MaximizedProduct />
			) : (
				<div className='home-container'>
					{products?.map((product) => (
						<MinimizedProduct key={product.id} product={product} />
					))}
				</div>
			)}
		</Layout>
	);
}

export { Home };
