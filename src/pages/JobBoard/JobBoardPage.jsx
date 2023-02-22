import { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { JobDetailsContext } from '../../components/App';
import axios from 'axios';
import ListItem from 'components/ListItem/ListItem';
import Pagination from 'components/Pagination/Pagination';
import Error from 'components/Error/Error';
import PageHeader from 'components/PageHeader/PageHeader';
import Loader from 'components/Loader/Loader';
import { List } from './jobBoard.styled';
import { BASE_URL } from 'constants/baseURL';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  // const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ?? 1;
  const [error, setError] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { category } = useContext(JobDetailsContext);
  const categoryParam = category ? `category=${category}` : null;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}?${categoryParam}&page=${currentPage}`)
      .then(res => {
        // console.log('res', res.data.results);
        if (res.data.results.length !== 0) {
          setJobs(res.data.results);
          setSuccess(true);
          setDataError(false);
          setError(false);
        } else {
          setDataError(true);
          setError(true);
        }
      })
      .catch(err => {
        console.error('Error:', err);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage, categoryParam]);

  // console.log('jobs', jobs);

  return (
    <>
      <PageHeader />
      {isLoading && <Loader />}
      {error && <Error>Oops... Something went wrong</Error>}
      {dataError ? (
        <Error>There is no data for your request. Please, try again!</Error>
      ) : (
        <>
          <List>
            {success &&
              jobs &&
              jobs.map(job => <ListItem key={job.id} job={job} />)}
          </List>
          <Pagination setSearchParams={setSearchParams} />
        </>
      )}
    </>
  );
};

export default JobBoard;
