import { useState } from 'react';
import sprite from '../../icons/sprite.svg';
import './pagination.css';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setSearchParams }) => {
  const itemsPerPage = 20;
  const totalJobsPages = 18;

  const [itemOffset, setItemOffset] = useState(0);
  // eslint-disable-next-line
  const endOffset = itemOffset + itemsPerPage;

  const handlePageClick = event => {
    // setPage(event.selected + 1);
    console.log(event);

    setSearchParams({ page: event.selected + 1 });
    const newOffset = (event.selected * itemsPerPage) % totalJobsPages;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <div className="wrapper">
            <span className="divider">|</span>
            <svg className="nav-icon">
              <use href={sprite + '#icon-go-pagination-forw'} />
            </svg>
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={18}
        previousLabel={
          <div className="wrapper">
            <svg className="nav-icon">
              <use href={sprite + '#icon-go-pagination-back'} />
            </svg>
            <span className="divider">|</span>
          </div>
        }
        renderOnZeroPageCount={null}
        className="paginationContainer"
        pageClassName="page"
        activeClassName="active"
      />
    </>
  );
};

//   return <PaginatedItems itemsPerPage={4} />;
// Example items, to simulate fetching from another resources.

// Add a <div id="container"> to your HTML to see the componend rendered.
//   ReactDOM.render(
//     <PaginatedItems itemsPerPage={4} />,
//     document.getElementById('container')
//   );
// };

export default Pagination;
