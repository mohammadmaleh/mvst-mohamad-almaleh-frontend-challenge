const repositoriesMock = [
  {
    id: 1,
    name: 'repository-1',
    description: 'This is the first repository mock',
    language: 'JavaScript',
    stargazers_count: 10,
    forks_count: 5,
    owner: {
      id: 1,
      login: 'owner-1',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
  },
  {
    id: 2,
    name: 'repository-2',
    description: 'This is the second repository mock',
    language: 'TypeScript',
    stargazers_count: 20,
    forks_count: 10,
    owner: {
      id: 2,
      login: 'owner-2',
      avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
    },
  },
  {
    id: 3,
    name: 'repository-3',
    description: 'This is the third repository mock',
    language: 'Python',
    stargazers_count: 30,
    forks_count: 15,
    owner: {
      id: 3,
      login: 'owner-3',
      avatarUrl: 'https://avatars.githubusercontent.com/u/3?v=4',
    },
  },
];

export default repositoriesMock;
