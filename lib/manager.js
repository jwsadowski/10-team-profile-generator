const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role, getName) {
        super(name, id, email,)
        this.officeNumber = officeNumber
        this.role = role
        this.getName = getName
        }
    }


Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

Manager.prototype.getRole = function() {
    return this.role;
}

module.exports = Manager