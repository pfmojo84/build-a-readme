// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ##Description
  ${data.description}
  ##Installation Instructions
  ${data.installation}
  ##Operational How-To
  ${data.usage}
  ##Features
  ${data.features}
  ##Technologies Used
  ${data.technologies}
  ##Required Dependencies
  ${data.depend}
  ##Required Testing
  ${data.test}
  ##Author's Name
  ${data.author}
  ##Author's Email Contact
  ${data.email}
  ##Author's GitHub Page
  ${data.github}
  ##Collaborators or Contributors
  ${data.collab}
  ##GitHub Repo Link
  ${data.gitlink}
  ##Link to Deployed Application
  ${data.deployed}


`;
}

module.exports = generateMarkdown;
