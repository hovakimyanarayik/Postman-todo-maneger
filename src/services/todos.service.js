import httpService from "./http.service";

const todosEndPoint = 'task/'

const defaultProps = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`,
        "Contet-Type": 'application/json'
    },
})

const todosService = {
    getAll: async () => {
        const response = await httpService.get(todosEndPoint, defaultProps(localStorage.getItem('token')))
        return response
    },
    add: async (data) => {
        const response = await httpService.post(todosEndPoint, data, defaultProps(localStorage.getItem('token')))
        return response
    },
    toggle: async (id, data) => {
        const response = await httpService.put(todosEndPoint + id, data, defaultProps(localStorage.getItem('token')))
        return response
    },
    delete: async (id) => {
        const response = await httpService.delete(todosEndPoint + id, defaultProps(localStorage.getItem('token')))
        return response
    }
}


export default todosService