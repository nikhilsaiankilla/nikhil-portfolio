import React from 'react'

const Button = ({ label, link, icon }) => {
    return (
        <button className='flex items-center justify-between border-2 border-black rounded-full'>
            <span className='p-2 pl-3 uppercase text-sm font-semibold'>{label}</span>
            <span className='flex items-center justify-center bg-black text-white p-3 rounded-full text-sm'>{icon}</span>
        </button>
    )
}

export default Button