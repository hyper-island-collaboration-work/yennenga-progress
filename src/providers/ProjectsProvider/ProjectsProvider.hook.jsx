import { useContext } from 'react';
import ProjectsProviderContext from './ProjectsProvider.context';

const useProjects = () => {
  return useContext(ProjectsProviderContext);
};

export default useProjects;