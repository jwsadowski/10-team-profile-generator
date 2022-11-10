const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github, role, getName) {
        super(name, id, email)
        this.github = github
        this.role = role
        this.getName = getName
        }
    }


Engineer.prototype.getGithub = function() {
    return this.github
}

Engineer.prototype.getRole = function() {
    return this.role
};

Engineer.prototype.getName = function () {
    return this.getName
}

module.exports = Engineer