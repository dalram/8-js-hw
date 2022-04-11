class Dog {
    constructor (name, type, color, eyes, sound, food) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.eyes = eyes;
        this.legs = 4;
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

// zino paprastas elementas prie construktoriaus.
// gali funkcinis elementas

//  Class cat

class Cat {
    constructor (name, type, color, eyes, sound, food) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.eyes = eyes;
        this.sound = sound;
        this.food = food;
        this.rest = false;
        this.legs = 4;
    }
    resting() {
        this.rest = true;
        return console.log(`${this.name}: atsiguliau ilsetis`);
    }
    restingOut() {
        this.rest = false;
        return console.log(`${this.name}: atsistojau kazka veikti`);
    }
    soundOut(sound) {
        if (typeof sound !== 'string') {
            return console.log(`${this.name}: sio garso iskleisti negaliu`);
        }
        return console.log(`${this.name}: ${sound}`);
    }
    destroy(b) {
        if (typeof b !== 'string') {
            return console.log(`${this.name}: tai ne daiktas.`);
        }
        return console.log(`${this.name}: Miau, sudauziau ${b}`);
    }
    introduce() {
        let mode;
        if (this.rest === false) {
            mode = 'Stoviu';
        } else {
            mode = 'Guliu';
        }
        return console.log(`Labas, as esu katinas ${this.name}.My color is ${this.color}. My eyes are ${this.eyes}. I have ${this.legs} legs. Right now I am ${mode}`);
    }
}

const cat1 = new Cat('Rainis', 'rainys', 'pilkai juodas', 'zalios', 'miau miau', 'vistiena :)' );
console.log(cat1);
cat1.soundOut('miau');
cat1.resting();
console.log(cat1);
cat1.restingOut();
cat1.destroy('Puodeli');
cat1.introduce();
