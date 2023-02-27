import PaginationItem from './PaginationItem';
import React from 'react'
import PaginationExtremeLeft from './PaginationExtremeLeft'
import PaginationExtremeRight from './PaginationExtremeRight'
import PaginationLeft from './PaginationLeft'
import PaginationRight from './PaginationRight'

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const nextPage = () => {
    if (currentPage + 1 <= totalPages) setCurrentPage(currentPage => currentPage + 1);
  }

  const lastPage = () => {
    if (currentPage < totalPages) setCurrentPage(totalPages)
  }

  const previousPage = () => {
    if (currentPage - 1 >= 1) setCurrentPage(currentPage => currentPage - 1);
  }

  const firstPage = () => {
    if (currentPage > 1) setCurrentPage(1);
  }
  return (
    <div className='flex my-[10px] w-[300px] items-center justify-center'>
      <PaginationExtremeLeft onClick={firstPage} disabled={currentPage === 1} />
      <PaginationLeft onClick={previousPage} disabled={currentPage === 1} />
      {new Array(totalPages).fill(-1).map((item, idx) => {
        return <PaginationItem onClickHandler={() => setCurrentPage(idx + 1)} key={idx} active={currentPage === idx + 1}>{idx + 1}</PaginationItem>
      })}
      <PaginationRight onClick={nextPage} disabled={currentPage >= totalPages} />
      <PaginationExtremeRight onClick={lastPage} disabled={currentPage >= totalPages} />
    </div>
  )
}

export default Pagination