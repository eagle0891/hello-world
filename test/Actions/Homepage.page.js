var Page = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/Actions/Page.js');

const depAirport = {
    BFS: 'BFS', 
    LBA: 'LBA'
}

var Homepage = Object.create(Page, {

link_emailSignUpLightboxClose: { get: function() { return browser.element('[class="t071a-close-lightbox"]'); } },
searchPanel: { get: function() { return browser.element('[name="search-panel"]'); } },
link_searchPanelShowDepList: { get: function() { return browser.element('[class="list-input depart-list gtm__standardMode"]'); } },
link_depAirport: { get: function() { return browser.element('//div[@data-apt="depart"]/div[@class="search__airport__wrapper"]/div/div[@class="tabs__content tabs__content--active"]/ul/li[@data-iata="' + depAirport.LBA + '"]'); } }

})

module.exports = Homepage;