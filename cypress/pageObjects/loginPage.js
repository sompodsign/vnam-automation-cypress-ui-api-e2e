import "cypress-iframe";

class Homepage {

    getHomePage = () => {
        cy.visit("https://qa.knights.app")

    }
}

export default Homepage;
