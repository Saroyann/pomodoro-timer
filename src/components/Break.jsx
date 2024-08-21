import React from 'react'

const Break = ({ breakLength, setBreakLength }) => {
    const incrementBreak = () => {
        if (breakLength < 60) {
            setBreakLength(prevLength => prevLength + 1)
        }
    }

    const decrementBreak = () => {
        if (breakLength > 1) {
            setBreakLength(prevLength => prevLength - 1)
        }
    }

    return (
        <div className='w-[200px] flex flex-col justify-center items-center text-white'>
            <div className='text-3xl'>Break Length</div>
            <div className='text-3xl font-bold flex items-center justify-between'>
                <div onClick={incrementBreak} className='mr-3 cursor-pointer'>+</div>
                <div>{breakLength}</div>
                <div onClick={decrementBreak} className='ml-3 cursor-pointer'>-</div>
            </div>
        </div>
    )
}

export default Break