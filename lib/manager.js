const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role, school) {
        super(name, id, email,)
        this.officeNumber = officeNumber
        this.role = role
        this.school = school
        }
    }

Manager.prototype.getName = function() {
    return this.name
} 

Manager.prototype.getId = function() {
    if (typeof this.id != "number") {
        throw new Error("Expected parameter 'id' to be a number")
    }
    return this.id
}

Manager.prototype.getEmail = function() {
    return this.email
}

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber
}

Manager.prototype.getRole = function() {
    return this.role
}

Manager.prototype.getSchool = function() {
    return this.school
}

module.exports = Manager