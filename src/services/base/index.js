import { axiosInstance } from "../axiosInstance"



export const baseNetwork = {

    getAll: async (url) => {
        let responseData = [];
        await axiosInstance.get(url)
            .then(res => {
                if (res.status === 200) {
                    responseData = res.data;
                }
                else {
                    throw new Error('custom error');
                }
            })
            .catch(err => {
                throw err
            })

        return responseData;

    },
    delete: async (url, id) => {
        await axiosInstance.delete(`${url}/${id}`)
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }
                else {
                    throw new Error('custom error');
                }
            })
            .catch(err => {
                throw err
            })

    },
    add: () => {

    },
    update: () => {

    }

}