import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";
import {getToken, setCustomLocalStorage} from "../fixtures/helpers";


class Homepage {


    // getHomePage = (phrase) => {
    //     cy.visit("https://qa.app.nami.gg/games", {
    //         onBeforeLoad: (win) => {
    //             cy.stub(win, 'prompt').returns(phrase);
    //         }
    //     });
    // }
    getHomePage = (phrase) => {
        cy.visit("https://qa.app.nami.gg/games");
        return this;
    }

    // Check nami logo
    checkNamiLogo = () => {
        cy.get('[alt="Lyceum"]').should('be.visible');
        return this;

    }

    // check connect wallet button
    checkConnectWalletButton = () => {
        //get button with text
        cy.contains('Connect Wallet').should('be.visible');
        return this;

    }

    // check filters menu on the page
    checkFiltersMenu = () => {
        cy.get('.css-h8vjxy').should('be.visible');
        return this;

    }

    checkGameSearch = () => {
        cy.get('[placeholder="Search games"]').should('be.visible');
        cy.get('[placeholder="Search games"]').type('Test Game 1');
        cy.contains('Test Game 1').should('be.visible');
        cy.get('[placeholder="Search games"]').clear();
        return this;

    }

    checkGameDetailPage = () => {
        cy.contains('Test Game 1').click();
        cy.contains('Test Game 1').should('be.visible');
        cy.xpath('//h4[contains(text(),"Test Game 1")]').should('be.visible');
        cy.go('back');
        return this;

    }

    clickConnectWalletButton = () => {
        cy.contains('Connect Wallet').click();
        return this;
    }

    clickGenreFilter = () => {
        cy.get('#mui-component-select-genres').click();
        return this;
    }

    clickGenreFilterOption = () => {
        cy.get('[data-value="Augmented-Reality"]').click();
        return this;
    }

    clickBlockChainFilter = () => {
        cy.get('#mui-component-select-blockchains').click();
        return this;
    }


    clickBlockChainFilterOption = () => {
        cy.get('[data-value="Bitcoin"]').click();
        return this;
    }

    clickSinksFilter = () => {
        cy.get('#mui-component-select-sinksTags').click();
        return this;
    }

    clickSinksFilterOption = () => {
        cy.get('[data-value="Inflationary"]').click();
        return this;
    }

    clickStatusFilter = () => {
        cy.get('#mui-component-select-status').click();
        return this;
    }



}

export default Homepage;
