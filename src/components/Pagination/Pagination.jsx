import { useEffect } from 'react';
import './Pagination.css';
export const Pagination = ({
  maxPage,
  userDevice,
  currentPage,
  setCurrentPage,
}) => {
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  //if our device its mobile
  if (userDevice === 4)
    if (maxPage === 1) {
      return;
    }

  if (maxPage === 2) {
    <div className="paginationBox">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <button
        className={currentPage === 1 ? 'current-page' : ''}
        onClick={() => setCurrentPage(1)}
      >
        1
      </button>
      <button
        className={currentPage === 2 ? 'current-page' : ''}
        onClick={() => setCurrentPage(maxPage)}
      >
        {maxPage}
      </button>
      <button disabled={currentPage === maxPage} onClick={handleNextPage}>
        Next
      </button>
    </div>;
  }
  if (maxPage === 3) {
    <div className="paginationBox">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <button
        className={currentPage === 1 ? 'current-page' : ''}
        onClick={() => setCurrentPage(1)}
      >
        1
      </button>
      <button
        className={currentPage === 2 ? 'current-page' : ''}
        onClick={() => setCurrentPage(2)}
      >
        2
      </button>
      <button
        className={currentPage === 3 ? 'current-page' : ''}
        onClick={() => setCurrentPage(maxPage)}
      >
        {maxPage}
      </button>
      <button disabled={currentPage === maxPage} onClick={handleNextPage}>
        Next
      </button>
    </div>;
  }

  if (maxPage > 3) {
    if (currentPage === 1) {
      return (
        <div className="paginationBox">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <button className={'current-page'} onClick={() => setCurrentPage(1)}>
            1
          </button>
          <p>...</p>
          <button onClick={() => setCurrentPage(maxPage)}>{maxPage}</button>
          <button disabled={currentPage === maxPage} onClick={handleNextPage}>
            Next
          </button>
        </div>
      );
    }
    if (currentPage === maxPage) {
      return (
        <div className="paginationBox">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <button onClick={() => setCurrentPage(1)}>1</button>
          <p>...</p>
          <button
            className="current-page"
            onClick={() => setCurrentPage(maxPage)}
          >
            {maxPage}
          </button>
          <button disabled={currentPage === maxPage} onClick={handleNextPage}>
            Next
          </button>
        </div>
      );
    }
    return (
      <div className="paginationBox">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={() => setCurrentPage(1)}>1</button>
        <p>...</p>
        <button className="current-page">{currentPage}</button>
        <p>...</p>
        <button onClick={() => setCurrentPage(maxPage)}>{maxPage}</button>
        <button disabled={currentPage === maxPage} onClick={handleNextPage}>
          Next
        </button>
      </div>
    );
  }
};
