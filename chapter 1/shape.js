var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var jill = {
    name: "Kenny"
};
var person = jill;
console.log(person);
var val = 22;
val = "hey";
// val = "new value";
// val = new Array();
// val.push(33);
// console.log(val)
var obj = {
    name: 'tom',
    age: 25
};
console.log(obj);
var unionObj = null;
unionObj = { name: 'jon' };
console.log(unionObj);
var literal;
literal = "tom";
var runner = function (miles) {
    if (miles > 10) {
        return true;
    }
    return false;
};
console.log(runner(111));
function oldEnough(age) {
    if (age > 59) {
        throw Error("Too Old!!!");
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
//oldEnough(75);
var Human = /** @class */ (function () {
    function Human(msg) {
        this.msg = msg;
    }
    Human.prototype.speak = function () {
        console.log(this.msg);
    };
    return Human;
}());
var kate = new Human("Hello from Kate");
kate.speak();
var Speaker = /** @class */ (function () {
    function Speaker(name) {
        this.name = name;
    }
    Object.defineProperty(Speaker.prototype, "Message", {
        get: function () {
            if (!this.message.includes(this.name)) {
                throw Error("message is missing speaker's name");
            }
            return this.message;
        },
        set: function (msg) {
            var tmpMessage = msg;
            if (!msg.includes(this.name)) {
                tmpMessage = this.name + " says " + msg;
            }
            this.message = tmpMessage;
        },
        enumerable: false,
        configurable: true
    });
    return Speaker;
}());
var sue = new Speaker("Sue");
sue.Message = "hello";
console.log(sue.Message);
//learning static
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunType = this.typeName;
    };
    return Runner;
}());
var a = new Runner("a");
var b = new Runner("b");
b.run();
a.run();
console.log(Runner.lastRunType);
var linda = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = linda.id + "-" + Math.random().toString(36).substr(2, 9);
        if (!linda.isManager) {
            return "EMP-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueId());
var pam = {
    name: "pam",
    id: 3,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = pam.id + "-" + Math.random().toString(36).substr(2, 9);
        if (pam.isManager) {
            return "mgr-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(pam.getUniqueId());
var Vehicle = /** @class */ (function () {
    function Vehicle(wheelCount) {
        this.wheelCount = wheelCount;
    }
    Vehicle.prototype.showNumberOfWheels = function () {
        console.log("has " + this.wheelCount + " wheels");
    };
    return Vehicle;
}());
var Motocycle = /** @class */ (function (_super) {
    __extends(Motocycle, _super);
    function Motocycle() {
        return _super.call(this, 2) || this;
    }
    return Motocycle;
}(Vehicle));
var AutoMobile = /** @class */ (function (_super) {
    __extends(AutoMobile, _super);
    function AutoMobile() {
        return _super.call(this, 4) || this;
    }
    return AutoMobile;
}(Vehicle));
var motocycle = new Motocycle();
console.log(motocycle.showNumberOfWheels());
var autoMobile = new AutoMobile();
console.log(autoMobile.showNumberOfWheels());
