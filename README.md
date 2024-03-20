# SpendSense - Expenses Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![](https://komarev.com/ghpvc/?username=cgbea)

# Description
SpendSense was created to enable users to easily keep track of their ingoing and outgoing expenses throughout a period of time. This web application was designed with consideration of responsiveness and clear functionality, alongside being visually appealing and supportive for the user. In order to create this application react was used and built upon with the help of libraries and technologies such as node, primereact, bootstrap, chart.js, days.js and UseState.

# Installation
To install this project run npm install and npm run dev.

# Usage
When the webpage is loaded in the browser a home page will appear with a navbar at the top. The Navbar links to the relevant pages throughout the web application. The homepage displays a table showing the most recent ingoings and outgoings alongside the user's balance. 

The Income and Expenditure pages incorporate two input fields where the user can fill in the data of their transactions. The save button will only work if both input fields are used and will show the input data in the table next to the form along with the date the information was submitted. Activation of the submit button will also cahnge the value of the balance. This data will also be saved in the local storage. The income page will only accept positive numberic values and the expenditure page will only except negative numeric values. Additionally, the cancel button will clear the input fields if the user has made an error. 

The history page has a table with three buttons on the side and two buttons above. The buttons along the side of the table activate whether the table shows the recent transactions for both income and expenditure or for just one of them. The buttons at the top of the page allow the user to view the transactions either in the table or in a bar chart. Finally, the about page provides details of SpendSense.

To access the deployed Netlify webpage click this link: https://group-6-expense-tracker.netlify.app/ 

Below is a screenshot of the SpendSense Expenses Tracker:
![screenshot]()

# Credits
Contributors to this group project include:
cgbea, Joyonugha, Khomych1004, Embow24, jcesarmarcondes.

# License
MIT







