import "cypress-iframe";
import "cypress-xpath";
// import './commands'
// import 'cypress-extensions'


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
    }

    // Check nami logo
    checkNamiLogo = () => {
        cy.get('[alt="Lyceum"]').should('be.visible');
    }

    // check connect wallet button
    checkConnectWalletButton = () => {
        //get button with text
        cy.contains('Connect Wallet').should('be.visible');
    }

    // check filters menu on the page
    checkFiltersMenu = () => {
        cy.get('.css-h8vjxy').should('be.visible');
    }

    checkGameSearch = () => {
        cy.get('[placeholder="Search games"]').should('be.visible');
        cy.get('[placeholder="Search games"]').type('Test Game 1');
        cy.contains('Test Game 1').should('be.visible');
        cy.get('[placeholder="Search games"]').clear();
    }

    checkGameDetailPage = () => {
        cy.contains('Test Game 1').click();
        cy.contains('Test Game 1').should('be.visible');
        cy.xpath('//h4[contains(text(),"Test Game 1")]').should('be.visible');
        cy.go('back');
    }


}

export default Homepage;
