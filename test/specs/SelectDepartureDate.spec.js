var expect = require('chai').expect;
// var chaiWebdriver = require('chai-webdriverio').default;
// chai.use(chaiWebdriver(browser));
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

        describe('Given I select a departure date', () => {
            before(() => {
                HomepageActions.link_departureDateCalendar.waitForVisible();
                HomepageActions.link_departureDateCalendar.waitForEnabled();
                browser.pause(500);                
                HomepageActions.link_departureDateCalendar.click();

                let selectableDates = browser.elements('//div[@data-cal="depart"]/div/table/tbody/tr/td[@data-handler="selectDay"]').value;
                
                console.log(selectableDates);
                console.log("dates are " + selectableDates); //text is not defined in this element - will throw error
                console.log("number of dates is " + selectableDates.length);
                console.log(selectableDates[1]);
                selectableDates[1].click();            
            })

            it('should display the departure date calendar', () => {
                //expect(HomepageActions.link_closeCalendar.isVisible).to.be.true();
            })
        })
});

/*console.log(selectableDates.value); //prints all found elements
                console.log("dates are " + selectableDates.getText()); //prints all displayed dates
                console.log("number of dates is " + selectableDates.value.length); //prints number of elements found (in the array)
                console.log(selectableDates[1].value);*/