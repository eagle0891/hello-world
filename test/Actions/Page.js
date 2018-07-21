function Page() {
    this.title = 'My Page';
}

//this runs before every test
Page.prototype.open = function () {
    browser.url('/')
}

module.exports = new Page();