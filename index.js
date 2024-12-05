// helpers.js

// Function that creates an array of thank you messages for each name
function writeCards(names, eventName) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  // Function that logs numbers counting down from the given number to zero
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  const names = ["Guadalupe", "Ollie", "Aki"];
  const eventName = "surprise";
  const thankYouMessages = writeCards(names, eventName);
  console.log(thankYouMessages);
  // Output:
  // [
  //   "Thank you, Guadalupe, for the wonderful surprise gift!",
  //   "Thank you, Ollie, for the wonderful surprise gift!",
  //   "Thank you, Aki, for the wonderful surprise gift!"
  // ]
  countDown(4);
  // Output:
  // 4
  // 3
  // 2
  // 1
  // 0
      