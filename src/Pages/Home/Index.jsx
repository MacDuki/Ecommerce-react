import React from "react";
import { shopContext } from "../../Context/Index";
import { Layout } from "../../Layout/Index";

import { HomeDeskV } from "./HomeDeskV";
import { HomeMobileV } from "./HomeMobileV";

function Home() {
	const { mobileWidth } = React.useContext(shopContext);

	function renderHome() {
		if (mobileWidth) {
			return <HomeMobileV />;
		} else {
			return <HomeDeskV />;
		}
	}

	return (
		<>
			<Layout>{renderHome()}</Layout>
		</>
	);
}

export { Home };
