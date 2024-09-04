import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
};

const NotFound = (): React.ReactElement => {
  return <h2>Page was not found.</h2>;
};

export default NotFound;
