
export const customerReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_CUSTOMERS':
            return [...action.payload]

        case 'ADD_CUSTOMER':
            return [...state, action.payload]

        case 'DELETE_CUSTOMER':
            return [...action.payload]

        default:
            return state;
    }
}
