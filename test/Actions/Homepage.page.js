var Page = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/Actions/Page.js');

const airport = {
    BFS: 'BFS', 
    LBA: 'LBA',
    LCA: 'LCA',
    ALC: 'ALC'
}

var Homepage = Object.create(Page, {

link_emailSignUpLightboxClose: { get: function() { return browser.element('[class="t071a-close-lightbox"]'); } },
searchPanel: { get: function() { return browser.element('[name="search-panel"]'); } },
link_searchPanelShowDepList: { get: function() { return browser.element('[data-modal-id="departureList"][data-searchbox="search-box-from"]'); } },
link_searchPanelShowArrList: { get: function() { return browser.element('[data-modal-id="destinationList"][data-searchbox="search-box-to"]'); } },
link_depAirport: { get: function() { return browser.element('//div[@data-apt="depart"]/div[@class="search__airport__wrapper"]/div/div[@class="tabs__content tabs__content--active"]/ul/li[@data-iata="' + airport.LBA + '"]'); } },
link_arrAirport: { get: function() { return browser.element('//div[@data-apt="arrival"]/div[@class="search__airport__wrapper"]/div/div[@class="tabs__content tabs__content--active"]/ul/li[@data-iata="' + airport.ALC + '"]'); } },
input_departAirport: { get: function() { return browser.element('//input[@name="depart_name"]'); } },
input_arrivalAirport: { get: function() { return browser.element('//input[@name="arrival_name"]'); } },

//Date input
link_departureDateCalendar: { get: function() { return browser.element('[class="date-input depart-calendar gtm__standardMode"]'); } },
link_closeCalendar: { get: function() { return browser.element('[class="icon-close"]'); } }
})

module.exports = Homepage;