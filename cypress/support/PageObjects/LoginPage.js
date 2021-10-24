const app_url_prod = 'https://wordpress.com/';
const prod_username = 'testhclwordpress@gmail.com';
const prod_password = 'fds&)#!bDHSFS#$#5';
class LoginPage {

    visit(env) {
        cy.visit(app_url_prod);
    }
    getLoginButton() {
        return cy.get('#lpc-header-nav > div > div > div.masterbar-menu > div > nav > ul.x-nav-list.x-nav-list--right > li:nth-child(1) > a');
    }

    getEmailIDTextBox() {
        return cy.get('#usernameOrEmail');
    }

    getContinueButton() {
        return cy.get('#primary > div > main > div > div > form > div.card.login__form > div.login__form-action > button');
    }

    getPasswordTextBox() {
        return cy.get('#password');
    }

    getSigninButton() {
        return cy.get('#primary > div > main > div > div > form > div.card.login__form > div.login__form-action > button');
    }

    signIn() {
        this.getLoginButton().click();
        this.getEmailIDTextBox().type(prod_username);
        this.getContinueButton().click();
        this.getPasswordTextBox().type(prod_password);
        this.getSigninButton().click();
    }


}
export default LoginPage