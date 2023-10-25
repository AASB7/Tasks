// 1. Create a variable named kelvin and set it equal to 293 (today's forecast in Kelvin).
const kelvin = 293;



// 3. Convert Kelvin to Celsius by subtracting 273 from kelvin. Store the result in a variable named celsius.
const celsius = kelvin - 273;



// 5. Calculate Fahrenheit using the formula Fahrenheit = Celsius * (9/5) + 32, and store it in a variable named fahrenheit.
let fahrenheit = celsius * (9/5) + 32;



// 7. Use the .floor() method to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);



// 9. Log the temperature in Fahrenheit to the console using string interpolation.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// 10. Run your program to see the results!

// 11. 0 Kelvin in Fahrenheit is -459.67. (You can calculate it by using the formula in step 5 with kelvin = 0)
// 12. Convert celsius to the Newton scale using the equation below
const newton = celsius * (33/100);

// 13. Round down the Newton temperature using the .floor() method
const roundedNewton = Math.floor(newton);

// 14. Log the temperature in newton to the console using string interpolation.
console.log(`The temperature is ${roundedNewton} degrees Newton.`);

