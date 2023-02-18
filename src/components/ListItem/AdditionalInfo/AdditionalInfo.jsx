import { formatDistanceToNow } from 'date-fns';
import { parseDate } from 'helpers/helpers';
import sprite from '../../../icons/sprite.svg';
import {
  StarIcon,
  StarsGroup,
  DatePosted,
  InfoWrapper,
} from './additionalInfo.styled';

const AdditionalInfo = ({ job }) => {
  return (
    <InfoWrapper className="stars-date-save">
      <StarsGroup>
        {[...Array(Math.ceil(Math.random() * 5))].map((e, i) => (
          <StarIcon key={i}>
            <use href={sprite + '#icon-star'} />
          </StarIcon>
        ))}
      </StarsGroup>
      <DatePosted>
        {'Posted ' +
          formatDistanceToNow(
            new Date(
              parseDate(job.publication_date)[0],
              parseDate(job.publication_date)[1],
              parseDate(job.publication_date)[2]
            )
          ) +
          ' ago'}
      </DatePosted>
    </InfoWrapper>
  );
};

export default AdditionalInfo;
