import httpService from "./http.service";

const userEndPoint = "user/";

const userService = {
  getMe: async () => {
    const response = await httpService.get(userEndPoint + "me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response;
  },
  register: async (data) => {
    const response = await httpService.post(userEndPoint + "register", data);
    return response
  },
  login: async (data) => {
    const response = await httpService.post(userEndPoint + 'login', data )
    return response
  },
  getAvatar: async (id) => {
    const response = await httpService.get(userEndPoint + id + '/avatar')
    return response
  },
  updateAvatar: async (formData) => {
    console.log(localStorage.getItem('token'));
    const response = await httpService.post(userEndPoint + 'me/avatar', formData,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    })
    return response
  }
};
export default userService;
