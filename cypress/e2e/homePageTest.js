import HomePage from "../pageObjects/loginPage";


describe('User login tests', () => {

    const homePage = new HomePage();

    it('UI Test 1.1 - User visits homepage', () => {
        homePage.getHomePage();


    })
})
