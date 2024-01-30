import React, { useState } from "react";
import Button from "./Button";

const Calculator = () => {
      const [result, setResult] = useState(null);

      const handleOperation = async (operation, num1, num2) => {
            const response = await fetch(`http://localhost:5253/api/calculator/${operation}/${num1}/${num2}`);
            const data = await response.json();
            setResult(data);
      };

      return (
            <div>
                  <div>
                        <Button label="Add" onClick={ () => handleOperation('add', 5, 3) } />
                  </div>
                  <div>
                        Result: { result }
                  </div>
            </div>
      );
};

export default Calculator;