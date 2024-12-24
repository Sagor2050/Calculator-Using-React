import React, { useState } from "react";
import "./styles.css";

function App() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState(null);

  const appendNumber = (number) => {
    if (number === "." && currentOperand.includes(".")) return;
    setCurrentOperand((prev) => prev + number);
  };

  const chooseOperation = (op) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "%":
        computation = prev % current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }

    setCurrentOperand(computation.toString());
    setPreviousOperand("");
    setOperation(null);
  };

  const clear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation(null);
  };

  const deleteLast = () => {
    setCurrentOperand((prev) => prev.slice(0, -1));
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>

      <button className="span-two" onClick={clear}>
        AC
      </button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={() => chooseOperation("%")}>
        %
      </button>

      <button onClick={() => appendNumber("1")}>1</button>
      <button onClick={() => appendNumber("2")}>2</button>
      <button onClick={() => appendNumber("3")}>3</button>
      <button onClick={() => chooseOperation("*")}>*</button>

      <button onClick={() => appendNumber("4")}>4</button>
      <button onClick={() => appendNumber("5")}>5</button>
      <button onClick={() => appendNumber("6")}>6</button>
      <button onClick={() => chooseOperation("+")}>+</button>

      <button onClick={() => appendNumber("7")}>7</button>
      <button onClick={() => appendNumber("8")}>8</button>
      <button onClick={() => appendNumber("9")}>9</button>
      <button onClick={() => chooseOperation("-")}>-</button>

      <button onClick={() => appendNumber(".")}>.</button>
      <button onClick={() => appendNumber("0")}>0</button>
      <button className="span-two" onClick={compute}>
        =
      </button>
    </div>
  );
}

export default App;
