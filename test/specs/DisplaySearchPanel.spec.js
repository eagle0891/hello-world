var expect = require('chai').expect;
var HomepageActions = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/Actions/Homepage.page.js');

describe('Homepage: Given the homepage is loaded', () => {
    before(() => {
        HomepageActions.open();
        HomepageActions.link_emailSignUpLightboxClose.waitForVisible();
        HomepageActions.link_emailSignUpLightboxClose.click();
    });

        it('should let you see the search panel', () => {
            var searchPanelExists = HomepageActions.searchPanel.isExisting();
            expect(searchPanelExists, 'Search panel is not displayed').to.be.true;
        });
});