// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Mit') {
    return `![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  else {
    return ''; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Mit') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'Mit') {
    return '[License](#license)'
  }
  else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseSection}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${licenseBadge}

  ${licenseLink}

  ## Contributing 

  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## Questions

  How to reach me? 

  Any further questions please contact me at ${data.email}

  You can also check out my [GitHub profile](https://github.com/${data.github}) for more projects.
`;
}

module.exports = generateMarkdown;
