const { makeBadge, ValidationError } = require('badge-maker')
const { Octokit } = require ("octokit")
let octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const format = {
    label: 'License',
    message: license,
    color: 'brightgreen'
  }
  if(license === 'No License') {
    return ''
  } else {
    const badge = makeBadge(format)
    return badge
  }

}

//Just put these in the license section
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
async function renderLicenseLink(license) {
  if(license === 'Beerware License'){
    return "https://www.tldrlegal.com/license/beerware-license"
  } else {
    console.log(process.env.GITHUB_TOKEN)
    let licensURL = await octokit.request(`GET /licenses/${license}`, {
      license: 'LICENSE',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    console.log(licensURL)
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const markDown = 
  `${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#contributing-credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing Credits
  ${data.credits}
      
  ## Tests
  ${data.test}

  ## License
  ${renderLicenseLink(data.license)}
  
  ---
  ## Questions?
  If you have any questions feel free to contact me at ${data.username} or ${data.email}
  `
  
 
  return markDown
}

module.exports = generateMarkdown;
