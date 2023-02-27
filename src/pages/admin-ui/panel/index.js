import React, { useState, useEffect } from 'react';
import TRow from './TRow';
import THead from './THead';

function Panel({ data, currentPage, totalPages, searchQuery, setData, setTotalPages }) {
  const [viewableData, setViewableData] = useState([]);

  useEffect(() => {
    if (currentPage === 1) {
      setViewableData(data.slice(0, currentPage * 10));
    }
    else if (currentPage === totalPages) {
      setViewableData(data.slice((currentPage - 1) * 10, data.length));
    }
    else {
      setViewableData(data.slice((currentPage - 1) * 10, currentPage * 10));
      setTotalPages(Math.ceil(data.length / 10));
    }

  }, [data, currentPage]);

  useEffect(() => {
    if (searchQuery.length) {
      const filtered = data.filter((item) => {
        const { name, email, role } = item;
        const regex = new RegExp(searchQuery, 'gi');
        if (name.match(regex) || email.match(regex) || role.match(regex)) {
          return item;
        }
      })
      setViewableData([...filtered].slice(0, currentPage * 10))
      setTotalPages(Math.ceil(filtered.length / 10));
    }
  }, [searchQuery])

  return (
    <div id='panel-container'>
      <table className='admin-table' id='admin-table'>
        <THead />
        <tbody>
          {viewableData.map((item) => {
            return <TRow key={item.id} setData={setData} data={data} item={item} setTotalPages={setTotalPages} />
          })}
        </tbody>
      </table>
      {!viewableData.length && <div className='flex justify-center items-center py-[20px]'>
        <h1 className='text-[18px]'>No users found in this page</h1>
      </div>}
    </div>
  )
}

export default Panel