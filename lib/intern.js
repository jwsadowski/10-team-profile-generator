const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email)
        this.school = school
        this.role = role
    }
}

Intern.prototype.getSchool = function() {
    return this.school 
}

Intern.prototype.getRole = function() {
    return this.role
}

module.exports = Intern