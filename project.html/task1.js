function displayHelloWorld() {
    setTimeout(() => {
      console.log("Hello, World!");
    }, 5000); //cs
  }
  
  // Call the function
  displayHelloWorld();
  

function logCurrentTime() {
  const intervalId = setInterval(() => {
    const now = new Date();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
  }, 2000); 

  // Stop logging after 10 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped logging after 20 seconds.");
  }, 20000); 
}

// Call the function
logCurrentTime();

function startCountdown() {
  let time = 10; 
  const intervalId = setInterval(() => {
    console.log(time); 
    time--; 

    if (time < 0) { 
      clearInterval(intervalId); 
      setTimeout(() => {
        console.log("Time's up!"); 
      }, 1000); 
    }
  }, 1000);
}
startCountdown();

 function logSumAfterDelay(num1, num2) {
  setTimeout(() => {
    const sum = num1 - num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
  }, 2000);
}
logSumAfterDelay(40, 20);


function multiplyAfterDelay(num1, num2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = num1 * num2;
      resolve(product);
    }, 3000); 
  });
}

// Example usage
multiplyAfterDelay(6, 4).then((result) => {
  console.log(`The product is ${result}`);
});

