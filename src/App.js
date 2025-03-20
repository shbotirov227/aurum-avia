import React from "react";
import Home from "./pages/Home/Home";
import { Analytics } from "@vercel/analytics/react"
import EzmobAds from "./components/EzmobAds";

import "./assets/index.scss";

function App() {
	return (
		<div className="App">
			<Home />
            <Analytics />
            <EzmobAds />
		</div>
	);
}

export default App;
