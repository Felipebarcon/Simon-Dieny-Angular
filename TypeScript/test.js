function sayHello(person) {
    return "Hello ".concat(person);
}
var Jean = "Jean";
document.body.innerHTML = sayHello(Jean);
////////////////////////////////
var lifePoint = 100;
lifePoint = "100";
var fullName = "Green Lantern";
var Hero = /** @class */ (function () {
    function Hero(lifePoint, fullName) {
    }
    return Hero;
}());
var greenLantern = new Hero(lifePoint, fullName);
var superMan = new Hero(lifePoint, "Superman");
var heros = [greenLantern, superMan];
