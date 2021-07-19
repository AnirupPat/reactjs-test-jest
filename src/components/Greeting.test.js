import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

// to create a test suite
describe('Greeting component', () => {
    test('renders hello world', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World!', {exact: true});
        expect(helloWorldElement).toBeInTheDocument();
    })
})

