import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { ShopContextProvider } from "./Context/Index";
import { NavBar } from "./NavBar/Index";
import { Home } from "./Pages/Home/Index";
import { ItemBag } from "./Pages/ItemBag/Index";
import { MyOrders } from "./Pages/MyOrders/Index";
import { NotFound } from "./Pages/NotFound/NotFound";
import { SearchProducts } from "./Pages/SearchProducts/Index";
import { SelectedCategory } from "./Pages/SelectedCategory/Index";
function App() {
	const RoutesFunction = () => {
		const routes = useRoutes([
			{ path: "/SearchProducts", element: <SearchProducts /> },
			{ path: "/", element: <Home /> },
			{ path: "/MyOrders", element: <MyOrders /> },
			{ path: "/clothing", element: <SelectedCategory /> },
			{ path: "/jewelery", element: <SelectedCategory /> },
			{ path: "/electronics", element: <SelectedCategory /> },
			{ path: "/*", element: <NotFound /> },
		]);
		return routes;
	};

	return (
		<>
			<ShopContextProvider>
				<BrowserRouter>
					<NavBar />
					<ItemBag />
					<RoutesFunction />
				</BrowserRouter>
			</ShopContextProvider>
		</>
	);
}

export default App;
