import React, {useState} from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"
import Filter from "./Filter"

import hogs from "../porkers_data";

function App() {
	const [displayGreased, setDisplayGreased] = useState(false);

	let displayHogs = hogs.filter(hog => (displayGreased ? hog.greased : true)); 

	return (
		<div className="App">
			<Nav />
			<Filter 
				displayGreased={displayGreased}
				setDisplayGreased={setDisplayGreased}
			/>
			<Tiles hogData={displayHogs} />
		</div>
	);
}

export default App;
