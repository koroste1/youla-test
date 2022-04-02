import React, {useEffect, useRef, useState} from 'react';
import {Button, ButtonGroup} from "@mui/material";


const Timer = () => {
    const [timer, setTimer] = useState<number>(0)
    const [isStarted, setIsStarted] = useState<boolean>(false)
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const interval = useRef<number | undefined>();

    useEffect(() => {
        if (!isStarted || isPaused) {
            clearInterval(interval.current);
        } else {
            createInterval()
        }
    }, [isStarted, isPaused])

    const createInterval = () => {
        interval.current = window.setInterval(() => {
            setTimer(prevState => prevState + 1)
        }, 1000)
    }

    const onStart = () => {
        if (isStarted) {
            setTimer(0);
            setIsPaused(false);
        }
        setIsStarted(!isStarted);
    }

    const onPause = () => {
        setIsPaused(!isPaused);
    }

    return (
        <div>
            <h1>Timer: {timer}</h1>
            <ButtonGroup variant={"outlined"}>
                <Button onClick={onStart}>{isStarted ? "Stop" : "Start"}</Button>
                <Button onClick={onPause} disabled={!isStarted}>{isPaused ? "Resume" : "Pause"}</Button>
            </ButtonGroup>
        </div>
    );
};

export default Timer;