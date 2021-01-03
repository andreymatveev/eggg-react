// login({name, password}) {
//   return axios
//     .post(PZ_ENDPOINTS.login(), {
//       name,
//       password
//     }, {
//       responseType: 'json',
//     })
//     .then((response) => {
//       if (response.data && response.data.token) {
//         localStorage.setItem(PZ_AUTH_CONSTANTS.tokenStorageName, response.data.token);
//       }
//       return response;
//     })
//     .catch(() => {
//       return this.logout();
//     });
// }
//
// logout() {
//   return Promise.resolve().then(() => {
//     localStorage.removeItem(PZ_AUTH_CONSTANTS.tokenStorageName);
//   });
// }
