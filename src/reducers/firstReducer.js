const INITIAL_STATE = {
    action: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'teste':
            return {
                ...state,
                action: action.payload
            };
        default:
            return state;
    }
};