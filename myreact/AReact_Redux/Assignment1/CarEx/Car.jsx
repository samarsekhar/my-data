import React, { useState } from "react";

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1996",
        color: "Blue",
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "Black" }
        });
    }

    return (
        <>
            <h2>My {car.brand}</h2>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}
            >Click</button>
        </>
    );
};
export default Car;