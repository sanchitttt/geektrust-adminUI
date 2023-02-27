import React from 'react'
import Searchbar from './Searchbar';

function Header({searchQuery,setSearchQuery}) {
    return (
        <>
            <div className='font-bold flex-col desktop:py-[10px] mobile:py-[0px] mobile:text-[32px] heading w-[vw] medium:text-[40px] flex items-center justify-center'>
                <h1>Admin Panel</h1>
            </div>
            <div className='mt-[25px]'><Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /></div>
        </>

    )
}

export default Header;