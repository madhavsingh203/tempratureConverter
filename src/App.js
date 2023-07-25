import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [temperature, setTemperature] = useState("");
  const [inputUnit, setInputUnit] = useState("celsius");
  const [outputUnit, setOutputUnit] = useState("fahrenheit");
  const [output, setOutput] = useState("");

  const handleTemperatureChange = (event) => {
    const value = event.target.value;
    setTemperature(value);
    convertTemperature(value, inputUnit, outputUnit);
  };

  const handleInputUnitChange = (event) => {
    const newInputUnit = event.target.value;
    setInputUnit(newInputUnit);
    convertTemperature(temperature, newInputUnit, outputUnit);
  };

  const handleOutputUnitChange = (event) => {
    const newOutputUnit = event.target.value;
    setOutputUnit(newOutputUnit);
    convertTemperature(temperature, inputUnit, newOutputUnit);
  };

  const convertTemperature = (value, fromUnit, toUnit) => {
    if (isNaN(value)) {
      setOutput("Invalid input");
      return;
    }

    value = parseFloat(value);

    if (fromUnit === toUnit) {
      setOutput(value.toFixed(4));
      return;
    }

    switch (fromUnit) {
      case "celsius":
        if (toUnit === "fahrenheit") {
          value = (value * 9) / 5 + 32;
        } else if (toUnit === "kelvin") {
          value = value + 273.15;
        }
        break;
      case "fahrenheit":
        if (toUnit === "celsius") {
          value = ((value - 32) * 5) / 9;
        } else if (toUnit === "kelvin") {
          value = ((value - 32) * 5) / 9 + 273.15;
        }
        break;
      case "kelvin":
        if (toUnit === "celsius") {
          value = value - 273.15;
        } else if (toUnit === "fahrenheit") {
          value = ((value - 273.15) * 9) / 5 + 32;
        }
        break;
      default:
        setOutput("Invalid unit");
        return;
    }

    setOutput(value.toFixed(4));
  };

  const handleOutputChange = () => {};

  return (
    <div className="app">
      <div className="input-container">
        <select value={inputUnit} onChange={handleInputUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <input
          type="number"
          value={temperature}
          onChange={handleTemperatureChange}
          placeholder="Enter temperature"
        />
      </div>
      <div className="output-container">
        <select value={outputUnit} onChange={handleOutputUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <input value={output} onChange={handleOutputChange} />
      </div>
    </div>
  );
};

export default App;
