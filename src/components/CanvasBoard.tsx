import React, {useEffect, useRef, useState} from 'react';

export interface ICanvasBoard {
    height: number
    width: number
}

const CanvasBoard = ({height, width}: ICanvasBoard) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        setContext(canvasRef.current && canvasRef.current.getContext('2d'));
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