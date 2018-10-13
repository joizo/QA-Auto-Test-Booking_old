let mainPage = require('../pages/mainPage');

Feature('Base');

Scenario('Test Booking', (I) => {
    I.amOnPage(mainPage.url); // Go to the https://www.booking.com page
    
    I.fillField({xpath: mainPage.locators.inputSearchField}, mainPage.city); // Pick destination: "New York"
    
    mainPage.CheckInDate(); //Pick current date
    
    mainPage.CheckOutDate(); //Pick current date + 7 days
    
    I.click(mainPage.locators.buttonClickOnSearch); // Click on button "Search"
    
    I.dontSeeElement(mainPage.locators.noResultInPage); // Stop when the search result is 0  or Not see "Take charge of your search"
    
    I.see(mainPage.city, mainPage.locators.checkLocation); // Checking whether results should contain "New York" in the location text
});