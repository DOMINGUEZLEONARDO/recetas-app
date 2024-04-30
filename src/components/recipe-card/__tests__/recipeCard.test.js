import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecipeCard } from '..';


const mockArticle = {
  display_date: '2022-04-30T12:00:00Z',
  promo_items: { basic: { url: 'https://example.com/image.jpg' } },
  headlines: { basic: 'Sample Headline' }
};

test('renders article headline and date correctly', () => {
  render(<RecipeCard article={mockArticle} />);
  const headlineElement = screen.getByText(mockArticle.headlines.basic);
  const dateElement = screen.getByText(/30 de abril de 2022/i);
  expect(headlineElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
});

test('renders article image with correct URL', () => {
  render(<RecipeCard article={mockArticle} />);
  const imageElement = screen.getByAltText(mockArticle.headlines.basic);
  expect(imageElement).toHaveAttribute('src', mockArticle.promo_items.basic.url);
});