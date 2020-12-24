[![GitHub Repo stars](https://img.shields.io/github/stars/mshuber1981/github-react-portfolio-template?color=%2361dbfb&style=for-the-badge&logo=github)](https://github.com/mshuber1981/github-react-portfolio-template/stargazers/)

# GitHub React Portfolio Template

A fast, responsive React portfolio template that uses the [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest).

Add your GitHub username once and all of your info will automatically be updated. Deploy to GitHub pages in a few simple steps.

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

![Page Speed](/images/speed.png)

### <a href="https://mshuber1981.github.io/github-react-portfolio-template/">LIVE DEMO</a>

![Project Preview](/images/preview.png)

## Getting Started

1. Clone/download
1. Install the dependencies

   - ```bash
     npm i
     ```

1. Navigate to the src directory and open data.js
1. Add your GitHub username (data.js line 19)

   - ```javascript
     /* START HERE - add your GitHub username below
      ************************************************************** */
     export const githubUsername = "your GitHub username here";
     ```

1. Start the development server to view the results

   - ```bash
     npm start
     ```

## Updating the Skills section

![Skills Preview](/images/skills.png)

1. Import your desired skill icons (data.js line 1)

   - ```javascript
     // https://react-icons.github.io/
     import {
       FaHtml5,
       FaCss3Alt,
       FaSass,
       FaBootstrap,
       FaReact,
       FaNpm,
       FaGitAlt,
       FaGithubSquare,
     } from "react-icons/fa";
     import { SiJavascript } from "react-icons/si";
     ```

1. Follow the instructions to update the skillData array (data.js line 23)

   - ```javascript
     /* Skills
     ************************************************************** */
     // Add or remove skills in the SAME format below
     // There must be one icon imported above per skill below and 3 skills per row
     export const skillData = [
       {
         id: 1,
         skill: <FaHtml5 className="display-4" />,
         name: "HTML5",
       },
     ```

## Updating the Projects section

![Projects Preview](/images/projects.png)

1. Follow the instructions to update the filteredProjects array (data.js line 83)

   - ```javascript
     /* Projects
      ************************************************************** */
     // List the repo names you want to include (they will be sorted alphabetically)
     // Leave the array empty if you want to include everything
     export const filteredProjects = [
       "Background-Generator",
       "github-react-portfolio-template",
       "notepad",
     ];
     ```

1. Import the projects images you want to use (data.js line 14), skip steps 2-3 if you want to use the default image

   - ```javascript
     // Projects Images
     // Add your images to the /assets/images directory and import below
     import colors from "./assets/images/colors.svg";
     import robot from "./assets/images/robot.svg";
     import notepad from "./assets/images/notepad.svg";
     ```

1. Follow the instructions to update the projectData array (data.js line 92)

   - ```javascript
     // List the card images you want to include in the same order as the repos above
     // There MUST be one image per repo above or the defualt image will be applied
     export const projectData = [
       {
         image: colors,
       },
       {
         image: notepad,
       },
       {
         image: robot,
       },
     ];
     ```

## Updating the Contact section

![Contact Preview](/images/contact.png)

1. Follow the instructions to update the contactInfo object (data.js line 109)

   - ```javascript
     /* Contact Info
      ************************************************************** */
     // Share the contact info you are comfortable with (no dashes for phone numbers)
     // If no info provided a button with a link to mailchimp will be rendered
     // Update the link if you want to use this option
     export const contactInfo = {
       email: "",
       phone: "",
       mailChimp: "https://www.mailchimp.com/",
     };
     ```

## Deploy

A helpful guide for Create React App deployments with GitHub Pages can be found <a href="https://create-react-app.dev/docs/deployment#github-pages">here</a>.

1. Update the homepage value in package.json (line 3)

   - ```javascript
     "homepage": "https://myusername.github.io/my-app/",
     ```

1. Run the deployment command

   - ```bash
     npm run deploy
     ```

## Donate

Was this helpful? Feeling generous? Please consider donating below.

My [Coinbase](https://www.coinbase.com/) Bitcoin wallet address:

![Bitcoin](/images/bitcoin.png)

[Back to top ⬆](#github-react-portfolio-template)

## License

[MIT](https://choosealicense.com/licenses/mit/)
