// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license === "APACHE"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 
  else if(license === "Boost"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } 
  else if(license === "GNU"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } 
  else if(license === "Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ``
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return `https://opensource.org/licenses/MIT`
  } else if (license === "APACHE"){
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === "Boost"){
    return `https://www.boost.org/LICENSE_1_0.txt`
  } else if (license === "GNU"){
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license === "Mozilla"){
    return `https://opensource.org/licenses/MPL-2.0`
  } else {
    return ``
 }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ---
  ## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Features](#features)
5. [Technologies](#technologies)
6. [Dependencies](#dependencies)
7. [Testing](#testing)

  ---

  ## Installation
  ${data.installation}

  ---

  ## Usage
  ${data.usage}

  ---

  ## License
  This app is licensed under ${data.license}
  <br>
  License link: ${renderLicenseLink(data.license)}

  ---

  ## Features
  ${data.features}

  ---

  ## Technologies Used
  ${data.technologies}

  ---

  ## Dependencies
  ${data.dependencies}

  ---

  ## Testing
  ${data.testing}

  ---

  ## Author's Info

  ${data.author}

  Email Contact:
  ${data.email}

  GitHub User Name:
  ${data.github}

  ---

  ## Collaborators or Contributors
  ${data.collab}

  ---

  ## GitHub Repo Link
  ${data.gitlink}

  ---

  ## Link to Deployed Application
  ${data.deployed}

  ---

`;
}

module.exports = generateMarkdown;
