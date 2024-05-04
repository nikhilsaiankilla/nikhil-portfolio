import React from 'react'

const Wrapper = ({ children, className }) => {
    return (
        <div className={`${className} w-full py-20 px-6 sm:px-14 md:px-20`}>{children}</div>
    )
}

export default Wrapper