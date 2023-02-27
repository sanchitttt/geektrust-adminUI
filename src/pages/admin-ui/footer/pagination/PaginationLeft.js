import React from 'react'

function PaginationLeft({ onClick, disabled }) {
    return (
        <svg onClick={onClick} role='button' width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.5 19L9.20711 12.7071C8.81658 12.3166 8.81658 11.6834 9.20711 11.2929L15.5 5"
                stroke={disabled ? "#dddddd" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default PaginationLeft;