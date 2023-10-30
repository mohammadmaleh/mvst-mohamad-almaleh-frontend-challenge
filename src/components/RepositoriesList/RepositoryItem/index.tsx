import {
  CaretDownOutlined,
  CaretRightOutlined,
  CodeOutlined,
  ForkOutlined,
  StarOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Avatar, List, Typography } from 'antd';
import React from 'react';

import { Props } from './Props';
import {
  RepositoryListItem,
  RepositoryDetails,
  RepositoryName,
  RepositoryDescription,
  RepositoryDetailsContent,
  ExpandContainer,
} from './styles';

const { Text } = Typography;

const RepositoryItem = ({ repository, handleRepositoryExpand, expanded }: Props): JSX.Element => {
  const handleExpandClick = (): void => handleRepositoryExpand(repository.id);

  return (
    <div data-testid="repository-item">
      <RepositoryListItem>
        <List.Item.Meta
          data-testid="repository-list-item-meta"
          avatar={<Avatar src={repository.owner.avatar_url} />}
          title={<RepositoryName data-testid="repository-name">{repository.name}</RepositoryName>}
          description={
            <RepositoryDescription data-testid="repository-short-description">
              {repository.description}
            </RepositoryDescription>
          }
        />
        <ExpandContainer onClick={handleExpandClick} data-testid="expand-container">
          {expanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
        </ExpandContainer>
      </RepositoryListItem>
      <RepositoryDetails expanded={expanded} data-testid="repository-details">
        <RepositoryDetailsContent expanded={expanded}>
          <Text data-testid="forks-count">
            <ForkOutlined /> Forks: {repository.forks_count}
          </Text>
          <Text data-testid="repository-language">
            <CodeOutlined /> Language: {repository.language}
          </Text>
          <Text data-testid="stars-count">
            <StarOutlined /> Stars: {repository.stargazers_count}
          </Text>
          <Text data-testid="repository-full-description">
            <FileTextOutlined /> full Description: {repository.description}
          </Text>
        </RepositoryDetailsContent>
      </RepositoryDetails>
    </div>
  );
};
export default RepositoryItem;
