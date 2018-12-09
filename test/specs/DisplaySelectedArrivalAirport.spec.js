var expect = require('chai').expect;
var HomepageActions = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/Actions/Homepage.page.js');

const txt_selectedAirport = { 
    BFS: 'Belfast Intl BFS',
    LBA: 'Leeds Bradford LBA',
    LCA: 'Larnaca LCA',
    ALC: 'Alicante ALC'
}

describe('Homepage', () => {
    before(() => {
        HomepageActions.open();
        HomepageActions.link_emailSignUpLightboxClose.waitForVisible();
        HomepageActions.link_emailSignUpLightboxClose.click();
    })

        describe('Given I select a departing airport', () => {
            before(() => {
                HomepageActions.link_searchPanelShowDepList.waitForVisible();
                HomepageActions.link_searchPanelShowDepList.waitForEnabled();
                HomepageActions.link_searchPanelShowDepList.click();
                HomepageActions.link_depAirport.waitForVisible();
                HomepageActions.link_depAirport.click();
            })

            it('should be displayed in the From field', () => {
                var inputTxt_departAirport = HomepageActions.input_departAirport.getValue();
                console.log('the departure airport is ' + inputTxt_departAirport);
                expect(inputTxt_departAirport).equal(txt_selectedAirport.LBA);
            });
        });

        describe('Given I select an arrival airport', () => {
            before(() => {
                HomepageActions.link_searchPanelShowArrList.waitForVisible();
                HomepageActions.link_searchPanelShowArrList.waitForEnabled();
                HomepageActions.link_searchPanelShowArrList.click();
                HomepageActions.link_arrAirport.waitForVisible();
                HomepageActions.link_arrAirport.click();
            })

            it('should be displayed in the From field', () => {
                var inputTxt_arrivalAirport = HomepageActions.input_arrivalAirport.getValue();
                console.log('the departure airport is ' + inputTxt_arrivalAirport);
                expect(inputTxt_arrivalAirport).equal(txt_selectedAirport.ALC);
            });
        });
});