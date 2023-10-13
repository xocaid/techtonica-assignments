import { render } from '@testing-library/react';
import App from '../App';

test('renders Title div container', () => {
  const appContainer = render(<App />);
  const appText = appContainer.getByText('Weather App');
  expect(appText).toBeInTheDocument();
});