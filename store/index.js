// const cookieparser = process.server ? require("cookie-parser") : undefined;
// // console.log('=============process.server=============');
// // console.log(process.server);
// // console.log('=============cookieparser===============');
// // console.log(cookieparser);
// export const state = () => {
//   return {
//     auth: null
//   };
// };
// export const mutations = {
//   setAuth(state, auth) {
//     state.auth = auth;
//   }
// };
// export const actions = {
//   nuxtServerInit({ commit }, { req }) {
//     let auth = null;
//     if (req.headers.cookie) {
//     //   const parsed = cookieparser.parse(req.headers.cookie);
//     const parsed = cookieparser.JSONCookies(req.headers.cookie);
//       try {
//         auth = JSON.parse(parsed.auth);
//         auth = cookieparser.JSONCookie(req.headers.cookie)
//       } catch (err) {
//         // No valid cookie found
//       }
//     }
//     commit("setAuth", auth);
//   }
// };
