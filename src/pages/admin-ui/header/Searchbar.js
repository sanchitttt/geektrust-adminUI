import React from 'react'

function Searchbar({ searchQuery, setSearchQuery }) {

    const textChangeHandler = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div className='w-[100%] flex justify-center items-center'>
            <input
                style={{ borderColor: 'black' }}
                className='p-[20px] text-[20px] w-[90%] text-center border-[1px]'
                type='text'
                value={searchQuery}
                onChange={textChangeHandler}
                placeholder='Search by name,email or role'
            />
        </div>
    )
}

export default Searchbar