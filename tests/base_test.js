let mainPage = require('../pages/mainPage');

Feature('Base');

Scenario('Test Booking', (I) => {
    // Go to the https://www.booking.com page
    I.amOnPage(mainPage.url);
    
    // Pick destination: "New York"
    I.fillField({xpath: mainPage.locators.inputSearchField}, mainPage.city);
    
    //Pick current date
    mainPage.сheckInDate();
    
    //Pick current date + 7 days
    mainPage.сheckOutDate();
    
    // Click on button "Search"
    I.click(mainPage.locators.buttonClickOnSearch);
    
    // Stop when the search result is 0  or Not see "Take charge of your search"
    I.dontSeeElement(mainPage.locators.noResultInPage);
    
    // Checking whether results should contain "New York" in the location text
    I.see(mainPage.city, mainPage.locators.checkLocation);
});