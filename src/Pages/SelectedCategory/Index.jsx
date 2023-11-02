import React, { useContext, useEffect } from "react";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import { MaximizedProduct } from "../../MaximizedProduct/Index";
import { MinimizedProduct } from "../../MinimizedProduct";

function SelectedCategory() {
	const {
		category,
		productsByCategory,
		setProductsByCategory,
		showMaximized,
		products,
	} = useContext(shopContext);

	function categoryFunction(products, category) {
		return products?.filter((product) =>
			product.category.toLowerCase().includes(category.toLowerCase())
		);
	}
	useEffect(() => {
		if (category) setProductsByCategory(categoryFunction(products, category));
	}, [category]);

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

export { SelectedCategory };
