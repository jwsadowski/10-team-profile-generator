const inquirer = require('inquirer');



class Employee {
    constructor(name, id, email, getName, getId, getEmail, getRole) {
        this.name = name
        this.id = id
        this.email = email
        this.getName = getName
        this.getId = getId
        this.getEmail = getEmail
        this.getRole = getRole
    }
}
   

class Engineer extends Employee {
    constructor(github, getGithub, getRole) {
        this.github = github
        this.getGithub = getGithub
        this.getRole = getRole
    }
}
   

class Intern extends Employee {
    constructor(school, getSchool, getRole) {
        this.school = school
        this.getSchool = getSchool
        this.getRole = getRole
    }
}

class Manager extends Employee {
    constructor(officeNumber, getRole) {
        this.officeNumber = officeNumber
        this.getRole = getRole
    }
}