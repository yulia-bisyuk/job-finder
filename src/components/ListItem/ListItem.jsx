import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { JobDetailsContext } from '../../components/App';
import AdditionalInfo from 'components/ListItem/AdditionalInfo/AdditionalInfo';
import JobDescription from 'components/ListItem/JobDescription/JobDescription';
import ModalForm from 'components/ModalForm/ModalForm';
import Button from 'react-bootstrap/Button';
import { getAbbreviation } from 'helpers/helpers';
import { LiItem, ContentWrapper, Circle, ButtonGroup } from './listItem.styled';

const ListItem = ({ job }) => {
  const [modalShow, setModalShow] = useState(false);
  // const navigate = useNavigate();
  const location = useLocation();
  const { setJobId } = useContext(JobDetailsContext);

  // console.log('location in ListItem', location);

  const goToDetails = id => {
    setJobId(id);
    // navigate('details');
  };

  return (
    <>
      <LiItem className="mb-2">
        <ContentWrapper>
          <Circle>{getAbbreviation(job.name)}</Circle>
          <div>
            <AdditionalInfo job={job} />
            <JobDescription job={job} />
          </div>
        </ContentWrapper>
        <ButtonGroup>
          <Link
            to="details"
            state={{
              from: location,
            }}
          >
            <Button
              onClick={() => goToDetails(job.id)}
              type="button"
              variant="outline-secondary"
              className="me-2"
            >
              Details
            </Button>
          </Link>
          <Button
            onClick={() => setModalShow(true)}
            type="button"
            variant="outline-success"
          >
            Apply now
          </Button>
        </ButtonGroup>
      </LiItem>
      <ModalForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ListItem;
