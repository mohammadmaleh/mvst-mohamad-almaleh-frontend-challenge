import { useDebounce } from '@uidotdev/usehooks';
import { Spin, Layout, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';

import { useGetRepositoriesQuery } from '../../features/repositories/repositoriesSlice';
import RepositoriesList from '../RepositoriesList';
import SearchRepository from '../SearchRepository';

import { StyledContent, StyledLayout, ListContainer } from './styles';

const { Header, Footer } = Layout;
const PAGE_SIZE = 5;

const AppLayout = (): JSX.Element => {
  const [repositoryName, setRepositoryName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedRepositoryName = useDebounce(repositoryName, 300);
  const { data, refetch, isLoading } = useGetRepositoriesQuery({
    repositoryName: debouncedRepositoryName,
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  useEffect(() => {
    refetch();
  }, [debouncedRepositoryName]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRepositoryName(e.target.value);
  };
  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        <SearchRepository onSearchChange={handleSearchChange} repositoryName={repositoryName} />
        <ListContainer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          {isLoading ? <Spin size="large" /> : <RepositoriesList repositories={data?.items ?? []} />}
        </ListContainer>
        <Pagination
          current={currentPage}
          total={data?.total_count}
          onChange={handlePageChange}
          disabled={isLoading}
          showSizeChanger={false}
        />
      </StyledContent>
      <Footer />
    </StyledLayout>
  );
};
export default AppLayout;
