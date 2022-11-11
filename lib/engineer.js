const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github, role,) {
        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
        this.github = github
        this.role = role
        }
    }
Engineer.prototype.getName = function() {
    return this.name
}

Engineer.prototype.getId = function() {
    if (typeof this.id != "number") {
        throw new Error("Expected parameter 'id' to be a number")
    }
    return this.id
}

Engineer.prototype.getEmail = function() {
    return this.email
}

Engineer.prototype.getGithub = function() {
    return this.github
}

Engineer.prototype.getRole = function() {
    return this.role
};


module.exports = Engineer