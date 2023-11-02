import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { ShopContextProvider } from "./Context/Index";
import { NavBar } from "./NavBar/Index";
import { Clothing } from "./Pages/Clothing/Index";
import { Electronics } from "./Pages/Electronics/Index";
import { Home } from "./Pages/Home/Index";
import { ItemBag } from "./Pages/ItemBag/Index";
import { Jewelery } from "./Pages/Jewelery/Index";
import { MyAccount } from "./Pages/MyAccount/Index";
import { MyOrders } from "./Pages/MyOrders/Index";
import { NotFound } from "./Pages/NotFound/NotFound";
function App() {
	const RoutesFunction = () => {
		const routes = useRoutes([
			{ path: "/", element: <Home /> },
			{ path: "/MyAccount", element: <MyAccount /> },
			{ path: "/MyOrders", element: <MyOrders /> },
			{ path: "/ItemBag", element: <ItemBag /> },
			{ path: "/electronics", element: <Electronics /> },
			{ path: "/jewelery", element: <Jewelery /> },
			{ path: "/clothing", element: <Clothing /> },
			{ path: "/*", element: <NotFound /> },
		]);
		return routes;
	};

	return (
		<>
			<ShopContextProvider>
				<BrowserRouter>
					<NavBar />
					<RoutesFunction />
				</BrowserRouter>
			</ShopContextProvider>
		</>
	);
}

export default App;
