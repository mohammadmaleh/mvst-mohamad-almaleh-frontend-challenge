import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '../../API/axiosBaseQuery';

import { RepositoriesResponse } from './modals';

const API_URL = 'https://api.github.com';

export const repositoriesSlice = createApi({
  reducerPath: 'repositories',
  baseQuery: axiosBaseQuery({ baseUrl: API_URL }),
  endpoints(build) {
    return {
      getRepositories: build.query<RepositoriesResponse, { repositoryName: string; page: number; pageSize: number }>({
        query: ({ repositoryName, page, pageSize }) => ({
          url: '/search/repositories',
          method: 'get',
          params: { q: `name:${repositoryName}`, sort: 'stars', order: 'desc', per_page: pageSize, page },
        }),
      }),
    };
  },
});

export const { useGetRepositoriesQuery } = repositoriesSlice;
