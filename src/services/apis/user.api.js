import axios from 'axios'

export default {
    findAll: async () => {
        return await axios.get(`${import.meta.env.VITE_SEVER}/students`)
    },
    create: async (data)=>{
        return await axios.post(`${import.meta.env.VITE_SEVER}/students/create`,data)
    },
    update: async (userId,data)=>{
        return await axios.patch(`${import.meta.env.VITE_SEVER}/students/update/${userId}`,data)
    },
    delete: async(userId)=>{
        return await axios.delete(`${import.meta.env.VITE_SEVER}/students/delete/${userId}`)
    }
}