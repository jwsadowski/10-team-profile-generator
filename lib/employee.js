class Employee {
    constructor(name, id, email, role, school, officeNumber, github) {
        this.name = name
        this.id = id
        this.email = email
        this.role = role
        this.school = school
        this.officeNumber = officeNumber
        this.github = github
    }
}

Employee.prototype.getName = function() {
   return this.name
}

Employee.prototype.getId = function() {
    if (typeof this.id != "number") {
        throw new Error("Expected parameter 'id' to be a number")
    }
    return this.id
}

Employee.prototype.getEmail = function() {
    return this.email
}

Employee.prototype.getRole = function() {
    return this.role
}

Employee.prototype.getSchool = function() {
    return this.school
}

Employee.prototype.getOfficeNumber = function() {
    return this.officeNumber
}

Employee.prototype.getGithub = function() {
    return this.github
}


module.exports = Employee
 