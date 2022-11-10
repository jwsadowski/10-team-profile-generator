class Employee {
    constructor(name, id, email,) {
        this.name = name
        this.id = id
        this.email = email
        this.getName = getName
        this.getId = getId
        this.getEmail = getEmail
        this.getRole = getRole
    }
}

Employee.prototype.getName = function() {
   return this.name
}

Employee.prototype.getId = function() {
    return this.id
}

Employee.prototype.getEmail = function() {
    return this.email
}

Employee.prototype.getRole = function() {
    return this.role
}


module.exports = Employee
 