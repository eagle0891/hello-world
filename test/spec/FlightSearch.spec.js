var HomepageActions = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/Actions/HomepageActions.js');

var expect = require('chai').expect;

const homepageActions = new HomepageActions();

describe('Homepage', () => {
    describe('Given a user navigates to the Jet2.com homepage', () => {
        before(() => {
            browser.url('/');
        })

        it('should let you see the search panel', () => {
            homepageActions.closeEmailSignUpLightBox;
            var searchPanelExists = homepageElements.searchPanel.isExisting();
            expect(searchPanelExists, 'Search panel is not displayed').to.be.true;
        });
    });
});