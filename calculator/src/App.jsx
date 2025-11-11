import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [calculationHistory, setCalculationHistory] = useState("");

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    setCalculationHistory("");
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
      setCalculationHistory(`${inputValue} ${nextOperation}`);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
      setCalculationHistory(
        `${currentValue} ${operation} ${inputValue} = ${newValue} ${nextOperation}`
      );
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setCalculationHistory(
        `${previousValue} ${operation} ${inputValue} = ${newValue}`
      );
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator">
      <div className="calculation-history">{calculationHistory}</div>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={clear} className="span-two">
          AC
        </button>
        <button onClick={() => setDisplay(String(parseFloat(display) / 100))}>
          %
        </button>
        <button onClick={() => performOperation("÷")}>÷</button>
        <button onClick={() => inputNumber(7)}>7</button>
        <button onClick={() => inputNumber(8)}>8</button>
        <button onClick={() => inputNumber(9)}>9</button>
        <button onClick={() => performOperation("×")}>×</button>
        <button onClick={() => inputNumber(4)}>4</button>
        <button onClick={() => inputNumber(5)}>5</button>
        <button onClick={() => inputNumber(6)}>6</button>
        <button onClick={() => performOperation("-")}>-</button>
        <button onClick={() => inputNumber(1)}>1</button>
        <button onClick={() => inputNumber(2)}>2</button>
        <button onClick={() => inputNumber(3)}>3</button>
        <button onClick={() => performOperation("+")}>+</button>
        <button onClick={() => inputNumber(0)} className="span-two">
          0
        </button>
        <button onClick={inputDecimal}>.</button>
        <button onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}

export default App;
