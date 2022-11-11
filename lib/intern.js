const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email)
        this.school = school
        this.role = role
    }
}

Intern.prototype.getName = function() {
    return this.name
}  

Intern.prototype.getId = function() {
    if (typeof this.id != "number") {
        throw new Error("Expected parameter 'id' to be a number")
    }
    return this.id
}

Intern.prototype.getEmail = function() {
    return this.email
}


Intern.prototype.getSchool = function() {
    return this.school 
}

Intern.prototype.getRole = function() {
    return this.role
}

module.exports = Intern