import { useEffect, useState } from "react";
import { Layout } from "../../Layout/Index";
import { MaximizedProduct } from "../../MaximizedProduct/Index";
import { MinimizedProduct } from "../../MinimizedProduct";
import "./Home.css";

function Home() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products").then((response) =>
			response.json().then((data) => setProducts(data))
		);
	}, []);

	return (
		<Layout>
			<div className='home-container'>
				{products?.map((product) => (
					<MinimizedProduct key={product.id} product={product} />
				))}
				<MaximizedProduct />
			</div>
		</Layout>
	);
}

export { Home };
