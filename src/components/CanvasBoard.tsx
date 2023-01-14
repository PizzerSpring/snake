import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "../store/reducers";
import {drawObject, generateRandomPosition, IObjectBody} from "../store/utilities";
import {makeMove, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_UP} from "../store/actions";

export interface ICanvasBoard {
    height: number
    width: number
}

const CanvasBoard = ({height, width}: ICanvasBoard) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const snake1 = useSelector((state: IGlobalState) => state.snake);
    const disallowedDirection = useSelector((state: IGlobalState) => state.disallowedDirection)
    const [pos, setPos] = useState<IObjectBody>(generateRandomPosition(width - 20, height - 20));

    const dispatch = useDispatch();

    const moveSnake = useCallback(
        (dx = 0, dy = 0, ds: string) => {
            if (dx > 0 && dy === 0 && ds !== "RIGHT") {
                dispatch(makeMove(dx, dy, MOVE_RIGHT));
            }

            if (dx < 0 && dy === 0 && ds !== "LEFT") {
                dispatch(makeMove(dx, dy, MOVE_LEFT));
            }

            if (dx === 0 && dy < 0 && ds !== "UP") {
                dispatch(makeMove(dx, dy, MOVE_UP));
            }

            if (dx === 0 && dy > 0 && ds !== "DOWN") {
                dispatch(makeMove(dx, dy, MOVE_DOWN));
            }
        },
        [dispatch]
    );

    const handleKeyEvents = useCallback(
        (event: KeyboardEvent) => {
            if (disallowedDirection) {
                switch (event.key) {
                    case "w":
                        moveSnake(0, -20, disallowedDirection);
                        break;
                    case "s":
                        moveSnake(0, 20, disallowedDirection);
                        break;
                    case "a":
                        moveSnake(-20, 0, disallowedDirection);
                        break;
                    case "d":
                        event.preventDefault();
                        moveSnake(20, 0, disallowedDirection);
                        break;
                }
            } else {
                if (
                    disallowedDirection !== "LEFT" &&
                    disallowedDirection !== "UP" &&
                    disallowedDirection !== "DOWN" &&
                    event.key === "d"
                )
                    moveSnake(20, 0, disallowedDirection); //Move RIGHT at start
            }
        },
        [disallowedDirection, moveSnake]
    );



    useEffect(() => {
        window.addEventListener("keypress", handleKeyEvents);

        return () => {
            window.removeEventListener("keypress", handleKeyEvents);
        };
    }, [disallowedDirection, handleKeyEvents]);



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