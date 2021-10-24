Feature: Validation of My Profile features of wordpress

    Background:
        Given User login to the application in 'prod' env

    Scenario: Verify if the user is able to access MyProfile page successfully with Valid credentails
        When User Clicks on MyProfile icon
        Then My Profile page should be displayed correctly
        And Username should be displayed correctly under profile gravator in MyProfileTab
            | Username    |
            | testuserw59 |
        And User should have logout button enabled for MyProfileTab
        And Sidebar menu should be displayed correctly for MyProfileTab

    Scenario: Valiation of MyProfile Tab in My Profile Page
        When User Clicks on MyProfile icon
        Then User data should be auto-populated correctly in card profile for MyProfileTab
            | firstName | lastName | displayName | AboutMe |
            | test      | userw59  | testuserw59 | test    |
        And All fields in card profile should be displayed correctly for MyProfileTab

    Scenario: Verify User is able to update the profile details
        When User Clicks on MyProfile icon
        And User updates profile details
            | firstName                    | lastName                     | displayName                  | AboutMe                      |
            | test#!$@%**^()userw59)#$*(&# | test#!$@%**^()userw59)#$*(&# | test#!$@%**^()userw59)#$*(&# | test#!$@%**^()userw59)#$*(&# |
        Then User saves the details
        And Verify success message is displayed correctly

    Scenario: Verify User is able to Hide Gravatar Profile
        When User Clicks on MyProfile icon
        And Clicks on Toogle button to Hide or UnHide my gravator
        Then User saves the details
        And Verify success message is displayed correctly
       

    Scenario: Verify No sites are displayed when User doesn't have any profile links
        When User Clicks on MyProfile icon
        Then No sites should be displayed under Profile Links

    Scenario: Verify user is able and delete added profile links in Myprofile
        When User Clicks on MyProfile icon
        And User adds "WordPress Site" in Profile Links
        Then Site should be added successfully
        When User deletes the added site
        Then Site should be deleted successfully








