import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Props } from './Props';

import SearchRepository from './index';

export default {
  title: 'Components/SearchRepository',
  component: SearchRepository,
} as Meta;

const Template: Story<Props> = (args: Props) => <SearchRepository {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearchChange: (): void => {},
  repositoryName: '',
};

export const WithValue = Template.bind({});
WithValue.args = {
  onSearchChange: (): void => {},
  repositoryName: 'example-repo',
};
