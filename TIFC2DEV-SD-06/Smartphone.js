const currentDate = new Date();

class Smartphone {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }

    age() {

        return currentDate.getFullYear() - this.year;
    }
}
