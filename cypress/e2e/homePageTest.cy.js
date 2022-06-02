import HomePage from "../pageObjects/homePage";


describe('User login tests', () => {

    const homePage = new HomePage();

    it('UI Test 1.1 - User visits homepage', () => {
        homePage.getHomePage();


    })
})
