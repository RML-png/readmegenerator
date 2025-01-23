// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "none") { 
return ""
  } else { 
return "- [License](#license)"
  }
}
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache-2.0") {
    return `![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GPL-3.0") {
    return `![License: GPL-3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
  }

 // Add other licenses as needed
 return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
// function renderLicenseLink(license) {
//   if (license === "none") { 
//     return "";
//   } else { 
//     return "- [License](#license)";
//   }
// }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [License](#license)
${renderLicenseLink(data.license)
}
## Installation
${data.instruction}


## Usage
${data.information}

## Badges
${renderLicenseBadge(data.license)}



## How to Contribute
${data.contribution}

## Tests
${data.test}
${renderLicenseLink(data.license)}
`;
}

export default generateMarkdown;
