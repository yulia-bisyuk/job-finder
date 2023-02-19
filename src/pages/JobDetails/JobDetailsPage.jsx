import { useContext, useEffect } from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import { JobDetailsContext } from '../../components/App';
import { BASE_URL } from 'constants/baseURL';
import JobDetailsActions from 'components/JobDetailsActions/JobDetailsActions';
import Map from 'components/Map/Map';
import {
  PageWrapper,
  Divider,
  PageTitle,
  JobTitle,
  CompanyName,
  JobDescription,
  LocationTitle,
} from './jobDetails.styled';
import { useState } from 'react';
import Error from 'components/Error/Error';
import { DatePosted } from 'components/ListItem/AdditionalInfo/additionalInfo.styled';
import Loader from 'components/Loader/Loader';

const JobDetails = () => {
  const { jobId } = useContext(JobDetailsContext);
  const [location, setLocation] = useState('');
  const [jobItem, setJobItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    localStorage.setItem('id', jobId);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/${jobId}`)
      .then(res => {
        console.log(res);
        setJobItem(res.data);
        setLocation(encodeURI(res.data.locations[0].name));
      })
      .catch(err => {
        setIsError(true);
        console.error('Error:', err);
      })
      .finally(() => setIsLoading(false));
  }, [jobId]);

  return (
    <PageWrapper>
      <PageTitle>Job Details</PageTitle>
      <Divider></Divider>
      {isLoading && <Loader />}
      {isError && (
        <Error>Something went wrong... No details found for this job.</Error>
      )}
      {jobItem && (
        <>
          <JobDetailsActions />
          <JobTitle>{jobItem.name}</JobTitle>
          <DatePosted>
            Posted {jobItem.publication_date.slice(0, 10)} by{' '}
            <CompanyName>{jobItem.company.name}</CompanyName>
          </DatePosted>
          <JobDescription>{parse(jobItem.contents)}</JobDescription>
          <LocationTitle>Location</LocationTitle>
          <Divider></Divider>

          <Map location={location} />
        </>
      )}
    </PageWrapper>
  );
};

export default JobDetails;
