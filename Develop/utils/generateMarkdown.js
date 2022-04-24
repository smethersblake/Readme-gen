// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge (license)
{
  if (license)
  {
    licenseBadge = `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
    return licenseBadge
  }
  else
  {
    licenseBadge = ''
    return licenseBadge
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license)
{
  if (license)
  {
    licenseLink = `https://opensource.org/licenses/${license}`
    return licenseLink
  }
  else
  {
    licenseLink = ''
    return licenseLink
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (licenseBadge, licenseLink)
{
  if (licenseBadge === '')
  {
    licenseData = ''
    return licenseData
  }
  else
  {
    licenseData = licenseBadge + ' ' + licenseLink
    return licenseData
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data)
{
  renderLicenseBadge(data.license)
  renderLicenseLink(data.license)
  renderLicenseSection(licenseBadge, licenseLink)
  return `# ${data.projectTitle}
  
  ${licenseData}
  ## Description
  ${data.decription}

  ## Table of Contents
  * [Installation](#Installation)
  * [Product Used](#Product)
  * [Licence](#Licence)
  * [Contributors](#Contributors)
  * [Test Links](#Test)
  * [Questions](#Questions)
  * [GitHub Link](#GitHub)
  * [Email](#Email)

  ## Installation
  ${data.installationUsed}

  ## Product
  ${data.use}

  ## Licence
  Used ${data.license}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}

  ## GitHub
  https://github.com/${data.github}

  ## Email
  ${data.email}
`;
}

module.exports = generateMarkdown