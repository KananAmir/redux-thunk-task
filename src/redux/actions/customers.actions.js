import { customerServices } from "../../services/requests"

export const getAllCustomersAction = () => {
    return async (dispatch) => {
        customerServices.getAllCustomers()
            .then(data => dispatch({
                type: 'GET_ALL_CUSTOMERS',
                payload: data
            }))
    }
}
export const addCustomerAction = (data) => {
    console.log('kanan');
    return async (dispatch) => {
        customerServices.addCustomer(data)
            .then(data => dispatch({
                type: 'ADD_CUSTOMER',
                payload: data
            }))
    }
}

export const deleteCustomerAction = (customer) => {
    customerServices.deleteCustomer(customer.id)
    return ({
        type: 'DELETE_CUSTOMER',
        payload: customer
    })
}