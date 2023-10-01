// library.js
const customLibrary = {
  // Function to check if a name starts with 'j' or 'J'
  startsWithJ(name) {
    // Convert the name to lowercase and check if it starts with 'j'
    return name.toLowerCase().charAt(0) === 'j';
  },

  // Function to print a message to the console
  printMessage(message) {
    // Use the console.log method to print the message
    console.log(message);
  }
};

// Your main code to loop over an array of names and print messages
const names = ["John", "Alice", "Bob", "Jane"];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  if (customLibrary.startsWithJ(name)) {
    customLibrary.printMessage("Goodbye " + name);
  } else {
    customLibrary.printMessage("Hello " + name);
  }
}
