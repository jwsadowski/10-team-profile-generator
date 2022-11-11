import inquirer  from 'inquirer'

inquirer
  .prompt([
    {
       name: 'id',
       message: 'What is your id?'
    },
    {
       name: 'email',
       message: 'What is your email address?' 
    },
    {
       name: 'github',
       message: 'What is your github username?'
    },
    {
       name: 'role',
       message: 'What is your role?'
    }
  ])
  .then(answers => {
    console.info('Answers:', answers)
  }) 


  


   




