function sayHello(person) {
  return `Hello ${person}`;
}
const Jean = "Jean";

document.body.innerHTML = sayHello(Jean);

////////////////////////////////

// Un constructeur pour notre classe Hero

// On spécifie le type de retour après les ':', ici Hero.
function createHero(lifePoint: number, name: string, planet?: string): Hero {
  const hero = new Hero();
  hero.lifePoint = lifePoint;
  hero.name = name;
  if (planet) hero.planet = planet;
  return hero;
}

const lifePoint: number = 100;
const fullName: string = "Green Lantern";

const greenLantern: Hero = new Hero(lifePoint, fullName);
const superMan: Hero = new Hero(lifePoint, "Superman");
const heros: Array<Hero> = [greenLantern, superMan];

class Test {}
