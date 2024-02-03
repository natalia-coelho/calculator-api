import React, { useState } from "react";
import Button from "./Button";
import './App.css';

const Calculator = () => {
      const [result, setResult] = useState(null);

      let url = `http://localhost:5253/api/calculator`;

      const handleOperation = async (operation, num1, num2) => {
            const response = await fetch(`${url}/${operation}/${num1}/${num2}`);
            const data = await response.json();
            setResult(data);
      };

      return (
            <div className="App">
                  <header className="App-header">

                        <div>
                              <Button label="Add" onClick={ () => handleOperation('Add', 5, 3) } />
                              <Button label="Subtract" onClick={ () => handleOperation('subtract', 5, 3) } />
                              <Button label="Multiply" onClick={ () => handleOperation('multiply', 5, 3) } />
                              <Button label="Divide" onClick={ () => handleOperation('divide', 5, 3) } />
                        </div>
                        <div>
                              Result: { result }
                        </div>
                  </header>
            </div>
      );
};
export default Calculator;