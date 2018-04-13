var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    initializing() {
        this.log('\nEJEMPLO YEOMAN\n**************\n');

        this.log('privateMethods: yo ejemplo-generator:privateMethods');
        this.log('runLoop: yo ejemplo-generator:runLoop');
        this.log('asyncMethods: yo ejemplo-generator:asyncMethods');

        this.log('\n')
    }

};