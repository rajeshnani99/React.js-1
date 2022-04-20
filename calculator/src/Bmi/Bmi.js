import React, { useState } from "react";
import "./Bmi.css"

export default function App() {
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);
    var [check, setCheck] = useState(0);

    const calculate = (e) => {
        e.preventDefault();
        const formValid = +height > 0 && +mass > 0;
        if (!formValid) {
            return;
        }
        const bmi = +mass / (+height) ** 2;
        setBmi(bmi);
        const check = mass
        if (check > 50 && check < 67) {

            setCheck(check + " - You are in the healthy weight range")
        } else {
            setCheck(check + " - You are Not in the healthy weight range")
        }
    };

    return (

        <div className="App">
            <div className="Header">
                <h2>BMI Calulator</h2>
            </div>
            <form onSubmit={calculate}>
                <div>
                    <h2>Enter your height in cm :</h2>
                    <input value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>

                <div>
                    <h2>Enter your weight in Kg :</h2>
                    <input value={mass} onChange={(e) => setMass(e.target.value)} />
                </div>

                <button type="submit">Submit</button>
            </form>
            <p>bmi: {bmi}</p>
            <p>{check}</p>
        </div>
    );
}