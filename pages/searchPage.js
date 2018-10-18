let mainPage = require('../pages/mainPage');

const I = actor();

module.exports = {
    locators: {
        noResultInPage: '//*[@class="take-control__header"]',
        checkLocation: 'div.address > a:nth-child(2)'
    },

    searchCityInLocation: async () => {
            const checkGrabLocations = await I.grabTextFrom('div.address > a:nth-child(2)');
            console.log(checkGrabLocations);

            console.log("-------------------------------");
            checkGrabLocations.forEach(function(checkGrabCity)
            {
                if (checkGrabCity.indexOf('Gamagata') == -1) {
                    I.see('//*[@class="take-control__header"]');
                }
            console.log(checkGrabCity + " ===> " + checkGrabCity.indexOf('Gamagata'));
            });
        }
}
//mainPage.city