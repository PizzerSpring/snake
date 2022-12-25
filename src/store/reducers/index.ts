const GlobalState = {
    data: ""
};

export const gameReducer = (state = GlobalState, action: any) => {
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