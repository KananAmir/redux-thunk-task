
export const customerReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_CUSTOMERS':
            return [...action.payload]

        case 'ADD_CUSTOMER':
            return [action.payload]

        case 'DELETE_CUSTOMER':
            return [...state.filter(q => q.id !== action.payload.id)]

        default:
            return state;
    }
}
