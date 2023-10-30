import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledContent = styled(Content)`
  padding: 50px;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;
