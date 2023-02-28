import Pagination from 'react-bootstrap/Pagination';
import uuid from 'react-uuid';
import { scrollToTop } from 'helpers/helpers';
import './pagination.css';

const BoardPagination = ({ setSearchParams, currentPage, pageCount }) => {
  const totalPages = pageCount > 18 ? 18 : pageCount - 1;

  const onPageClick = i => {
    setSearchParams({ page: i });
    scrollToTop();
  };

  const onFirstClick = () => {
    setSearchParams({ page: 1 });
    scrollToTop();
  };

  const onLastClick = () => {
    setSearchParams({ page: totalPages });
    scrollToTop();
  };

  const onPrevClick = () => {
    if (+currentPage > 1) setSearchParams({ page: +currentPage - 1 });
    scrollToTop();
  };

  const onNextClick = () => {
    if (+currentPage < totalPages) setSearchParams({ page: +currentPage + 1 });
    scrollToTop();
  };

  const createPaginationItem = i => {
    return (
      <Pagination.Item
        key={uuid()}
        active={i === +currentPage}
        onClick={() => onPageClick(i)}
      >
        {i}
      </Pagination.Item>
    );
  };

  const paginationItems = [];
  paginationItems.push(createPaginationItem(1));
  paginationItems.push(<Pagination.Ellipsis key={uuid()} disabled />);
  const midpoint = Math.floor(totalPages / 2);

  console.log('midpoint', midpoint);
  // const renderCount = (totalPages === 18 ? 4 : midpoint / 2) || 1;
  for (let i = midpoint; i <= midpoint + 4; i++) {
    paginationItems.push(createPaginationItem(i));
  }
  paginationItems.push(<Pagination.Ellipsis key={uuid()} disabled />);
  paginationItems.push(createPaginationItem(totalPages));

  return (
    <>
      <Pagination className="mb-3 justify-content-center">
        <Pagination.First onClick={() => onFirstClick()} key={uuid()} />
        <Pagination.Prev
          disabled={+currentPage === 1}
          onClick={() => onPrevClick()}
          key={uuid()}
        />

        {paginationItems}

        <Pagination.Next
          disabled={+currentPage === totalPages}
          onClick={() => onNextClick()}
          key={uuid()}
        />
        <Pagination.Last id="last" onClick={() => onLastClick()} key={uuid()} />
      </Pagination>
    </>
  );
};

export default BoardPagination;
