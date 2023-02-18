import sprite from '../../icons/sprite.svg';
import { ActionsWrapper, ActionBtn } from './jobDetailsActions.styled';

const JobDetailsActions = () => {
  return (
    <ActionsWrapper>
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
