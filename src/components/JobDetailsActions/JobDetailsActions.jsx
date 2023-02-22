import { useNavigate, useLocation } from 'react-router-dom';
import sprite from '../../icons/sprite.svg';
import { ActionsWrapper, ActionBtn } from './jobDetailsActions.styled';

const JobDetailsActions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location, 'location in JobDetailsActions');

  const onGoBackClick = () => {
    navigate(location?.state?.from);
  };

  return (
    <ActionsWrapper>
      <ActionBtn onClick={onGoBackClick}>
        <svg width="20px" height="20px" style={{ marginRight: '6px' }}>
          <use href={sprite + '#icon-arrow-back'} />
        </svg>
        Back to board
      </ActionBtn>
      <ActionBtn>
        <svg width="20px" height="20px" style={{ marginRight: '6px' }}>
          <use href={sprite + '#icon-bookmark'} />
        </svg>
        Save to my list
      </ActionBtn>
      <ActionBtn>
        <svg width="20px" height="20px" style={{ marginRight: '6px' }}>
          <use href={sprite + '#icon-share'} />
        </svg>
        Share
      </ActionBtn>
    </ActionsWrapper>
  );
};

export default JobDetailsActions;
