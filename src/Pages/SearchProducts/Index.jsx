import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import { MaximizedProduct } from "../../MaximizedProduct/Index";
import { MinimizedProduct } from "../../MinimizedProduct";
import { Search } from "../../Search/index";
import { ItemBag } from "../ItemBag/Index";

import "./SearchProducts.css";

function SearchProducts() {
	const {
		showMaximized,
		products,
		productsByTitle,
		searchProducts,
		setProductsByTitle,
	} = React.useContext(shopContext);

	function productsFilteredByTitle(products, searchProdcts) {
		return products?.filter((product) =>
			product.title.toLowerCase().includes(searchProdcts.toLowerCase())
		);
	}
	useEffect(() => {
		if (searchProducts)
			setProductsByTitle(productsFilteredByTitle(products, searchProducts));
	}, [products, searchProducts]);

	const renderProductsHome = () => {
		if (searchProducts?.length > 0) {
			if (productsByTitle?.length > 0) {
				return (
					<>
						{showMaximized ? (
							<MaximizedProduct />
						) : (
							<section
								layout
								transition={{ duration: 0.1 }}
								className='home-container'>
								{productsByTitle?.map((product) => (
									<MinimizedProduct key={product.id} product={product} />
								))}
							</section>
						)}
					</>
				);
			} else {
				return (
					<p>
						Lo sentimos, no encontramos ningún resultado relacionado a tu
						busqueda.
					</p>
				);
			}
		} else {
			return (
				<>
					{showMaximized ? (
						<MaximizedProduct />
					) : (
						<motion.section
							layout
							transition={{ duration: 0.8 }}
							className='home-container'>
							{products?.map((product) => (
								<MinimizedProduct key={product.id} product={product} />
							))}
						</motion.section>
					)}
				</>
			);
		}
	};

	return (
		<>
			<Layout>
				<ItemBag />

				{!showMaximized ? <Search /> : null}
				{renderProductsHome()}
			</Layout>
		</>
	);
}

export { SearchProducts };
