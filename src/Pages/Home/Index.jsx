import React, { useEffect } from "react";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";
import { MaximizedProduct } from "../../MaximizedProduct/Index";
import { MinimizedProduct } from "../../MinimizedProduct";
import { Search } from "../../Search/index";
import "./Home.css";

function Home() {
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
							<div className='home-container'>
								{productsByTitle?.map((product) => (
									<MinimizedProduct key={product.id} product={product} />
								))}
							</div>
						)}
					</>
				);
			} else {
				return (
					<div>
						Lo sentimos, no encontramos ningún resultado relacionado a tu
						busqueda.
					</div>
				);
			}
		} else {
			return (
				<>
					{showMaximized ? (
						<MaximizedProduct />
					) : (
						<div className='home-container'>
							{products?.map((product) => (
								<MinimizedProduct key={product.id} product={product} />
							))}
						</div>
					)}
				</>
			);
		}
	};

	return (
		<Layout>
			<Search />
			{renderProductsHome()}
		</Layout>
	);
}

export { Home };
