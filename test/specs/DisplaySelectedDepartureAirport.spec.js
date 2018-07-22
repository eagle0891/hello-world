var expect = require('chai').expect;
var HomepageActions = require('C://Users/Ugo/OneDrive/My Documents/hello-world/test/Actions/Homepage.page.js');

const depAirport = {
    BFS: 'BFS', 
    LBA: 'LBA'
}

const txt_selectedDepAirport = { 
    BFS: 'Belfast Intl BFS',
    LBA: 'Leeds Bradford LBA'
}

describe('Homepage', () => {
    before(() => {
        HomepageActions.open();
        HomepageActions.link_emailSignUpLightboxClose.waitForVisible();
        HomepageActions.link_emailSignUpLightboxClose.click();
    })

        describe('Given i select a departing airport', () => {
            before(() => {
                HomepageActions.link_searchPanelShowDepList.waitForVisible();
                HomepageActions.link_searchPanelShowDepList.waitForEnabled();
                HomepageActions.link_searchPanelShowDepList.click();
                var link_depAirport = browser.element('//div[@data-apt="depart"]/div[@class="search__airport__wrapper"]/div/div[@class="tabs__content tabs__content--active"]/ul/li[@data-iata="' + depAirport.LBA + '"]');
                link_depAirport.waitForVisible();
                link_depAirport.click();
            })

            it('should be displayed in the From field', () => {
                var inputTxt_departAirport = browser.element('//input[@name="depart_name"]').getValue();
                console.log('the departure airport is ' + inputTxt_departAirport);
                expect(inputTxt_departAirport).equal(txt_selectedDepAirport.LBA);
            });
        });
});