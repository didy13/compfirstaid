
var cenovnikArray = [];
function getResults(input) {
    cenovnikArray = [];
    if(input != ''){
    const data = require('../database/data.json');
    const cenovnik  = data.cenovnik;
    cenovnik.forEach(cenovnikItem => {
        cenovnikArray.push(cenovnikItem.title + " " + cenovnikItem.price + " " + cenovnikItem.details);
    });
    const resultsCenovnik = cenovnikArray.filter(item => item.toLowerCase().includes(input.toLowerCase()));
    if (resultsCenovnik.length === 0) {
        cenovnikString = "Nema rezultata pretrage";
        return cenovnikString;
    }
    console.log(resultsCenovnik);
    return resultsCenovnik;
    }
    else{
        cenovnikString = "Nema rezultata pretrage";
        return cenovnikString;
    }
  }
  
  module.exports = { getResults };
  