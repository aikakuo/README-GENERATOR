// function to generate markdown for README
function generateMarkdown({
  title,
  license,
  description,
  installation,
  usage,
  contributing,
  tests,
  username,
  imgURL,
  email}) {
  return `# ${title} 
  ![Generic badge](https://img.shields.io/badge/license-${license}-green.svg)
  ***

## Description
  * ${description}
## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)

## Installation
  * ${installation}

## Usage
  * ${usage} 
## Contributing
  * ${contributing}
## Tests
  * ${tests}
## License
  * This application is covered by the ${license} license.
## Author 
* ![usersImage](${imgURL})


## Questions?
* My GitHub: [${username}](https://github.com/${username})

* My Email: ${email}
`;


}

module.exports = generateMarkdown;
