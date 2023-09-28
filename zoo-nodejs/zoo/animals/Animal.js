class Animal {
    /**
     * Create an animal instance.
     * @param {string} name - Name of the animal.
     * @param {string} sound - The sound the animal makes.
     */
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    /**
     * Make the animal speak by adding its sound to the input.
     * @param {string} input - The input string.
     * @returns {string} The modified string with the animal's sound.
     */
    speak(input) {
      const animalSound = this.sound;
      return input.split(' ').map(word => `${word} ${animalSound}`).join(' ');
    }

  }
  
  export default Animal;
  
