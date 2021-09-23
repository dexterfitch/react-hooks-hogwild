// When the user clicks on the hog tile: 
// display the other details about the hog: 
// specialty, weight, greased, and highest medal achieved

import {useState} from 'react';

const Tile = (props) => {
    const [isActive, setActive] = useState(true);

    const clickHandler = () => {
        setActive(!isActive);
    }

    return (
        <div className="pigTile pigTileSize" onClick={clickHandler}>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name} />
            <div className={isActive ? "inactive" : "active"}>
                <p>Specialty: {props.specialty}</p>
                <p>Weight: {props.weight}</p>
                <p>Greased?: {props.greased ? "greasy" : "dry"}</p>
                <p>Highest Medal: {props.medal}</p>
            </div>
        </div>
    )
}

export default Tile;