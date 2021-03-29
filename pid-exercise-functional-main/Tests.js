/*

#### Exercise 9
Write tests for at least 3 of the previous exercises using _jest_. Tests look a bit different in jest but they are quite easy,
here is how a sample jest test could look like (assuming your main file is `submission.js`:
```javascript
// submission.js
function femalesCount(listOfPeople) {
    ...
    return count;
}

module.exports = femalesCount; // This is needed so that we can import it in another file
                               // If you want to export several functions, put them all inside an object and export the object
```
```javascript
// submission.test.js
const femalesCount = require('../src/solution'); // Use the path to your submission file

test('femalesCount should count correct number of females', () => {
  expect(femalesCount([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 9, first_name: 'Amanda', last_name: 'Gownge', email: 'agownge8@t.co', gender: 'Female', ip_address: '246.160.41.135', age: 95,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
    },
  ])).toBe(3);
});

```
Tests can then be run with the npm test command
```bash
npm test
```
> **Assistant's Note:**
> The test above uses a list with some sample people as an input and not the entire `MOCK_DATA.json` file. This makes it easier to get an overview of
> the test's actual input. This does however mean that the functionality must be divided into functions of higher cohesion
> .i.e one function reading the file and one function taking in the list and calculating the desired result.
*/

app.test.js
const femalesCount = require('D:\VSCode Workspace\pid-exercise-functional-main\app.js'); // Use the path to your submission file

test('femalesCount should count correct number of females', () => {
  expect(femalesCount([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 9, first_name: 'Amanda', last_name: 'Gownge', email: 'agownge8@t.co', gender: 'Female', ip_address: '246.160.41.135', age: 95,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
    },
  ])).toBe(3);
});