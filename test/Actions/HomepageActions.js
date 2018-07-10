class HomepageActions {
    
    closeEmailSignUpLightBox() {
        homepageElements.link_emailSignUpLightboxClose.waitForVisible();
        homepageElements.link_emailSignUpLightboxClose.click();
        
        console.log("closed signup light box");
    }
}

module.exports = HomepageActions;