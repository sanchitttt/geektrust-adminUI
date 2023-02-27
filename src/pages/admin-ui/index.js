import React, { useEffect, useState } from 'react'
import Footer from './footer';
import Header from './header';
import Panel from './panel';
import axios from 'axios';

function AdminUIPanel() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        setData(result.data);
        setTotalPages(Math.ceil(result.data.length / 10));
        setCurrentPage(1);
      } catch (error) {
        throw new Error("Couldn't fetch!");
      }
    }
    fetch();
  }, []);


  return (
    <div data-testId='adminUI-panel'>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {data.length ? (
        <Panel
          searchQuery={searchQuery}
          setTotalPages={setTotalPages}
          totalPages={totalPages}
          currentPage={currentPage}
          data={data}
          setData={setData}
        />
      ) :
        <div className='w-[100%] flex justify-center items-center py-[15px]'><h1 className='text-[18px] font-bold'>No records exist</h1></div>
      }

      <Footer
        setTotalPages={setTotalPages}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
        setData={setData}
      />
    </div>
  )
}

export default AdminUIPanel;
