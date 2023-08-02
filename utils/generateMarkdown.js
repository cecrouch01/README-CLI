const { makeBadge, ValidationError } = require('badge-maker')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseURL = [
  {
    title: 'No License', 
    url: '',
  },
  {
    title: 'MIT', 
    url: 'https://opensource.org/licenses/MIT',
  },
  {
    title: 'Apache 2.0', 
    url: 'https://opensource.org/licenses/Apache-2.0',
  },
  {
    title: 'GPL v3.0', 
    url: 'https://www.gnu.org/licenses/gpl-3.0',
  },
  {
    title: 'BSD 2-Clause', 
    url: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  {
    title: 'BSD 3-Clause', 
    url: 'https://opensource.org/licenses/BSD-2-Clause',
  },
  {
    title: 'Boost 1.0', 
    url: 'https://www.boost.org/LICENSE_1_0.txt',
  },
  {
    title: 'CC0', 
    url: 'http://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    title: 'EPL 2.0', 
    url: 'https://opensource.org/licenses/EPL-1.0',
  },
  {
    title: 'AGPL v3.0', 
    url: 'https://www.gnu.org/licenses/agpl-3.0',
  },
  {
    title: 'LGPL v2.1', 
    url: 'https://www.gnu.org/licenses/lgpl-3.0',
  },
  {
    title: 'GPL v2.0', 
    url: '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
  },
  {
    title: 'MPL 2.0', 
    url: 'https://opensource.org/licenses/MPL-2.0',
  },
  {
    title: 'Unlicense', 
    url: 'http://unlicense.org/',
  },
  {
    title: 'Beerware License',
    url: 'https://www.tldrlegal.com/license/beerware-license',
  },

]
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
function renderLicenseLink(license) {
  for(let i =0; i < licenseURL.length; i++){
    if(license === licenseURL[i].title){
      return licenseURL[i].url
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No License'){
    return ''
  } else {
    return `${license}. For more information go to ${renderLicenseLink(license)}`
  }
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
  ${renderLicenseSection(data.license)}
 
  ---
  ## Questions?
  If you have any questions feel free to contact me at ${data.username} or ${data.email}
  `
  
 
  return markDown
}

module.exports = generateMarkdown;
