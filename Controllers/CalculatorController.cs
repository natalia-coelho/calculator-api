using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/calculator")]

public class CalculatorController : ControllerBase
{
      [HttpGet("add/{num1}/{num2}")]
      public IActionResult Add(double num1, double num2)
      {
            double result = num1 + num2;
            return Ok(result);
      }
      
      [HttpGet("subtract/{num1}/{num2}")]
      public IActionResult Subtract(double num1, double num2)
      {
            double result = num1 - num2;
            return Ok(result);
      }

      [HttpGet("multiply/{num1}/{num2}")]
      public IActionResult Multiply(double num1, double num2)
      {
            double result = num1 * num2;
            return Ok(result);
      }

      [HttpGet("divide/{num1}/{num2}")]
      public IActionResult Divide(double num1, double num2)
      {
            double result = num1 / num2;
            return Ok(result);
      }
}