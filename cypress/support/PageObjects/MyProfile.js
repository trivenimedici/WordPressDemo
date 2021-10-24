class MyProfile {
    getPageTitle() {
        return cy.get('#primary > main > header > h1');
    }

    getProfileImage() {
        return cy.get('.animate__appear > .gravatar');
    }

    getuserdisplayName() {
        return cy.get('.profile-gravatar__user-display-name')
    }

    getuserSecondaryInfo() {
        return cy.get('#secondary > ul > li > div.profile-gravatar.is-in-sidebar > div.profile-gravatar__user-secondary-info');
    }

    getLogoutButton() {
        return cy.get('#secondary > ul > li > div.sidebar__me-signout > button');
    }
    getSideBarItems() {
        return cy.get('#secondary > ul > li > ul > li > a > span');
    }

    getsectionHeader() {
        return cy.get('#primary > main > div:nth-child(2) > div.section-header__label > span');
    }

    getFirstName() {
        return cy.get('#first_name');
    }

    getDisplayName() {
        return cy.get('#display_name');
    }

    getLastName() {
        return cy.get('#last_name');
    }

    getAboutMe() {
        return cy.get('#description');
    }

    geteditGravatarExp() {
        return cy.get('#primary > main > div.card.profile__settings > div > div:nth-child(2) > p');
    }

    getProfileLinkLabel() {
        return cy.get('#primary > main > div.card.profile__settings > form > fieldset:nth-child(5) > div > div > label > strong');
    }

    getToggleInput() {
        return cy.get('#primary > main > div.card.profile__settings > form > fieldset:nth-child(5) > div > div > span >input');
    }


    getMyProfileSelectedLink() {
        return cy.get('.selected > .sidebar__menu-link > .sidebar__menu-link-text');
    }

    getSaveDetailsButton() {
        return cy.get('#primary > main > div.card.profile__settings > form > p > button');
    }

    getProfileLinksSection() {
        return cy.get('#primary > main > div:nth-child(4) > div.section-header__label > span');
    }

    getProfileLabel() {
        return cy.get('#primary > main > div:nth-child(2) > div.section-header__label > span');
    }

    getSuccessMessage() {
        return cy.get('#notices > div > span.notice__content > span');
    }

    getProfileLinkManageMessage() {
        return cy.get('#primary > main > div:nth-child(5) > div > p:nth-child(1)');
    }

    getProfileNoLinkMessage() {
        return cy.get('.profile-links__no-links');
    }

    getProfileLinkAddButton() {
        return cy.get('#primary > main > div:nth-child(4) > div.section-header__actions > button');
    }

    getAddWordPressSiteLink() {
        return cy.get('.popover__menu > :nth-child(1)');
    }

    getAddURLSiteLink() {
        return cy.get('.popover__menu > :nth-child(2)');
    }

    getSelectCheckBoxWordPressSite() {
        return cy.get('#primary > main > div:nth-child(5) > div > form > ul > li > input');
    }

    getAddSiteButton() {
        return cy.get('#primary > main > div:nth-child(5) > div > form > button.button.form-button.is-primary');
    }

    getSiteLists() {
        return cy.get('#primary > main > div:nth-child(5) > div > ul > li');
    }

    getDeleteProfileLinkButton() {
        return cy.get('#primary > main > div:nth-child(5) > div > ul > li > button');
    }

    getEnterURLTextBoxProfileLink() {
        return cy.get('#primary > main > div:nth-child(5) > form > fieldset > input.form-text-input.profile-links-add-other__value');
    }

    getEnterDescTextBoxProfileLink() {
        return cy.get('#primary > main > div:nth-child(5) > form > fieldset > input.form-text-input.profile-links-add-other__title');
    }
}


export default MyProfile