// Code your solutions in this file
// Task 1: writeCards function
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// Task 2: countDown function
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Example usage:
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
countDown(10);
