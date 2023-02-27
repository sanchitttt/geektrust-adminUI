import React from 'react'
import Button from '../../../common/button/Button'
import Pagination from './pagination'

function Footer({ totalPages, setTotalPages, currentPage, setCurrentPage, data, setData }) {

  const deleteSelectedHandler = () => {
    const ids = [];
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) ids.push(checkbox.id);
    })
    document.getElementById('checkBoxHead').checked = false;
    const filtered = data.filter((item) => !ids.includes(item.id));
    setData([...filtered])
    setTotalPages(Math.ceil(filtered.length / 10));
  }

  return (
    <div className='relative mt-[15px] mobile:flex-col mobile:gap-[25px] medium:flex-col desktop:ml-[10px] flex justify-center items-center'>
      <div className='desktop:absolute desktop:left-[10px]'
        onClick={deleteSelectedHandler}
      >
        <Button>Delete Selected</Button></div>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Footer