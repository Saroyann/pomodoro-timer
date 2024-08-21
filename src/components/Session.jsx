import React from 'react'

const Session = ({ sessionLength, setSessionLength }) => {
    const incrementSession = () => {
        if (sessionLength < 60) {
            setSessionLength(prevLength => prevLength + 1)
        }
    }

    const decrementSession = () => {
        if (sessionLength > 1) {
            setSessionLength(prevLength => prevLength - 1)
        }
    }

    return (
        <div className='w-[200px] flex flex-col justify-center items-center text-white'>
            <div className='text-3xl'>Session Length</div>
            <div className='text-3xl font-bold flex items-center justify-between'>
                <div onClick={incrementSession} className='mr-3 cursor-pointer'>+</div>
                <div>{sessionLength}</div>
                <div onClick={decrementSession} className='ml-3 cursor-pointer'>-</div>
            </div>
        </div>
    )
}

export default Session