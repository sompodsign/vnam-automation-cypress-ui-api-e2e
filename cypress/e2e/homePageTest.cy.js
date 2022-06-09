import HomePage from "../pageObjects/homePage";
import "cypress-localstorage-commands";
import {setCustomLocalStorage, setToken} from "../fixtures/helpers";


describe('User login tests', () => {

    const homePage = new HomePage();

    let testData;

    beforeEach(() => {
      cy.fixture('login').then(dataJson => {
        testData = dataJson;
      });
      setCustomLocalStorage("isLyceumAuthenticated", true);
    });
    



    it('UI Test 1.1 - User visits homepage', () => {
        HomePage.getHomePage(testData.passPhrase);
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

    it('UI Test 1.7 - Filter games', () => {
        homePage.clickGenreFilter();
        homePage.clickGenreFilterOption();
        homePage.clickBlockChainFilter();
        homePage.clickBlockChainFilterOption();
        homePage.clickSinksFilter();
        homePage.clickSinksFilterOption();
        cy.contains('Test Game 1').should('be.visible');

    });

})
