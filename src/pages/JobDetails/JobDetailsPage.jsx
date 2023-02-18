import { useContext, useEffect } from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import { JobDetailsContext } from '../../components/App';
import { BASE_URL } from 'constants/baseURL';
import { GOOGLE_API_KEY } from 'constants/apiKeys';
// import { useLocation } from 'react-router-dom';
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
  // const google = window.google;
  const { jobId } = useContext(JobDetailsContext);
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState({
    // address: '',
    lat: null,
    lng: null,
  });
  const [jobItem, setJobItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const mapRoot = <div></div>;

  // console.log('jobId', jobId);

  useEffect(() => {
    localStorage.setItem('id', jobId);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/${jobId}`)
      .then(res => {
        console.log('locations', res.data.locations[0].name);
        setJobItem(res.data);
        setLocation(res.data.locations[0].name);
      })
      .catch(err => {
        setIsError(true);
        console.error('Error:', err);
      })
      .finally(() => setIsLoading(false));
  }, [jobId]);

  useEffect(() => {
    if (!location) return;

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          `${location}`
        )}&language=en&key=${GOOGLE_API_KEY}`,
        {
          headers: {
            'Accept-Language': 'en-US,en;',
          },
        }
      )
      .then(response => {
        if (response.data.status !== 'OK') {
          throw new Error('Could not fetch location!');
        }
        console.log('google maps response', response);
        setCoordinates({
          // address: response.data.results[0].formatted_address,
          lat: response.data.results[0].geometry.location.lat,
          lng: response.data.results[0].geometry.location.lng,
        });
      })
      .catch(error => console.error('Error:', error));
  }, [location]);

  console.log('google maps coordinates', coordinates);

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

          <Map location={coordinates} />
        </>
      )}
    </PageWrapper>
  );
};

export default JobDetails;
