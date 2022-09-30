import { baseNetwork } from "../base";

export const customerServices = {
    getAllCustomers: () => {
        return baseNetwork.getAll('customers');
    },
    deleteCustomer: (id) => {
        return baseNetwork.delete('customers', id);
    }
}