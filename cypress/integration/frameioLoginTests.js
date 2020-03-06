/// <reference types="cypress" />

import { LoginPage } from '../pages/login-page'

describe('todo actions', () => {
    const loginPage = new LoginPage()

    beforeEach(() => {
        cy.visit('https://accounts.frame.io/welcome')
    })

    it('should log the user in', () => {
        loginPage.enterTextEmail("jvargas12@gmail.com")
        loginPage.clickButtonLogin()
    })

    it('should verify the email field is empty', () => {
        loginPage.validateEmailField("")
    })

    it('should verify the subheader text', () => {
        loginPage.validateTextSubheader("Enter your email to get started.")
    })

    it('should verify log in button text', () => {
        loginPage.validateButtonLoginText("Let\'s go")
    })

    
})