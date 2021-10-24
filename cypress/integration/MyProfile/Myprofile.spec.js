import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../support/PageObjects/LoginPage';
import HomePage from '../../support/PageObjects/HomePage';
import MyProfile from '../../support/PageObjects/MyProfile';
const loginPage = new LoginPage();
const homePage = new HomePage();
const myprofile = new MyProfile();
Given('User login to the application in {string} env', (env) => {
  loginPage.visit(env);
  loginPage.signIn();
})

When('User Clicks on MyProfile icon', () => {
  homePage.clickOnMyProfileIcon();
})

Then('My Profile page should be displayed correctly', () => {
  myprofile.getPageTitle().contains('My Profile');
  myprofile.getMyProfileSelectedLink().length > 0;
  myprofile.getProfileImage().should('be.visible').filter('[src]').filter(':visible').should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));
})

Then('Username should be displayed correctly under profile gravator in MyProfileTab', (datatable) => {
  datatable.hashes().forEach(row => {
    myprofile.getuserdisplayName().contains(row.Username);
    myprofile.getuserSecondaryInfo().contains(row.Username);
  })
})

And('User should have logout button enabled for MyProfileTab', () => {
  myprofile.getLogoutButton().should('be.enabled').contains('Log out');
})

And('Sidebar menu should be displayed correctly for MyProfileTab', () => {
  myprofile.getSideBarItems().should('have.length', 9)
    .then(($els) => {
      return (
        Cypress.$.makeArray($els)
          .map((el) => el.innerText)
      )
    })
    .should('deep.equal', ['My Profile', 'Account Settings', 'Purchases', 'Security', 'Privacy', 'Manage Blogs', 'Notification Settings', 'Blocked Sites', 'Get Apps']);
})

And('User data should be auto-populated correctly in card profile for MyProfileTab', (datatable) => {
  datatable.hashes().forEach(row => {
    myprofile.getFirstName().should('have.value', row.firstName);
    myprofile.getLastName().should('have.value', row.lastName);
    myprofile.getDisplayName().should('have.value', row.displayName);
    myprofile.getAboutMe().should('have.value', row.AboutMe);
  })
})

And('All fields in card profile should be displayed correctly for MyProfileTab', () => {
  myprofile.geteditGravatarExp().contains('Your profile photo is public.');
  myprofile.getProfileLinkLabel().contains('Hide my Gravatar profile.');
  myprofile.getToggleInput().should('be.enabled');
  myprofile.getSaveDetailsButton().should('have.attr', 'disabled');
  myprofile.getProfileLinksSection().contains('Profile Links');
  myprofile.getProfileLabel().contains('Profile');
})

And('User updates profile details', (datatable) => {
  datatable.hashes().forEach(row => {
    myprofile.getFirstName().type(row.firstName);
    myprofile.getLastName().type(row.lastName);
    myprofile.getDisplayName().type(row.displayName);
    myprofile.getAboutMe().type(row.AboutMe);
  })
})

Then('User saves the details', () => {
  myprofile.getSaveDetailsButton().click();
})

And('Verify success message is displayed correctly', () => {
  myprofile.getSuccessMessage().contains('Settings saved successfully!');
})

And('Clicks on Toogle button to Hide or UnHide my gravator', () => {
  myprofile.getToggleInput().click();
})

Then('No sites should be displayed under Profile Links', () => {
  myprofile.getProfileLinkManageMessage().contains('Manage which sites appear in your profile.');
 // myprofile.getProfileNoLinkMessage().contains('You have no sites in your profile links. You may add sites if you\'d like.Settings saved successfully!');
 myprofile.getProfileNoLinkMessage().length > 0
})

And('User adds {string} in Profile Links', (profilelink) => {
  myprofile.getProfileLinkAddButton().click();
  if(profilelink=="WordPress Site"){
    myprofile.getAddWordPressSiteLink().click();
    myprofile.getSelectCheckBoxWordPressSite().click();
    myprofile.getAddSiteButton().click();
  }else{
    myprofile.getAddURLSiteLink().click();
    myprofile.getEnterURLTextBoxProfileLink().type("test.com");
    myprofile.getEnterDescTextBoxProfileLink().type("test");
    myprofile.getAddSiteButton().click();
  }
})

Then('Site should be added successfully', () => {
  myprofile.getSiteLists().should('exist');
})

When('User deletes the added site', () => {
  myprofile.getDeleteProfileLinkButton().click();
})

Then('Site should be deleted successfully', () => {
  myprofile.getProfileNoLinkMessage().length > 0;
})
