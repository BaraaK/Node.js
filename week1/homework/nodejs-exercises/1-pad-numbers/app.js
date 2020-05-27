const ExportPadLeft = require('./padLeft.js')
function myPadLeft (arr) {
      arr.forEach(element => console.log(ExportPadLeft(element , 4 , ' ')));
}
numbers = [ "12", "846", "2", "1236" ]
myPadLeft(numbers)
