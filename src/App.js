import React from "react";
import Home from "./pages/Home/Home";
import { Analytics } from "@vercel/analytics/react"

import "./assets/index.scss";

function App() {
	return (
		<div className="App">
			<Home />
            <Analytics />
		</div>
	);
}

export default App;
