class HomepageElements {

    get searchPanel() {
        return browser.element('[name="search-panel"]');
    }

    get link_emailSignUpLightboxClose() {
        return browser.element('[class="t071a-close-lightbox"]');
    }
}

module.exports = HomepageElements;