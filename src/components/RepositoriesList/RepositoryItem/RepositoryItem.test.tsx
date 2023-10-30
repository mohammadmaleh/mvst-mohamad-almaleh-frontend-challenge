import { render, screen } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';
import { Repository } from '../../../features/repositories/modals';
import repositoriesMock from '../../../mocks/repositories.mock';

import RepositoryItem from './index';

describe('RepositoryItem', () => {
  const handleRepositoryExpand = jest.fn();

  it('renders repository information when not expanded', () => {
    render(
      <RepositoryItem
        repository={repositoriesMock[0] as unknown as Repository}
        expanded={false}
        handleRepositoryExpand={handleRepositoryExpand}
      />,
    );

    expect(screen.getByText(repositoriesMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(repositoriesMock[0].description)).toBeInTheDocument();
  });

  it('renders repository information when expanded', () => {
    render(
      <RepositoryItem
        repository={repositoriesMock[0] as unknown as Repository}
        expanded
        handleRepositoryExpand={handleRepositoryExpand}
      />,
    );

    expect(screen.getByText(repositoriesMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(repositoriesMock[0].description)).toBeInTheDocument();
    expect(screen.getByText(`Forks: ${repositoriesMock[0].forks_count}`)).toBeInTheDocument();
    expect(screen.getByText(`Language: ${repositoriesMock[0].language}`)).toBeInTheDocument();
    expect(screen.getByText(`Stars: ${repositoriesMock[0].stargazers_count}`)).toBeInTheDocument();
    expect(screen.getByText(`full Description: ${repositoriesMock[0].description}`)).toBeInTheDocument();
  });

  it('calls handleRepositoryExpand when expand container is clicked', () => {
    render(
      <RepositoryItem
        repository={repositoriesMock[0] as unknown as Repository}
        expanded={false}
        handleRepositoryExpand={handleRepositoryExpand}
      />,
    );

    screen.getByTestId('expand-container').click();

    expect(handleRepositoryExpand).toHaveBeenCalledWith(1);
  });
});
