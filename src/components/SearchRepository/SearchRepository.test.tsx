import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import SearchRepository from './index';

describe('SearchRepository', () => {
  it('should call onSearchChange when the input value changes', () => {
    const onSearchChange = jest.fn();
    const { getByTestId } = render(<SearchRepository onSearchChange={onSearchChange} repositoryName="" />);
    const input = getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'react' } });
    expect(onSearchChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
