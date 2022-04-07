class Dog {
    constructor (name, type, color, eyes, legs, sound, food) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.eyes = eyes;
        this.legs = legs;
        this.sound = sound;
        this.food = food;
        this.sit = false;
    }
    sitOn() {
        this.sit = true;
        console.log(`${this.name}: atsisėdau`);
    }
    standOn() {
        this.sit = false;
        console.log(`${this.name}: atsistojau`);
    }
    soundOut(sound) {
        if (typeof sound !== 'string') {
            console.log(`Šuo šio garso iškleisti negali.`);
            return;
        }
        return console.log(`${this.name}: ${sound}`);
    }
    introduce() {
        let mode
        if (this.sit === false) {
            mode = 'standing';
        } else {
            mode = 'sitting';
        }
        console.log(`Hi, I am dog and my name is ${this.name}. My color is ${this.color}. My eyes are ${this.eyes}. I have ${this.legs} legs. Right now I am ${mode}`);
    }
};
const dog1 = new Dog('Bonobo', 'Retriveris', 'brown', 'green', 4, 'au au', 'steak :)');

console.log(dog1);
dog1.soundOut("aw aw");
dog1.sitOn();
console.log(dog1);
dog1.introduce();