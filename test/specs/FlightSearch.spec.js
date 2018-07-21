var expect = require('chai').expect;
var HomepageActions = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/Actions/Homepage.page.js');
//var HomepageElements = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/objects/HomepageElements.js');

//const homepageActions = new HomepageActions();
//const homepageElements = new HomepageElements();

describe('Homepage', () => {
    // describe('Given a user navigates to the Jet2.com homepage', () => {
    //     before(() => {
    //         browser.url('/');
    //     })

        it('should let you see the search panel', () => {
            HomepageActions.open();
            HomepageActions.link_emailSignUpLightboxClose.waitForVisible();
            HomepageActions.link_emailSignUpLightboxClose.click();
            
            var searchPanelExists = HomepageActions.searchPanel.isExisting();
            expect(searchPanelExists, 'Search panel is not displayed').to.be.true;
            
            browser.pause(1000);
            HomepageActions.link_searchPanelShowDepList.waitForVisible();
            HomepageActions.link_searchPanelShowDepList.waitForEnabled();
            HomepageActions.link_searchPanelShowDepList.click();
            browser.pause(1000);
        });
});