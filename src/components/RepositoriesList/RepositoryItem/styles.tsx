import { Card, List, Typography } from 'antd';
import styled, { css, keyframes } from 'styled-components';

interface RepositoryDetailsProps {
  expanded: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const RepositoryDetailsContent = styled.div<RepositoryDetailsProps>`
  display: flex;
  flex-direction: column;
  ${({ expanded }): any =>
    !expanded &&
    css`
      animation: ${fadeOut} 0.3s ease-in-out;
    `}
`;

export const RepositoryDetails = styled(Card)<RepositoryDetailsProps>`
  background-color: #f0f2f5;
  max-height: ${({ expanded }): any => (expanded ? '500px' : '0')};
  overflow: auto;
  transition: max-height 0.3s ease-in-out;
  ${({ expanded }): any =>
    expanded &&
    css`
      animation: ${fadeIn} 0.3s ease-in-out;
    `}
`;

export const RepositoryName = styled.span`
  font-weight: bold;
`;
export const ExpandContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

export const RepositoryDescription = styled(Typography.Text).attrs({
  ellipsis: true,
})`
  margin-top: 12px;
`;

export const RepositoryListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
