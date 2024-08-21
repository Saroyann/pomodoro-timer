import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ breakLength, sessionLength }) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
    const [isSession, setIsSession] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isSession) {
            setTimeLeft(sessionLength * 60);
        }
    }, [sessionLength, isSession]);

    useEffect(() => {
        if (!isSession) {
            setTimeLeft(breakLength * 60);
        }
    }, [breakLength, isSession]);

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(time => time - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(intervalRef.current);
            if (isSession) {
                setIsSession(false);
                setTimeLeft(breakLength * 60);
            } else {
                setIsSession(true);
                setTimeLeft(sessionLength * 60);
            }
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive, timeLeft, isSession, sessionLength, breakLength]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsActive(false);
        setIsSession(true);
        setTimeLeft(sessionLength * 60);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='flex flex-col justify-center text-center text-white'>
            <div className='border-white border-6 rounded-xl p-10'>
                <div className='text-center text-3xl'>{isSession ? 'Session' : 'Break'}</div>
                <div className='text-center text-7xl'>{formatTime(timeLeft)}</div>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div className='text-2xl cursor-pointer' onClick={toggleTimer}>
                    {isActive ? 'Stop' : 'Mulai'}
                </div>
                <div className='text-2xl cursor-pointer' onClick={resetTimer}>Ulangi</div>
            </div>
        </div>
    );
};

export default Timer;