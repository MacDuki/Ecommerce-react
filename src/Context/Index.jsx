import { createContext, useState } from "react";

const shopContext = createContext();

function ShopContextProvider({ children }) {
	// Cart number logic
	//// Shopping cart . add products to cart

	const [cartProducts, setCartProducts] = useState([{}]);
	const [cartNumber, setCartNumber] = useState(0);

	function plusCartOne(productData) {
		let newCartNumber = cartNumber + 1;
		setCartNumber(newCartNumber);
		setCartProducts([...cartProducts, productData]);
		console.log("Cart:", cartProducts);
	}

	// show maximized detail logic
	const [showMaximized, setShowMaximized] = useState(false);
	function showMaximizedProduct() {
		setShowMaximized(!showMaximized);
	}

	/// detail product info logic
	const [productInfo, setProductInfo] = useState({});

	return (
		<shopContext.Provider
			value={{
				plusCartOne,
				cartNumber,
				showMaximizedProduct,
				showMaximized,
				productInfo,
				setProductInfo,
				cartProducts,
				setCartProducts,
				setShowMaximized,
			}}>
			{children}
		</shopContext.Provider>
	);
}

export { ShopContextProvider, shopContext };
