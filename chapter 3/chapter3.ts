if (true){
    var val1 = 1;
}

function go(){
    var val2 = 2;
}


namespace constants {
    const val1 = 1;
    //val1 = 2;
    const val2 = [];
    val2.push("Hello")
}


namespace lets {
    let val1 = 1;
    val1 = 2;

    if (true) {
        let val2 = 3;
        val2 =3;
    }

    console.log(val1)
    //console.log(val2)

}


namespace MyFunction{
    function myFunction(){
        console.log(this)
    }

    myFunction();

    let test = new myFunction();
}




console.log(val1);

const arrowFunc = (mesage:string) : void => {
    console.log(mesage)
}


class A {

    name:string = "Kenny"
    go(){
        console.log(this.name)
    }
}

class B {
    name: string = "B";

    go() {
        console.log (this.name)
    }
}

const a = new A();
a.go()


const b = new B();
b.go = b.go.bind(a)
b.go()


