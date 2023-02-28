import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { categories } from 'constants/jobCategories';

import { JobDetailsContext } from '../App';

const HeaderDropdown = () => {
  const { setCategory } = useContext(JobDetailsContext);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  const items = categories.map(category => (
    <Dropdown.Item
      value={category}
      key={Math.random() * 200}
      onClick={e => {
        setCategory(e.target.innerText);
        setSearchParams({ page: 1 });
      }}
    >
      {category}
    </Dropdown.Item>
  ));

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Choose the category"
      variant="light"
      drop="down-centered"
      className="text-center mb-2"
    >
      {items}
    </DropdownButton>
  );
};

export default HeaderDropdown;
