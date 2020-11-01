# Burger Logger
    
![GitHub stars](https://img.shields.io/github/stars/chrisjmckeown/burger?style=social)![GitHub forks](https://img.shields.io/github/forks/chrisjmckeown/burger?style=social)![GitHub watchers](https://img.shields.io/github/watchers/chrisjmckeown/burger?style=social)![GitHub followers](https://img.shields.io/github/followers/chrisjmckeown?style=social)
    
[![license](https://img.shields.io/github/license/chrisjmckeown/burger?style=flat-square)](https://github.com/chrisjmckeown/burger/blob/master/LICENSE)![GitHub repo size](https://img.shields.io/github/repo-size/chrisjmckeown/burger?style=flat-square)![GitHub last commit](https://img.shields.io/github/last-commit/chrisjmckeown/burger?style=flat-square)[![GitHub contributors](https://img.shields.io/github/contributors/chrisjmckeown/burger?style=flat-square)](https://GitHub.com/chrisjmckeown/burger/graphs/contributors/)[![GitHub pull-requests](https://img.shields.io/github/issues-pr/chrisjmckeown/burger?style=flat-square)](https://GitHub.com/chrisjmckeown/burger/pull/)
    
## Description
    
The Burger Logger app that lets users input the names of burgers they'd like to eat, and then track when they have eat them! 
    
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
1. Download and install [Node.js](http://nodejs.org/) (that will install npm as well)
2. Download and install [MySQL Community Server](https://dev.mysql.com/downloads/mysql) and [MySQL Workbench](https://dev.mysql.com/downloads/workbench/). These are the two database tools I used.
4. Install the 3 dependancies.<br />
    ```
    npm install express express-handlebars mysql moment
   ```
5. Use the seed.sql file to create the mysql database and tables.  
6. You are done for the setup, run the readme generator using 
    ```
    node server.js
   ```  

### Technologies Utilized
![GitHub language count](https://img.shields.io/github/languages/count/chrisjmckeown/burger?style=flat-square)![GitHub top language](https://img.shields.io/github/languages/top/chrisjmckeown/burger?style=flat-square)

<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

## Usage
 
Once installed:
* Run the Employee Tracker using:
```
   node server.js
```
The app puts burgers in two lists, those to eat on the left, and those devoured on the right. 
* Add burgers you want to eat or have aleady eaten, note the date added.
* Click on an added burger to devoure it. Note the date devoured.
* Delete a burger in either list if a mistake was made.
* Clear all burgers to start from scratch!

<img src="./public/assets/img/burger.png" alt="Burger Logger image"> 

### Heroku Deployment

View the deployed app here: https://agile-badlands-99229.herokuapp.com/

## License
 
[![license](https://img.shields.io/github/license/chrisjmckeown/burger.svg?style=flat-square)](https://github.com/chrisjmckeown/burger/blob/master/LICENSE)

## Contributing
 
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Tests
Test the heroku app to ensure all functionality works as expected. 

## Questions
    
* Follow me at: <a href="https://github.com/chrisjmckeown" target="_blank">https://github.com/chrisjmckeown</a>
    
* Please email with any question at: chris.j.mckeown@hotmail.com
    
© 2020 chrisjmckeown