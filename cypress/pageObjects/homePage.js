import "cypress-iframe";

class Homepage {

    getHomePage = () => {
        cy.visit("https://qa.app.nami.gg/games")

    }
}

export default Homepage;
