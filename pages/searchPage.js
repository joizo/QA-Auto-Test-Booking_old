let mainPage = require('../pages/mainPage');

const I = actor();

module.exports = {
    locators: {
        noResultInPage: '//*[@class="take-control__header"]',
        checkLocation: 'div.address > a:nth-child(2)'
    },

    checkResultInLocation: async () => {
        checkGrabLocations = await I.grabTextFrom('div.address > a:nth-child(2)');
        checkGrabLocations.forEach(function(checkGrabCity) {
            if (checkGrabCity.indexOf(mainPage.city) == -1) {
                I.see('//*[@class="take-control__header"]');
            }
        });
    }
}