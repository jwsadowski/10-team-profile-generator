const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school, role, getName) {
        super(name, id, email)
        this.school = school
        this.role = role
        this.getName = getName
        }
    }


Intern.prototype.getSchool = function() {
    return this.school 
}

Intern.prototype.getRole = function() {
    return this.role
}

module.exports = Intern