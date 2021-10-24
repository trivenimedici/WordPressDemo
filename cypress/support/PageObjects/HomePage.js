class HomePage {

    getMyProfileIcon() {
        return cy.get('#header > a.masterbar__item.masterbar__item-me > span > img');
    }

    clickOnMyProfileIcon() {
        this.getMyProfileIcon().click();
    }


}
export default HomePage