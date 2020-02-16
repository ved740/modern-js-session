const initialState = {
    list: [],
    msg: ''
};

const initReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LIST_SUCCESS':
            const tempList = action.payload;
            return {
                ...state,
                list: tempList
            };
        case 'FETCH_LIST_ERROR':
            const tempList = action.payload;
            return {
                ...state,
                list: tempList,
                    msg: 'Uhh Ohh.. Something went wrong...'
            };
        default:
            return state;
    }
};

const state = initReducer(undefined, {
    type: 'FETCH_LIST_SUCCESS',
    payload: [1, 2, 3, 4]
});

console.log(state);