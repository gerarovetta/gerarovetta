import Animal from './Animal.js';

class Lion extends Animal {
  /**
   * Create a Lion instance.
   */
  constructor() {
    super('Lion', 'roar');
  }
}

export default Lion;