import { createContext, useEffect, useState } from "react";

const shopContext = createContext();

function ShopContextProvider({ children }) {
	// Cart number logic
	//// Shopping cart . add products to cart

	const [cartProducts, setCartProducts] = useState([{}]);
	const [cartNumber, setCartNumber] = useState(0);

	function plusCartOne(productData) {
		setCartNumber(cartProducts.length);
		setCartProducts([...cartProducts, productData]);
	}

	// show maximized detail logic
	const [showMaximized, setShowMaximized] = useState(false);
	function showMaximizedProduct() {
		setShowMaximized(!showMaximized);
	}

	/// detail product info logic
	const [productInfo, setProductInfo] = useState({});
	//// searchProdcts
	const [searchProducts, setSearchProducts] = useState();

	// PreviousOrder logic
	const [previousOrders, setPreviousOrders] = useState([]);
	//// products logic
	const [products, setProducts] = useState(null);
	const [productsByTitle, setProductsByTitle] = useState(null);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products").then((response) =>
			response.json().then((data) => setProducts(data))
		);
	}, []);

	///Category Logic

	const [category, setCategory] = useState();
	const [productsByCategory, setProductsByCategory] = useState();

	return (
		<shopContext.Provider
			value={{
				plusCartOne,
				cartNumber,
				setCartNumber,
				showMaximizedProduct,
				showMaximized,
				productInfo,
				setProductInfo,
				cartProducts,
				setCartProducts,
				setShowMaximized,
				previousOrders,
				setPreviousOrders,
				products,
				searchProducts,
				setSearchProducts,
				productsByTitle,
				setProductsByTitle,
				category,
				setCategory,
				productsByCategory,
				setProductsByCategory,
			}}>
			{children}
		</shopContext.Provider>
	);
}

export { ShopContextProvider, shopContext };
