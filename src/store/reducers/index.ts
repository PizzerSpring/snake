import {isNumber} from "util";

interface ISnakeCoord {
    x: number
    y: number
}

export interface IGlobalState {
    snake: ISnakeCoord[] | []
}

const globalState: IGlobalState = {
    snake: [
        {x: 580, y: 300},
        {x: 560, y: 300},
        {x: 540, y: 300},
        {x: 520, y: 300},
        {x: 500, y: 300}
    ]
};

export const gameReducer = (state = globalState, action: any) => {
    switch (action.type) {
        case "MOVE_RIGHT":
            /**
             * Perform a certain set of operations
             */
            return {
                ...state, data: action.payload
            };

        default:
            return state;
    }
}