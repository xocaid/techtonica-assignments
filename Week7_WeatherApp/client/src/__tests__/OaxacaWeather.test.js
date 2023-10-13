import { render, act } from '@testing-library/react';
import OaxacaWeather from '../components/OaxacaWeather';

// test('expecting Loading to appear on initial render', () => {
//     const { getByText } = render(<OaxacaWeather />);
//     expect(getByText('Loading...')).toBeInTheDocument
// })


test('sample', () => {
    jest.useFakeTimers();

    const { getByText } = render(<OaxacaWeather />);
    expect(getByText('Loading...')).toBeInTheDocument();

    act(() => {
        jest.advanceTimersByTime(9000);
    })
    expect(getByText('The weather in Oaxaca is currently:')).toBeInTheDocument();
    jest.useRealTimers()

})
