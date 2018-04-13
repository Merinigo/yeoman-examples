var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    asynTask() {
        var done = this.async();

        console.log("startTask");

        setTimeout(function(){
            console.log("taskDone");
            done();
        }, 1000);

        console.log("waiting...");
    }

    writing() {
        console.log("writingMethod");
    }

}
