import { render } from '@testing-library/react';
import React from 'react';

import { Repository } from '../../features/repositories/modals';
import repositoriesMock from '../../mocks/repositories.mock';

import RepositoriesList from './index';

describe('RepositoriesList', () => {
  it('renders a list of repositories', () => {
    const { getByText } = render(<RepositoriesList repositories={repositoriesMock as unknown as Repository[]} />);
    expect(getByText(repositoriesMock[0].name)).toBeInTheDocument();
    expect(getByText(repositoriesMock[1].name)).toBeInTheDocument();
  });
});
