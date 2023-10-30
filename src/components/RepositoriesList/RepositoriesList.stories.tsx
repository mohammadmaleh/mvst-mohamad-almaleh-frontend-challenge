import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Repository } from '../../features/repositories/modals';

import { Props } from './Props';
import RepositoryItem from './RepositoryItem';

import RepositoriesList from './index';

export default {
  title: 'Components/RepositoriesList',
  component: RepositoriesList,
} as Meta;

const Template: Story<Props> = (args: Props) => <RepositoriesList {...args} />;

const repositories = [
  {
    id: 1,
    name: 'example-repo',
    description: 'This is an example repository',
    owner: {
      avatar_url: 'https://example.com/avatar.png',
    },
    forks_count: 10,
    language: 'JavaScript',
    stargazers_count: 20,
  },
  {
    id: 2,
    name: 'another-repo',
    description: 'This is another example repository',
    owner: {
      avatar_url: 'https://example.com/avatar2.png',
    },
    forks_count: 5,
    language: 'TypeScript',
    stargazers_count: 15,
  },
];



export const Default = Template.bind({});
Default.args = {
  repositories :repositories as unknown as Repository[], 
};
