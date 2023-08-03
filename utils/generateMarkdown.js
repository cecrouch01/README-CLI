const { makeBadge, ValidationError } = require('badge-maker')
const fs = require('fs');
const { Octokit } = require ("octokit")
let octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})
//This creates the LICENSE.md with content.
function createLICENSE(licenseContent){
  fs.writeFileSync('LICENSE.md', licenseContent);
}
//This creates the badge.svg file to use for README
function createSVGFile(data){
  fs.writeFileSync('./assets/badge.svg', data)
}
//This creates the badge for the README
function renderLicenseBadge(license) {
  const format = {
    label: 'License',
    message: license,
    color: 'brightgreen'
  }
  if(license === 'No License') {
    return ''
  } else {
    const badge = makeBadge(format);
    createSVGFile(badge);
    return '![Badge](./assets/badge.svg)'
  }

}

//This renders the link for the license
async function renderLicenseLink(license) {
  if(license === 'No License') {
    return ''
  } else {
    let licensURL = await octokit.request(`GET /licenses/${license}`, {
      license: 'LICENSE',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    createLICENSE(licensURL.data.body)
    return licensURL.data.html_url
  }
} 

//This renders the license section
function renderLicenseSection(license) {
  if(license === 'No License'){
    return ''
  } else {
    return `${license}. For more information go to ${renderLicenseLink(license)}`
  }
}
//This creates the Markdown for the README
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
  ${data.tests}

  ## License

  ${renderLicenseSection(data.license)}
 
  ---
  ## Questions?
  If you would like to see some of my other work go to https://github.com/${data.username}.
  If you have any additional questions feel free to contact me at: ${data.email}
  `
  
 
  return markDown
}

module.exports = generateMarkdown;
