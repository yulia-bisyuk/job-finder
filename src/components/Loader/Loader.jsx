import ClipLoader from 'react-spinners/ClipLoader';
import { LoaderWrapper } from './loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ClipLoader color="#3A4562" size={36} aria-label="Loading Spinner" />
    </LoaderWrapper>
  );
};

export default Loader;
