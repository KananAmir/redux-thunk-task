import { baseNetwork } from "../base";

export const customerServices = {
    getAllCustomers: () => {
        return baseNetwork.getAll('customers');
    },
    addCustomer: (customer) => {
        return baseNetwork.add('customers', customer);
    },
    deleteCustomer: (id) => {
        return baseNetwork.delete('customers', id);
    }
}