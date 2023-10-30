import { List } from 'antd';
import React, { useState } from 'react';

import { Repository } from '../../features/repositories/modals';

import { Props } from './Props';
import RepositoryItem from './RepositoryItem';

const RepositoriesList = ({ repositories }: Props): JSX.Element => {
  const [expandedRepositoryId, setExpandedRepositoryId] = useState<number | null>(null);

  const handleRepositoryExpand = (repositoryId: number): void => {
    setExpandedRepositoryId(repositoryId === expandedRepositoryId ? null : repositoryId);
  };
  const renderItems = (repository: Repository): JSX.Element => (
    <RepositoryItem
      repository={repository}
      handleRepositoryExpand={handleRepositoryExpand}
      expanded={expandedRepositoryId === repository.id}
    />
  );

  return <List itemLayout="horizontal" dataSource={repositories} renderItem={renderItems} />;
};

export default RepositoriesList;
