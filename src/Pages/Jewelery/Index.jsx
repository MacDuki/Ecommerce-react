import React, { useContext, useEffect } from "react";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import { MaximizedProduct } from "../../MaximizedProduct/Index";
import { MinimizedProduct } from "../../MinimizedProduct";

function Jewelery() {
	const {
		category,
		productsByCategory,
		setProductsByCategory,
		showMaximized,
		products,
	} = useContext(shopContext);

	function categoryJawelery(products, category) {
		return products?.filter((product) =>
			product.category.toLowerCase().includes(category.toLowerCase())
		);
	}
	useEffect(() => {
		if (category) setProductsByCategory(categoryJawelery(products, category));
	}, []);

	return (
		<Layout>
			<>
				{showMaximized ? (
					<MaximizedProduct />
				) : (
					<div className='home-container'>
						{productsByCategory?.map((product) => (
							<MinimizedProduct key={product.id} product={product} />
						))}
					</div>
				)}
			</>
		</Layout>
	);
}

export { Jewelery };
