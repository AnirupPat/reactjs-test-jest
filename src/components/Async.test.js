import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Async from './Async';


describe('Async component', () => {
    test('renders posts', async() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'first post'}]
        })
        render(<Async />);

        // const listItemElement = screen.getAllByRole('listitem');
        // getAllByRole will throw an error because of fetch call..
        // instead of use findAllByRole which returns a promise...

        const listItemElement = await screen.findAllByRole('listitem');
        expect(listItemElement).not.toHaveLength(0);


    })
})