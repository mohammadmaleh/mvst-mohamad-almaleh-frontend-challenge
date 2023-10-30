import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Props } from './Props';

import RepositoryItem from './index';
import { Repository } from '../../../features/repositories/modals';

export default {
  title: 'Components/RepositoryItem',
  component: RepositoryItem,
} as Meta;

const Template: Story<Props> = (args: Props) => <RepositoryItem {...args} />;

const repository = {
  id: 1,
  name: 'example-repo',
  description: 'This is an example repository',
  owner: {
    avatar_url: 'https://example.com/avatar.png',
  },
  forks_count: 10,
  language: 'JavaScript',
  stargazers_count: 20,
}

export const Default = Template.bind({});
Default.args = {
  repository: repository as unknown as Repository,
  handleRepositoryExpand: (): void => {},
  expanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  repository:  repository as unknown as Repository,
  handleRepositoryExpand: (): void => {},
  expanded: true,
};
