import Homepage from "../pageObjects/homePage";
import {setCustomLocalStorage} from "../fixtures/helpers";

describe("Game detail page tests", () => {

        let testData;

        beforeEach(() => {
            cy.fixture('login').then(dataJson => {
                testData = dataJson;
            });
            setCustomLocalStorage("isLyceumAuthenticated", true);
        });

    it('UI Test 1.8 - Check game description is showing on detail page', () => {
            Homepage.getHomePage(testData.passPhrase);
            cy.contains('Test Game 1').click();
            cy.contains('Test Game 1').should('be.visible');
            cy.get('.css-78jar2 > .MuiTypography-body1').should('be.visible');
            cy.get('.css-1jfn0lq > .MuiTypography-h5').should('be.visible');
            cy.get('.css-1jfn0lq > .MuiTypography-h5').should('be.visible');
            cy.get('.css-j7qwjs > :nth-child(3)').should('be.visible');
            cy.get('.css-j7qwjs > :nth-child(4)').should('be.visible');
            cy.get('.css-j7qwjs > :nth-child(4)').should('be.visible');
        }
    );
}
);
