import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { ShopContextProvider } from "./Context/Index";
import { NavBar } from "./NavBar/Index";
import { Home } from "./Pages/Home/Index";
import { ItemBag } from "./Pages/ItemBag/Index";
import { MyAccount } from "./Pages/MyAccount/Index";
import { MyOrders } from "./Pages/MyOrders/Index";
import { NotFound } from "./Pages/NotFound/NotFound";

function App() {
	const RoutesFunction = () => {
		const routes = useRoutes([
			{ path: "/", element: <Home /> },
			{ path: "/MyAccount", element: <MyAccount /> },
			{ path: "/MyOrders", element: <MyOrders /> },
			{ path: "/*", element: <NotFound /> },
			{ path: "/ItemBag", element: <ItemBag /> },
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
