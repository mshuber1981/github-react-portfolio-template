# A React Portfolio Template for GitHub

[![GitHub Repo stars](https://img.shields.io/github/stars/mshuber1981/github-react-portfolio-template?color=%2361dbfb&style=for-the-badge&logo=github)](https://github.com/mshuber1981/github-react-portfolio-template/stargazers/) [![GitHub Repo Forks](https://img.shields.io/github/forks/mshuber1981/github-react-portfolio-template?color=%2361dbfb&style=for-the-badge&logo=github&label=Forks)](https://github.com/mshuber1981/github-react-portfolio-template/network/members) [![X (formerly Twitter) URL](https://img.shields.io/twitter/url?url=https%3A%2F%2Fx.com&style=for-the-badge&logo=X&label=Say%20thank%20you!&labelColor=black&color=black)](https://twitter.com/intent/tweet?text=Thanks%20for%20the%20awesome%20Portfolio%20Template!%20https://github.com/mshuber1981/github-react-portfolio-template&via=MikeyHuber1981)

A performant, accessible, progressive React portfolio template that uses the [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest).

Add your GitHub username once and all of your info will automatically be updated. Deploy to GitHub pages in a few simple steps.

## [Live Demo](https://mshuber1981.github.io/github-react-portfolio-template/#/)

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

![Page Speed](/README_images/speed.png)

## Light And Dark Themes

![Hero Light](/README_images/hero.png)

![Hero Dark](/README_images/heroDark.png)

### Getting Started

1. [Create a repository from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
2. [Clone your new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
3. Make sure [Node](https://nodejs.org/en/) is installed
4. Open your project and install the dependencies

   ```bash
   npm install
   ```

5. Navigate to the src directory and open src/config.js
6. Add your GitHub username ([src/config.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/config.js#L18) line 18)

   ```javascript
   /* START HERE
   ************************************************************** 
     Add your GitHub username (string - "YourUsername") below.
   */
   export const githubUsername = "Your GitHub username here";
   ```

7. Start the development server to view the results

   ```bash
   npm start
   ```

### Updating the Contact section

![Projects](/README_images/contact.png)

1. The contact form uses [Formspree](https://formspree.io/), create an account and add your endpoint URL ([src/config.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/config.js#L114) line 114)

   ```javascript
   /* Contact Info
   ************************************************************** 
     Add your formspree endpoint below.
     https://formspree.io/
   */
   export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
   ```

### Deploy

A helpful guide for Create React App deployments with GitHub Pages can be found [here](https://create-react-app.dev/docs/deployment#github-pages).

1. Update the homepage value ([package.json](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/package.json#L3) line 3)

   ```json
   "homepage": "https://YourUserName.github.io/your-repo/",
   ```

2. Run the deploy command

   ```bash
   npm run deploy
   ```

### Customization Options

Checkout the [Wiki](https://github.com/mshuber1981/github-react-portfolio-template/wiki) for additional customization options:

- [Updating the Navbar Logo](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Navbar-Logo)
- [Updating the Main section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Main-section)
- [Updating the About Me section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-About-Me-section)
- [Updating the Skills section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Skills-section)
- [Updating the Projects section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Projects-section)
- [Updating the theme color](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-theme-color)
- [Updating the Footer icons theme (light or dark)](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Footer-icons-theme)

[Back to top :top:](#a-react-portfolio-template-for-github)

### License

[MIT](https://choosealicense.com/licenses/mit/)
