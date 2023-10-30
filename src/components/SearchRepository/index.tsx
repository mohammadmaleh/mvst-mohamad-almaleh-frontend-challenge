import { SearchOutlined } from '@ant-design/icons';

import { Props } from './Props';
import { SearchInput, SearchRepositoryContainer } from './styles';

const SearchRepository = ({ onSearchChange, repositoryName }: Props): JSX.Element => (
  <SearchRepositoryContainer data-testid="repo-search">
    <SearchInput
      data-testid="search-input"
      placeholder="Search repositories"
      value={repositoryName}
      onChange={onSearchChange}
      suffix={<SearchOutlined />}
    />
  </SearchRepositoryContainer>
);

export default SearchRepository;
