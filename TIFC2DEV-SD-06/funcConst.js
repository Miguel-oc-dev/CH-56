function Movie(name, watched, times) {
    this.name = String(name);
    this.watched = Boolean(watched);
    this.times = Number(times);
    this.info = function () {
        if (this.watched === true) {
            console.log("I have watched " + this.name + " " + this.times + " times.");
        } else {
            console.log("I have not watched " + this.name + " yet.");
        }
    }
}

const watchList = [];


const starWars = new Movie("Star Wars", true, 2);
watchList.push(starWars);
const shrek = new Movie("Shrek", true, 8);
watchList.push(shrek);

console.log(watchList);
console.log(watchList[0]);
console.log(watchList[1].info());
console.log(watchList[2].info());

// Segunda forma de crear objetos (prototipos)
const titanic = Object.create(starWars);
titanic.name = "Titanic";
titanic.watched = true;
titanic.times = 6;

watchList.push(titanic);
console.log(watchList);

console.log(Titanic.info());