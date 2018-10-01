/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';

import LoadingIndicator from './';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingIndicator,
});