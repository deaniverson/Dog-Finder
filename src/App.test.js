import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import DogCards from './components/DogCards';

test('renders Header', async () => {
  const { findAllByText } = render(<App />);
  const linkElement = await findAllByText(/Dog Finder/i);
  linkElement.forEach(el => expect(el).toBeInTheDocument());
});

test('test Filter', async () => {
  const { getByLabelText } = render(<App />);
  const input = getByLabelText('filter-input');
  fireEvent.change(input, {target: {value: 'affenpinscher'}});
  expect(input.value).toBe('affenpinscher')
});

test('test dogs cards', async () => {
  const name = 'affenpinscher';
  const img = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg';
  const { findByText, findByAltText } = render(<DogCards img={img} desc={name} />);
  const nameEl = await findByText(name);
  const imgEl = await findByAltText(name);
  expect(nameEl).toBeInTheDocument();
  expect(imgEl.src).toEqual(img);
  expect(imgEl).toBeInTheDocument();
});
