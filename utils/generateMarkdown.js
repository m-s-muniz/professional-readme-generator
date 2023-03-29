// Created a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-mediumblue.svg)`;
  }
  return "";
}

// Created a function that returns the license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

//Created a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
        Licensed under the ${license} license.`;
  }
  return "";
}



//Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)


## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributors}
## Testing
\`\`\`
${data.test}
\`\`\`
## Questions
* Github - [${data.github}](https://github.com/${data.github}/)
* Email - ${data.email}
`;
}

module.exports = generateMarkdown;
