class Superhero {

    constructor(name, power, mission) {

        this.name = name;
        this.power = power;
        this.mission = mission;
    }

    describeHero() {
        return "<div class='hero-card'>" +
               "<p class='hero-name'>" + this.name + "</p>" +
               "<p class='hero-power'>Power: " + this.power + "</p>" +
               "<p class='hero-mission'>Mission: " + this.mission + "</p>" +
               "</div>";
    }
}
function showHeroes() {

    let hero1 = new Superhero(
        "Captain Code",
        "Debugging Errors",
        "Fix broken programs and save the coding world.");

    let hero2 = new Superhero(
        "Pixel Flash",
        "Super Speed Design",
        "Build colourful websites in seconds.");

    let hero3 = new Superhero(
        "Logic Girl",
        "Smart Problem-Solving",
        "Use logic to solve tricky challenges.");

    let hero4 = new Superhero(
        "Data Knight",
        "Data Protection",
        "Keep important information safe.");

    document.getElementById("heroCards").innerHTML =
        hero1.describeHero() +
        hero2.describeHero() +
        hero3.describeHero() +
        hero4.describeHero();
}