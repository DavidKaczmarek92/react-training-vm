// eslint-disable-next-line no-shadow
export enum countAction {
    INCREMENT = "Increment",
    DECREMENT = "Decrement"
}

export const countReducer = (currentState: number, action: countAction) => {
    switch (action) {
        case countAction.INCREMENT:
            return currentState + 1;
        case countAction.DECREMENT:
            return currentState - 1;
    }
};