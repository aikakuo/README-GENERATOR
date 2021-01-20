const inquirer = require('inquirer');
const fs = require ('fs')
const util = require ('util')
const generateMarkdown = require ('./utils/generateMarkdown')
const axios = require('axios')

console.log(generateMarkdown)

// array of questions for user
const questions = [{
    type: 'input',
    message: "What is your Github username?",
    name: 'username',
   
},
{
  type: 'input',
  message: "What is the name of your Github repository?",
  name: 'repository',
 
},
{
  type: 'input',
  message: "What is your email?",
  name: 'email',
 
},
{
  type: 'input',
  message: "What is your projects title?",
  name: 'title',
 
},
{
  type: 'input',
  message: "Provide a description of your project",
  name: 'description',
 
},
{
  type: 'input',
  message: "Does your project has any Installation instructions, if yes please describe?",
  name: 'installation',
 
},
{
  type: 'input',
  message: "How do you use your application, please provide example?",
  name: 'usage',
 
},
{
  type: 'input',
  message: "How other developer's can contribute in your project?",
  name: 'contributing',
 
},
{
  type: 'input',
  message: "What types of test did you run on your project? ",
  name: 'tests',
 
},
{
  type: 'list',
  message: "Please choose type of License you need for your project",
  name: 'license',
  choices: [
  "Apache",
  "Academic",
  "GNU",
  "ISC",
  "MIT",
  "Mozilla",
  "Unlicensed"],
 
}]


// function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log('Your README.md file is generated!')
  );
}

// function to initialize program
async function init() {
  const answers = await inquirer.prompt(questions)
  console.log(answers)
  let gitUserName = await callGitHub(answers.username)
  console.log(gitUserName)
  //gets users profile picture under Author section
  answers.imgURL = gitUserName.data.avatar_url
  console.log(answers.imgURL)
  //generating readme file
  const filename = `./README.md`;
  const textString = generateMarkdown(answers)
  writeToFile(filename, textString)
 
  
} 

function callGitHub(username) {
  console.log(username)
  return axios.get(`https://api.github.com/users/${username}
  `)  
}

// function call to initialize program
init();
