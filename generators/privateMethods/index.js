var Generator = require('yeoman-generator');

class MyBase extends Generator {
    helper() {
        console.log('los metodos del generador padre no se llamaran automaticamente'); //No se llama automaticamente
    }
}

module.exports = class extends MyBase {

    constructor(args, opts) {
        super(args, opts);

        this.helperMethod = function() { //No se llama automaticamente
            console.log("Helper method!");
            
            this.helper();
        };
    }

    method1(){
        console.log("HOLA YEOMAN!");
    }

    _private_method(){ //No se llama automaticamente
        console.log("Private method!");
    }

};