import "./styles.css";

import { useState } from "react";

const App = () => {
  const [inputUnit, setInputUnit] = useState("celsius");
  const [outputUnit, setOutputUnit] = useState("fahrenheit");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
    handleOutputData(input, e.target.value, outputUnit);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
    handleOutputData(input, inputUnit, e.target.value);
  };

  const handleOutputData = (value, fromUnit, toUnit) => {
    if (fromUnit === toUnit) {
      setOutput(value);
      return;
    }

    value = parseFloat(value);

    switch (fromUnit) {
      case "celsius":
        if (toUnit === "fahrenheit") {
          setOutput(((value * 9) / 5 + 32).toFixed(4));
        } else if (toUnit === "kelvin") {
          setOutput((value + 273.15).toFixed(4));
        }
        break;
      case "fahrenheit":
        if (toUnit === "celsius") {
          setOutput((((value - 32) * 5) / 9).toFixed(4));
        } else if (toUnit === "kelvin") {
          setOutput((((value - 32) * 5) / 9 + 273.15).toFixed(4));
        }
        break;
      case "kelvin":
        if (toUnit === "celsius") {
          setOutput((value - 273.15).toFixed(4));
        } else if (toUnit === "fahrenheit") {
          setOutput((((value - 273.15) * 9) / 5 + 32).toFixed(4));
        }
        break;
      default:
        setOutput("Invalid unit");
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    handleOutputData(e.target.value, inputUnit, outputUnit);
  };

  const handleOutput = (e) => {
    setOutput(e.target.value);
    handleOutputData(e.target.value, outputUnit, inputUnit);
  };

  return (
    <div className="app">
      <div className="input-container">
        <select value={inputUnit} onChange={handleInputUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <input value={input} onChange={handleInput} />
        <br />
      </div>
      <div className="output-container">
        <select value={outputUnit} onChange={handleOutputUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>{" "}
        <input value={output} onChange={handleOutput} />
      </div>
    </div>
  );
};

export default App;
