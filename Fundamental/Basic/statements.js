let countries = ['Bangladesh', 'India', 'Pakistan', "USA", "UK"];

//! using break statement:
for (let index = 0; index < countries.length; index++) {
    if (countries[index] == 'Bangladesh') {
        console.log(countries[index]); //? Bangladesh
        break;
    } 
}

//! Using  return Statement:
for (let index = 0; index < countries.length; index++) {
    if (countries[index] == 'India') {
        return;
    } 
    console.log(countries[index]); //? Bangladesh
}

//! Using  continue Statement:
for (let index = 0; index < countries.length; index++) {
    if (countries[index] == 'India') {
        continue;
    } 
    console.log(countries[index]); //? Bangladesh, Pakistan, USA, UK
}
