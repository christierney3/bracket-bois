
## Bracket Bois


![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) ![License](https://img.shields.io/badge/License-MIT-blue.svg)

## License description: (https://opensource.org/licenses/MIT)

## Description:
Bracket Bois is a tournament style bracket generator for any competitive event with multiple teams. As a user you are able to view tournaments and their respective details. As an authorized user you are also able to create and edit your own tournaments. The data entered is saved in the database and is used to populate the page.

The data entered is saved in the database and is used to populate the page. This project leverages a node.js application, handlebars html templates, bcrypt for password encryption and the sequelize npm package to connect to the MySQL database. The appeal of this concept was the wide range of applications in which it could be used. We have big plans for the Bracket Bois application going forward!


## Table of Contents
* [Description](#description)
* [Installtion](#installation)
* [Usage Info](#usage)
* [Contributions](#contributing)
* [Questions](#questions)


## Installation: 
If you run this application locally you will need to run the commands below:

1. Clone the git repository to your local machine.
2. Login to your local MySQL instance and type SOURCE db/schema.sql. 
3. Type the USE bracket_db command to change to the appropriate database. 
4. Once complete install all of the package dependencies by entering the following command in your bash/terminal:
```bash
npm i
```
5. Update the environment variables in the ".env.example" file to match your MySQL credentials (remove the ".example" suffix from the file name). 
6. Seed your database with test data by running 
```bash
npm run seed
```
7. Start the local server by running and click on the link to the file
```bash
npm start
```

## Usage:

This application can be used to create tournaments for any type of head-to-head tournament bracket. Unauthenticated users may view any of the current tournaments, but to create a new tournament, you will need to be logged-in. Click the Login icon at the top right of the page. If you do not have an account, click the "Register" link at the bottom of the page. Once logged in, you can click the "Create Tournament" link to enter your tournament details.


## Contributing:
This application was developed by Chris Leavengood, Clayton Weber, and Chris Tierney. If you like the product, you can buy us a beer. Additionally, if you have ideas of how we can make this product better, please contact us at the email address below.


## Questions:
If you have any questions please contact me at chris.tierney3@gmail.com or https://github.com/christierney3