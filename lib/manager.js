const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email,)
        this.officeNumber = officeNumber
        this.role = role
    }
}

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

Manager.prototype.getRole = function() {
    return this.role;
}

module.exports = Manager