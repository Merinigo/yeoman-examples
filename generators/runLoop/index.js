var Generator = require('yeoman-generator');

/*
1. initializing - Your initialization methods (checking current project state, getting configs, etc)
2. prompting - Where you prompt users for options (where you'd call this.prompt())
3. configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
4. default - If the method name doesn't match a priority, it will be pushed to this group.
5. writing - Where you write the generator specific files (routes, controllers, etc)
6. conflicts - Where conflicts are handled (used internally)
7. install - Where installations are run (npm, bower)
8. end - Called last, cleanup, say good bye, etc
*/

module.exports = class runLoopGenerator extends Generator {

    initializing() {
        this.log('\n1. initializing - Your initialization methods (checking current project state, getting configs, etc)');
    }

    prompting() {
        this.log(`2. prompting - Where you prompt users for options (where you'd call this.prompt())`);
    }

    configuring() {
        this.log('3. configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)');
    }

    default() {
        this.log(`4. default - If the method name doesn't match a priority, it will be pushed to this group.`);
    }

    myPriorityName() {
        this.log(`4*. This method name doesn't match a priority`);
    }

    writing() {
        this.log('5. writing - Where you write the generator specific files (routes, controllers, etc)');
    }

    conflicts() {
        this.log('6. conflicts - Where conflicts are handled (used internally)');
    }

    install() {
        this.log('7. install - Where installations are run (npm, bower)');
    }

    end() {
        this.log('8. end - Called last, cleanup, say good bye, etc\n');
    }

}