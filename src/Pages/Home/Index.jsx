import React from "react";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import { MaximizedProduct } from "../../MaximizedProduct/Index";
import { MinimizedProduct } from "../../MinimizedProduct";

import "./Home.css";

function Home() {
	const { showMaximized, products } = React.useContext(shopContext);

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
