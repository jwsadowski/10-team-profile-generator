const inquirer = require('inquirer')

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


  


   




