import React, { useState } from 'react'
import Break from '../components/Break'
import Session from '../components/Session'
import Timer from '../components/Timer'

const Pomodoro = () => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);

    return (
        <div className='w-full h-screen bg-gradient-to-r from-red-500 to-purple-400 flex justify-center items-center flex-col'>
            <div className='text-center text-white text-5xl font-bold'>Pomodoro Timer</div>

            <div className='w-[500px] h-[100px] flex justify-between items-center'>
                <Break breakLength={breakLength} setBreakLength={setBreakLength} />
                <Session sessionLength={sessionLength} setSessionLength={setSessionLength} />
            </div>

            <div>
                <Timer
                    breakLength={breakLength}
                    sessionLength={sessionLength}
                />
            </div>
        </div>
    )
}

export default Pomodoro