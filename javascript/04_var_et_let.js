function demoVar() {
    console.log(x) //undefined

    var x = 5;

    if(true) {
        var x = 10; //redéfinition de la variable x
    }

    console.log(x); //10
}

function demoLet() {
    let y = 5; //ReferenceError

    if(true) {
        let y =10;
    }

    console.log(y) //5
}