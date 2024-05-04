import React from 'react'

const SecondaryButton = ({ label, color }) => {
    const handleClick = () => {

    }
    return (
        <button
            className={`block w-fit border ${color ? " bg-white hover:bg-black text-black hover:text-white" : " bg-black hover:bg-white text-white hover:text-black"} transition-all duration-100 ease-in-out rounded-sm text-sm md:text-lg uppercase font-medium cursor-pointer px-2 py-1 md:px-3 md:py-2`}
            onClick={() => handleClick()}
        >
            {label}
        </button>
    )
}

export default SecondaryButton