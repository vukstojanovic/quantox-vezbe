
import  { screen, render } from '@testing-library/react';
import Home from './index';

describe("Home component", () => {
    test("Is the welcome text rendered?", () => {
        render(<Home />);
        const welcomeTextEnglish = screen.getByText("Welcome to Fortnite E-commerce store. Checkout list of our products and equip your hero with newest epic gear.");
        const welcomeTextSerbian = screen.getByText("Dobrodošli u Fortnite E-commerce radnju. Pogledajte listu naših proizvoda i opremite svog heroja najnovijim epskim oruđem.");
        expect(welcomeTextEnglish || welcomeTextSerbian).toBeInTheDocument();  
    })
});
