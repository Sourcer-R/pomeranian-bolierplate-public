import { render, screen } from '@testing-library/react';
import { getRandomInt, TestToDoList } from './TestToDoList';

// describe('getRandomIng', () => {
//   beforeAll(() => {
//     jest.spyOn(Math, 'random');
//   });
//   it('returns (param -1) when random is close to one', () => {
//     Math.random.MockImplementation(() => 0.999);
//     expect(getRandomInt(8).toBe(7));
//   });
// });
describe('ToDoList', () => {
  it('has header = to do list', () => {
    render(<TestToDoList />);
    const heading = screen.getByRole('heading', { name: /todo list/i });
    expect(heading).toBeInTheDocument();
  });
});
