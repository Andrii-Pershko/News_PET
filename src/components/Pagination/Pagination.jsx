import { useTheme } from 'userContext';
import './Pagination.css';
export const Pagination = ({ maxPage, userDevice }) => {
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setLoadingPagination(true);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    setLoadingPagination(true);
  };

  const {
    currentPage,
    setCurrentPage,
    loadingPagination,
    setLoadingPagination,
  } = useTheme();

  //if our device its mobile
  if (userDevice === 'Mobile')
    if (maxPage === 1) {
      return;
    }

  if (loadingPagination) {
    return <p className="pagination_loading">Loading</p>;
  }
  if (maxPage === 2) {
    return (
      <div className="paginationBox">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button
          className={currentPage === 1 ? 'current-page' : ''}
          onClick={() => {
            setCurrentPage(1);
            setLoadingPagination(true);
          }}
        >
          1
        </button>
        <button
          className={currentPage === 2 ? 'current-page' : ''}
          onClick={() => {
            setLoadingPagination(true);
            setCurrentPage(maxPage);
          }}
        >
          {maxPage}
        </button>
        <button disabled={currentPage === maxPage} onClick={handleNextPage}>
          Next
        </button>
      </div>
    );
  }
  if (maxPage === 3) {
    return (
      <div className="paginationBox">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button
          className={currentPage === 1 ? 'current-page' : ''}
          onClick={() => {
            setLoadingPagination(true);
            setCurrentPage(1);
          }}
        >
          1
        </button>
        <button
          className={currentPage === 2 ? 'current-page' : ''}
          onClick={() => {
            setLoadingPagination(true);
            setCurrentPage(2);
          }}
        >
          2
        </button>
        <button
          className={currentPage === 3 ? 'current-page' : ''}
          onClick={() => {
            setLoadingPagination(true);
            setCurrentPage(maxPage);
          }}
        >
          {maxPage}
        </button>
        <button disabled={currentPage === maxPage} onClick={handleNextPage}>
          Next
        </button>
      </div>
    );
  }

  if (maxPage > 3) {
    if (currentPage === 1) {
      return (
        <div className="paginationBox">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <button
            className={'current-page'}
            onClick={() => {
              setLoadingPagination(true);
              setCurrentPage(1);
            }}
          >
            1
          </button>
          <p>...</p>
          <button
            onClick={() => {
              setLoadingPagination(true);
              setCurrentPage(maxPage);
            }}
          >
            {maxPage}
          </button>
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
          <button
            onClick={() => {
              setLoadingPagination(true);
              setCurrentPage(1);
            }}
          >
            1
          </button>
          <p>...</p>
          <button
            className="current-page"
            onClick={() => {
              setLoadingPagination(true);
              setCurrentPage(maxPage);
            }}
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
        <button
          onClick={() => {
            setLoadingPagination(true);
            setCurrentPage(1);
          }}
        >
          1
        </button>
        <p>...</p>
        <button className="current-page">{currentPage}</button>
        <p>...</p>
        <button
          onClick={() => {
            setLoadingPagination(true);
            setCurrentPage(maxPage);
          }}
        >
          {maxPage}
        </button>
        <button disabled={currentPage === maxPage} onClick={handleNextPage}>
          Next
        </button>
      </div>
    );
  }
};
