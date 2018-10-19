
moment = require('moment');

// Check current date
chekinDate = moment();
// Check current date + 7 days
chekoutDate = moment().add(7, 'days');

const I = actor();

module.exports = {
  city: 'New York',
  url: 'www.booking.com',
  locators: {
    inputSearchField: '//*[@id="ss"]',
    buttonClickOnSearch: '//*[@class="xp__button"]'
  },
  
  сheckInDate() {
    I.fillField('checkin_monthday', chekinDate.format('DD'));
    I.fillField('checkin_month', chekinDate.format('MM'));
    I.fillField('checkin_year', chekinDate.format('YYYY'));
  },
  
  сheckOutDate() {
    I.fillField('checkout_monthday', chekoutDate.format('DD'));
    I.fillField('checkout_month', chekoutDate.format('MM'));
    I.fillField('checkout_year', chekoutDate.format('YYYY'));
  }
}