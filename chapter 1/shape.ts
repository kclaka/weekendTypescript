class Person{
    name: string;
}


const jill: {
    name: string
} = {
    name : "Kenny"
}


const person: Person = jill;
console.log(person)


let val : unknown = 22;

val = "hey"


// val = "new value";

// val = new Array();

// val.push(33);
// console.log(val)


let obj : {name : string} & {age: number} = {
    name: 'tom',
    age:25
}

console.log(obj)

let unionObj : null | {name :string} = null;

unionObj = {name : 'jon'}

console.log(unionObj)

let literal : "tom" | "sue";

literal = "tom"

type Run = (miles: number ) => boolean;

let runner : Run = function(miles: number) : boolean {
    if (miles > 10 ){
        return true;
    }

    return false
}

console.log(runner(111))


function oldEnough(age: number) : never | boolean {
    if (age > 59){
        throw Error("Too Old!!!");
    }

    if (age <= 18){
        return false
    }

    return true;
}

//oldEnough(75);

class Human {
    constructor(private msg : string) {}

    speak() {
        console.log(this.msg)
    }
}

const kate = new Human("Hello from Kate");
kate.speak()


class Speaker {
    private message : string;

    constructor(private name: string) {}


    get Message() {
        if(!this.message.includes(this.name)){
            throw Error("message is missing speaker's name");
        }

        return this.message;
    }

    set Message(msg : string){
        let tmpMessage = msg;

        if(!msg.includes(this.name)){
            tmpMessage = this.name + " says " + msg;
        }

        this.message = tmpMessage;
    }
}

const sue = new Speaker("Sue");
sue.Message = "hello"
console.log(sue.Message)

//learning static

class Runner {
    static lastRunType: string;

    constructor(private typeName: string) {}


    run(){
        Runner.lastRunType = this.typeName;
    }
}

const a = new Runner("a");
const b = new Runner("b");


b.run();
a.run();
console.log(Runner.lastRunType)


//learning interfaces

interface Employee {
    name : string;
    id : number;
    isManager : boolean;
    getUniqueId : () => string;
}

const linda : Employee = {
    name: "linda",
    id : 2,
    isManager : false,
    getUniqueId: () : string => {
        let uniqueId = linda.id + "-" +   Math.random().toString(36).substr(2, 9)
        if(!linda.isManager) {
            return "EMP-" + uniqueId
        }

        return uniqueId
    }

}

console.log(linda.getUniqueId())

const pam: Employee = {
    name: "pam",
    id: 3,
    isManager : true,
    getUniqueId: (): string => {
        let uniqueId = pam.id + "-" + Math.random().toString(36).substr(2, 9)

        if(pam.isManager) {
            return "mgr-" + uniqueId;
        }

        return uniqueId;
    }
}

console.log(pam.getUniqueId())

class Vehicle {
    constructor(protected wheelCount: number) {}


    showNumberOfWheels(){
        console.log(`has ${this.wheelCount} wheels`)
    }
}

class Motocycle extends Vehicle {
    constructor(){
        super(2)
    }

    updateWheelCount(newWheelCount:number) {
        this.wheelCount = newWheelCount;
    }
}

class AutoMobile extends Vehicle {
    constructor(){
        super(4)
    }
}

const motocycle = new Motocycle()
console.log(motocycle.showNumberOfWheels())


const autoMobile = new AutoMobile();
console.log(autoMobile.showNumberOfWheels())

//learning Abstract classes

namespace AbstractNamespace {
    abstract class Vehicle{
        constructor(protected wheelCount: number) {}

        abstract updateWheelcount(newWheelCount: number) : void;

        showNumberofWheels() {
            console.log(`This has ${this.wheelCount} wheel(s)`);
        }
    }

    class Motocycle extends Vehicle {
        constructor(){
            super(2);
        }

        updateWheelcount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Motocycle has ${this.wheelCount}`)
        }
    }

    const motocycle = new Motocycle();
    motocycle.updateWheelcount(1);
    motocycle.showNumberofWheels()
}

namespace InterfaceNamespace {
    interface Thing {
        name: string;
        getFullName: () => string;
    }

    interface Vehicle extends Thing {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void;
    }

    class Motocycle implements Vehicle {
        name: string;
        wheelCount: number;

        constructor(name: string) {
            this.name = name;
        }

        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Automobile now has ${this.wheelCount}`);
        }

        showNumberOfWheels(){
            console.log(`Auto has ${this.wheelCount} wheels`)
        }

        getFullName(){
            return "MC-" + this.name
        }
    }

    const moto = new Motocycle("BCycle");
    console.log(moto.getFullName())
}


//learning generics
namespace learnGenerics {
    // function getLength<T>(arg : T) : number {
    //     if(arg.hasOwnProperty("length")){
    //         return arg["length"]
    //     }

    //     return 0;
    // }

    interface HasLength {
        length: number
    }

    function getLength<T extends HasLength>(arg: T) : number {
        return arg.length;
    }

    //console.log(getLength<number>(22))
    console.log(getLength<string>("Kenny Codes for fun"))
}


namespace GenericNamespace {
    interface Wheels {
        count : number;
        diameter : number;
    }

    interface Vehicle<T> {
        getName() : string;
        getWheelCount: () => T
    }

    class AutoMobile implements Vehicle<Wheels> {
        constructor(private name: string, private wheels: Wheels) {}

        getName(): string {
            return this.name;
        }

        getWheelCount() : Wheels {
            return this.wheels;
        }
    }

    class Chevy extends AutoMobile {
        constructor(){
            super("Chevy", {count: 4, diameter: 18});
        }
    }

    const chevy = new Chevy();
    console.log("car name", chevy.getName())
}

namespace OptionalChaining {
    interface Wheels {
        count ?: number;
    }

    interface Vehicle {
        wheels ?: Wheels;
    }

    class AutoMobile implements Vehicle {
        constructor(public wheels?: Wheels){}
    }

    const car: AutoMobile | null = new AutoMobile({count:undefined})

    console.log("car", car)
    console.log("wheels", car.wheels.count)

    const val1 = undefined;
    const val2 = 10;

    const result = val1 ?? val2;
    console.log(result)
}