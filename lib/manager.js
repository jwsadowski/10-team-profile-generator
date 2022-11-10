const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role,) {
        super(name, id, email,)
        this.officeNumber = officeNumber
        this.role = role
        }
    }

Manager.prototype.getName = function() {
    return this.name
} 

Manager.prototype.getId = function() {
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

module.exports = Manager