import React, {useState} from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"
import Filter from "./Filter"

import hogs from "../porkers_data";

function App() {
	const [displayGreased, setDisplayGreased] = useState(false);
	const [numberOfAwards, setNumberOfAwards] = useState(0);

	// state = [
	// 	{
	// 		displayGreased: false,

	// 	}
	// ]

	// ternary!!!!!
	// let displayHogs = hogs.filter(hog => (displayGreased ? hog.greased : true)); 

	// standard!!!!!
	let displayHogs = hogs.filter(hog => {
		if (displayGreased === true) {
			return hog.greased
		} else if (displayGreased === false) {
			return true
		}
	})

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
