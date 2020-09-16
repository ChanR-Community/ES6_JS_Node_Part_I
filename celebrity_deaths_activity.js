// Use File System
const fs = require('fs');

// Read JSON Data
const celebrity_data = fs.readFileSync("./celebrity_deaths.json", 'utf-8');
const celebrity_obj = JSON.parse(celebrity_data);

// Find American Celebrities
const american_celebrities = celebrity_obj.filter(celeb => celeb.nationality === 'American')

// Find Average Death Age of American Celebrities
console.log(american_celebrities[0]);

// Destructure Array and Object Together
const [{age}] = american_celebrities
console.log(age);

// Create Mean Function
var mean = (x) => {
  const num_sum = x.reduce((a,b) => a+b)
  return num_sum / x.length
}

// Getting Array of Death Ages
const american_death_age_arr = american_celebrities.map(celeb => celeb.age)
console.log(`The precise mean age of death for American celebrities is: ${parseFloat(mean(american_death_age_arr).toFixed(2))}`);
