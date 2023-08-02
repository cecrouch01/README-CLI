const { makeBadge, ValidationError } = require('badge-maker')
//This is the array of license URL's
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
    const badge = makeBadge(format)
    return badge
  }

}
//This renders the link for the license
function renderLicenseLink(license) {
  for(let i =0; i < licenseURL.length; i++){
    if(license === licenseURL[i].title){
      return licenseURL[i].url
    }
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
