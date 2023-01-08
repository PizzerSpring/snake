import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {IGlobalState} from "../store/reducers";
import {drawObject, IObjectBody} from "../store/utilities";

export interface ICanvasBoard {
    height: number
    width: number
}

const CanvasBoard = ({height, width}: ICanvasBoard) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const snake1 = useSelector((state: IGlobalState) => state.snake);
    const [pos, setPos] = useState<IObjectBody>()

    useEffect(() => {
        setContext(canvasRef.current && canvasRef.current.getContext('2d'));
        drawObject(context, snake1, '#91c483');
        drawObject(context, [pos], '#676fa3');
    }, [context])

    return (
        <canvas style={{border: '3px solid black'}}
                ref={canvasRef}
                height={height}
                width={width}
        />
    );
};

export default CanvasBoard;