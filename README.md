# QA Automation Test Case 
Implementation of Automation Test whith site Booking.com using CodeceptJS.
## Prerequisites
* **Browser Chrome >= 68;**
* **JDK >= 1.8.0_144;**
* **Node.js >= 8.9.1;**
* **npm >= 5.5.1;**
## Project structure:
**Summary:**
Select on the website of the "Booking.com" page New York City and insert the current date of registration and the date of departure from the hotel.

**Steps:**
1) Go to the https://www.booking.com page;
2) Pick destination: "New York";
3) Pick current date;
4) Pick current date + 7 days;
5) Click on button "Search";
6) On the search results page it check whether there is at least 1 result;
7) Check all results are from New York on Search Page in the location text.

**Expected Result:**
All steps is passed
## Run
Install the necessary packages for test
```
npm install
```
Run install Selenium driver for browsers
```
npm run selinstall
```
Run Selenium-standalone server
```
npm run selstart
```
Run Test
```
npm run runtest
```
