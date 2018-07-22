var Page = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/Actions/Page.js');
var HomepageElements = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/objects/HomepageElements.js');

var Homepage = Object.create(Page, {

link_emailSignUpLightboxClose: { get: function() { return browser.element('[class="t071a-close-lightbox"]'); } },
searchPanel: { get: function() { return browser.element('[name="search-panel"]'); } },
link_searchPanelShowDepList: { get: function() { return browser.element('[class="list-input depart-list gtm__standardMode"]'); } }
   
})

module.exports = Homepage;