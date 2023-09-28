# Zoo Project

Logic and classes to support a zoo in JavaScript where each animal species in the zoo has lots
of different, particular, behaviors, but all animals talk to each other in a similar
way. Specifically, they all implement a speak method, the output of which is the
arbitrary input string interspersed with an "animal sound" that is particular to that
type of animal.

## Project Structure :rocket:

zoo-nodejs
├── zoo/
│   ├── animals/
│   │   ├── Animal.js
│   │   ├── Lion.js
│   │   ├── Tiger.js
│   │   ├── Elephant.js
│   │   ├── ... 
│   ├── zoo.js
├── test/
│   ├── test.js
├── index.js
├── package.json
├── .eslintrc.json
├── node_modules/


## Usage

Here's an example of how to use the zoo in your JavaScript code:

```javascript
// Import the Zoo class
import Zoo from "./zoo/zoo.js";

// Create a new zoo instance
const myZoo = new Zoo();

// Make lion speak
myZoo.lion.speak();

// Make tiger speak
myZoo.lion.speak();

```
## Tests

A Unit tests is included:

- npm install
- npm test
