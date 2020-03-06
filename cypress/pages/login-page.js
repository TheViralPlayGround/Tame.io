/// <reference types="cypress" />

export class LoginPage {

    constructor() {
        this.loginPage = LoginPage;
      }

    navigate () {
        cy.visit('https://accounts.frame.io/welcome')
    }

    enterTextEmail (email) {
        cy.get('.VerifyEmail__EmailInputContainer-sc-14pjv1e-2 > .container > .TextInput__InputContainer-a3o9vm-2 > .TextInput__Input-a3o9vm-1').type(email)
    }

    clickButtonLogin() {
        cy.get('.flex-x9ump0-0').click()    
    }

    validateTextSubheader (expectedHeader) {
        cy.get('StyledHeader__StyledHeaderContainer-sc-16tebr2-2 > div').should('have.text', expectedHeader)
    }

    validateEmailField (expectedEmailField) {
        cy.get('.VerifyEmail__EmailInputContainer-sc-14pjv1e-2 > .container > .TextInput__InputContainer-a3o9vm-2 > .TextInput__Input-a3o9vm-1').should('have.text', expectedEmailField)
    }

    validateButtonLoginText (expectedButtonText) {
        cy.get('.flex-x9ump0-0').should('have.text', expectedButtonText)
    } 

}