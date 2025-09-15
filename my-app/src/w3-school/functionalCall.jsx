import { useState, useEffect, useRef } from 'react';
const FunctionalCall = () => {
    let [num, setNum]=useState(0);
    const [className, setClassName] = useState("convert");
    useEffect(() => {
        console.log("This line rendered");
    }, []);
    const greet = (name) => {
        return `Hello, ${name}!`;
    }

    const KelvinToCelcius=(kelvin)=>{
        console.log("Converting Kelvin to Celcius");
        return kelvin - 273.15;
    }

    const handleButtonClick = (e) => {
        console.log("Converting temperature...", e);
        console.log("Button clicked, current class name is: ", className);
    };

    return (
        <div>
            <input onChange={(e)=>setNum(e.target.value)} type="number" placeholder="Enter a number" /><h2>Kelvin to Celcius: {KelvinToCelcius(num)}°C</h2>
            <button className={`btn btn-primary ${className}`} onClick={handleButtonClick}>Convert</button>
            <input onChange={(e)=>setClassName(e.target.value)} type="text" className="form-control" placeholder="Enter text" />
        </div>
    );
}

export { FunctionalCall };