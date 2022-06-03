import HomePage from "../pageObjects/homePage";
import "cypress-localstorage-commands";
// import './commands'
// import 'cypress-extensions'


describe('User login tests', () => {

    const homePage = new HomePage();

    let testData;




    beforeEach(() => {
      cy.fixture('login').then(dataJson => {
        testData = dataJson;
      });
      cy.setLocalStorage("isLyceumAuthenticated", true);
    });


    it('UI Test 1.1 - User visits homepage', () => {
            homePage.getHomePage(testData.passPhrase);
    })

    it('UI Test 1.2 - Nami logo on top left of the page', () => {
        homePage.checkNamiLogo();
    })

    it('UI Test 1.3 - Connect wallet button is visible', () => {
        homePage.checkConnectWalletButton();
    });

    it('UI Test 1.4 - Filters menu is visible', () => {
        homePage.checkFiltersMenu();
    });

    it('UI Test 1.5 - Check user can search for a game', () => {
        homePage.checkGameSearch();
    });

    it('UI Test 1.6 - Check game detail page', () => {
        homePage.checkGameDetailPage();
    });


})
