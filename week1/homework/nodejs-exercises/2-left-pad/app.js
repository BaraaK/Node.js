const leftPad = require('left-pad')
function myPadLeft (arr) {
      arr.forEach(element => console.log(leftPad(element , 8 , ' ')));
}
numbers = [ "12", "846", "2", "1236" ]
myPadLeft(numbers)
