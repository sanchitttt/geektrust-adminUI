import React from 'react'

function Button({ children }) {
    return (
        <div
            style={{ borderColor: 'black' }}
            role='button'
            className=' py-[10px] px-[5px] font-bold rounded border-[1px] hover:bg-black hover:text-white  w-[200px] flex items-center justify-center'
        >
            {children}
        </div>
    )
}

export default Button