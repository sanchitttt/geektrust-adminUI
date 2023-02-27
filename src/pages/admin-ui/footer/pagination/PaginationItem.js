import React from 'react'

function PaginationItem({ onClickHandler, active, children }) {
    return (
        <div
            role='button'
            onClick={onClickHandler}
            className={`flex mx-[3px] items-center justify-center rounded-full w-[28px] h-[28px] ${active === true ? 'bg-red-500 text-[#fff]' : 'hover:bg-black border-[1px] hover:text-white border-black text-black'}`} >
            {children}
        </div>
    )
}

export default PaginationItem;