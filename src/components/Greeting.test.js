import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// to create a test suite
describe('Greeting component', () => {
    // to create a test
    test('renders hello world', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World!', {exact: true});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('text when button not clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
    
        // Assert
        const helloWorldElement = screen.getByText('Its good to see you!', {exact: true});
        expect(helloWorldElement).toBeInTheDocument();


    })

    test('Changed text when button clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText('Changed!', {exact: true});
        expect(outputElement).toBeInTheDocument();
    });

    test('Its good to see you not visible when button clicked', () => {
        // Arrange
        render(<Greeting />)

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);


        // Assert
        const outputElement = screen.queryByText('Its good to see you!', {exact: true});
        expect(outputElement).toBeNull();
        
    })
})

