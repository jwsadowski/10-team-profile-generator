const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email)
        this.github = github
        this.role = role
    }
}

Engineer.prototype.getGithub = function() {
    return this.github
}

Engineer.prototype.getRole = function() {
    return this.role
};

module.exports = Engineer