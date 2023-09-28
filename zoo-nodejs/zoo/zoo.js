import Lion from './animals/Lion.js';
import Tiger from './animals/Tiger.js';
import Elephant from './animals/Elephant.js';
import Coati from './animals/Coati.js';


class Zoo {
  constructor() {
    // Create instances of various animal types
    this.lion = new Lion();
    this.tiger = new Tiger();
    this.elephant = new Elephant();
    this.coati = new Coati();
    // Add other animal instances as needed * See notes on Readme
  }
  // Here we can define other methods or functionality to manage the zoo
}

export default Zoo;