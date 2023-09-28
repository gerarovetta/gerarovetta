import Zoo from '../zoo/zoo.js';

import { expect } from 'chai';

describe('Zoo', () => {
  it('Lion should speak correctly', () => {
    const zoo = new Zoo();
    const lionSpeech = zoo.lion.speak("I'm a lion");
    expect(lionSpeech).to.equal("I'm roar a roar lion roar");
  });

  it('Tiger should speak correctly', () => {
    const zoo = new Zoo();
    const tigerSpeech = zoo.tiger.speak("Lions suck");
    expect(tigerSpeech).to.equal("Lions grrr suck grrr");
  });

  it('Elephant should speak correctly', () => {
    const zoo = new Zoo();
    const elephantSpeech = zoo.elephant.speak("I'm an elephant");
    expect(elephantSpeech).to.equal("I'm trmp an trmp elephant trmp");
  });

  it('Coati should speak correctly', () => {
    const zoo = new Zoo();
    const coatiSpeech = zoo.coati.speak("I'm a coati");
    expect(coatiSpeech).to.equal("I'm churr a churr coati churr");
  });

});
