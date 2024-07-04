import { render, screen } from 'test/utils';
import PeopleListView from './PeopleListView';

describe('PeopleList', async () => {
  it('should show a loading message if data is loading', () => {
    render(<PeopleListView isLoading />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
  it('should show no data message if no data is returned', () => {
    render(<PeopleListView isLoading={false} />);
    expect(screen.getByText('No data')).toBeInTheDocument();
  });
  it('should show links for each person returned', () => {
    const person1 = {
      name: 'Person 1',
      url: 'https://example.com/person1',
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
    };
    const person2 = {
      name: 'Person 2',
      url: 'https://example.com/person2',
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
    };

    render(
      <PeopleListView
        isLoading={false}
        data={{
          count: 2,
          next: null,
          previous: null,
          results: [person1, person2],
        }}
      />,
    );

    const person1Results = screen.getAllByText(person1.name);
    expect(person1Results.length).toBe(1);
    const person2Results = screen.getAllByText(person1.name);
    expect(person2Results.length).toBe(1);
  });
});
