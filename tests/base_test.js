let mainPage = require('../pages/mainPage');
let searchPage = require('../pages/searchPage');

Feature('Base');

Scenario('Test Booking', async (I) => {
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
    
    //-------------------------------------------------
    // Stop when the search result is 0 or Not see "Take charge of your search"
    I.dontSeeElement(searchPage.locators.noResultInPage);
    
    const checkLocations = await I.grabTextFrom(searchPage.locators.checkLocation);
    
    checkLocations.forEach(function(checkCity) {
       if (checkCity.indexOf('New York') == -1) {
           I.see(searchPage.locators.noResultInPage);
       }
   });

});