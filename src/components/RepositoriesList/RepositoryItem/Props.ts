import { Repository } from '../../../features/repositories/modals';

export interface Props {
  handleRepositoryExpand: (repositoryId: number) => void;
  repository: Repository;
  expanded: boolean;
}
