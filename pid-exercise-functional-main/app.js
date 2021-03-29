
/*
const fs = require('fs');

const data = fs.readFileSync('MOCK_DATA.json');
const arrayPeople = JSON.parse(data);
console.log(arrayPeople.length);


//1. The number of females
const numberFemales = arrayPeople.filter(arrayPeople => arrayPeople.gender === "Female");
console.log (numberFemales.length); 

/*
Natalia's solution
function femalesCount() {
    const females = listOfPeople.filter((person) => person.gender ==='Female'); 
    const count = females.length;
    return count;
}



//2. The first and last name of all people that are older than 35.
const above35 = arrayPeople.filter(arrayPeople => arrayPeople.age >= 35 );
const names = above35.map(above35 => (above35.first_name) +" "+ (above35.last_name))
console.log (names);


//3. The total age of all people summed.
let sumAge;
const totalAge = arrayPeople.reduce((accumulator, arrayPeople) => accumulator + arrayPeople.age ,0) 
console.log(totalAge);


//4. Average age of all people.
console.log(totalAge/arrayPeople.length);


//5. The first name and last name of males that are younger than 43 but older than 22 who starts their first 
//name or last name with the letter L.
const ageFilter = arrayPeople.filter(arrayPeople => ((arrayPeople.age > 22 && arrayPeople.age <43) && (arrayPeople.first_name.startsWith('L')||arrayPeople.last_name.startsWith('L')) && arrayPeople.gender === 'Male'));
const FLnames = ageFilter.map(ageFilter => (ageFilter.first_name )+" "+(ageFilter.last_name));
console.log (FLnames);



6. The first name and last name and ip adress of people that have government emails.<br/><br/>_**Note:** Government 
email addresses are the ones that contain the domain name `gov` in the **domain part of the email** 
(the part after the `@`). This one might be a bit tricky due to how a domain is identified. 
For example `aa@hello.gov.com` and `bb@world.gov` are valid government email address but `cc@web.govest.com` 
is not._


const p = {satus:'Unknown'}
p.status ='Known';

const a= (e) => e+5;
const f= (p) => p+6;
const c= (b) => b-2;
const b= (s,p) => s(c(p));
const result= b(a,4);
console.log(result);



console.log([3,5,1,7].reduce((p,c) => c - p));


const array= [ {color:'blue'},{color:'red'},{color:'purple'}];
const result= array.map((i) =>i.color=== 'red' ? {color:'orange'} :i);
console.log(result);

*/

console.log((+!+[]/+[+[]]+[]) [!+[]+!+[]+!+[]]);