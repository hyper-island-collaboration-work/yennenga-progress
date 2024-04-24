import { useContext } from 'react';
import ContentfulProviderContext from './ContentfulProvider.context';

const useContentful = () => {
  return useContext(ContentfulProviderContext);
};

export default useContentful;