function sayHello(person) {
  return `Hello ${person}`;
}
const Jean = "Jean";

document.body.innerHTML = sayHello(Jean);

////////////////////////////////

const lifePoint: number = 100;
lifePoint = "100";
const fullName: string = "Green Lantern";

class Hero {
  constructor(lifePoint: number, fullName: string) {}
}

const greenLantern: Hero = new Hero(lifePoint, fullName);
const superMan: Hero = new Hero(lifePoint, "Superman");
const heros: Array<Hero> = [greenLantern, superMan];
