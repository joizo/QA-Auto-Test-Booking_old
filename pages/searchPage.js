let mainPage = require('../pages/mainPage');
let assert = require('assert');

const I = actor();

module.exports = {
    locators: {
        checkLocation: 'div.address > a:nth-child(2)',
        noResultInPage: '//*[@class="take-control__header"]'
    },

    async checkResultInLocation() {
        checkGrabLocations = await I.grabTextFrom(this.locators.checkLocation);
        checkGrabLocations.forEach(function(checkGrabCity) {

            //If chekCity return '-1' its false
            let checkCity = checkGrabCity.indexOf(mainPage.city) != -1;
            assert.equal(checkCity, true);
        });
    }
}