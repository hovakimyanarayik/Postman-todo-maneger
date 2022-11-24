import httpService from "./http.service";

const userEndPoint = "user/";

const userService = {
  getMe: async () => {
    const token = localStorage.getItem("token") || "";
    const response = await httpService.get(userEndPoint + "me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  register: async (data) => {
    const response = await httpService.post(userEndPoint + "register", data);
    console.log(response);
  },
};

export default userService;
