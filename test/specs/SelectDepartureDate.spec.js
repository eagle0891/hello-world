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

        describe('Given I select a departure and arrival date', () => {
            before(() => {
                HomepageActions.link_departureDateCalendar.waitForVisible();
                HomepageActions.link_departureDateCalendar.waitForEnabled();
                browser.pause(500);                
                HomepageActions.link_departureDateCalendar.click();
                browser.element('//select[@class="ui-datepicker-month"]').waitForVisible();
                browser.element('//select[@class="ui-datepicker-month"]').click();
                browser.element('//option[@value="11"]').waitForVisible();
                browser.element('//option[@value="11"]').click();

                //let depDate = browser.element('//div[@data-cal="depart"]/div/table/tbody/tr/td[@data-handler="selectDay"]/a[@href="#"]');
                //depDate.click();

                
                let dateArray = [browser.getHTML('//div[@data-cal="depart"]/div/table/tbody/tr/td[@data-handler="selectDay"]/a[@href="#"]')]; //create new empty array
                //let dateElementArray = [browser.elements('//div[@data-cal="depart"]/div/table/tbody/tr/td[@data-handler="selectDay"]/a[@href="#"]')]
                //let dates = browser.getHTML('//div[@data-cal="depart"]/div/table/tbody/tr/td[@data-handler="selectDay"]/a[@href="#"]'); //find the date elements and get the text of each
                //dateArray.push(dates); //Add the dates to the array
                console.log(dateArray[0].length); //print the contents of the array  <a class="ui-state-default" href="#">20</a>
                //console.log(dateElementArray[0].length)
                
                for (x=0; x < dateArray[0].length; x++) {
                let specifiedDate = dateArray[0][x];
                    for (i=1; i < 31; i++) {
                        if ( specifiedDate === '<a class="ui-state-default" href="#">' + i + '</a>') {
                        browser.selectByVisibleText(i).click();
                        }
                    }
                }
            })

            it('should display the departure date calendar', () => {
                //expect(HomepageActions.link_closeCalendar.isVisible).to.be.true();
            })
        })
});