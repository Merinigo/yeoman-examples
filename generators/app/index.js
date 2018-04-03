var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.helperMethod = function() { //No se llama automaticamente
            console.log("Helper method!");
        };
    }

    method1(){
        console.log("HOLA YEOMAN!");

        this.helperMethod();
        this._private_method();
    }

    _private_method(){ //No se llama automaticamente
        console.log("Private method!");
    }

};