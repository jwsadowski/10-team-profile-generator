const inquirer = require('inquirer');

inquirer
  .prompt([
    {
       name: 'id',
       message: 'What is your id?'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.id)
  });

inquirer
  .prompt([
    {
        name: 'email',
        message: 'What is your email address?'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.email)
  });

inquirer
  .prompt([
    {
        name: 'github',
        message: 'What is your github username?'
    },
  ]) 
  .then(answers => {
    console.info('Answer:', answers.github)
  }) 

inquirer
  .prompt([
    {
        name: 'role',
        message: 'What is your role?'
    },
  ])
  .then(answers => {
    console.info('Answer:,', answers.role)
  }) 



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