const Handlebars = require("handlebars"); 

const subjects = [
    'shark',
    'popcorn',
    'poison',
    'fork',
    'cherry',
    'toothbrush',
    'cannon',
  ];

  const punchlines = [
    'watch movie with',
    'spread some love',
    'put on cake',
    'clean toilets',
    'go to the moon',
    'achieve world piece',
    'help people learn programing',
  ];

  function getRandomWord(arr) {
    return arr[Math.floor(Math.random()*7)]
 }

 function drawCard() {
    const cardData = {
        subject : getRandomWord(subjects) ,
        punchline : getRandomWord(punchlines)
    }
    return cardData
 }

 let card = '{{subject}} is great to {{punchline}}'
 let template = Handlebars.compile(card);
 let result = template(drawCard())
 console.log(result)
