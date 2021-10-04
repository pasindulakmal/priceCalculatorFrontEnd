// import axios from 'axios';
// import { defaultInterceptor } from '../utils/interceptor';
// import { openInterceptor } from '../utils/interceptor';
// import Auth from './authentication/auth';

// const _get = (callback, endpointURL, params, responseType) => {
//   const axiosInstance = axios.create();
//   axiosInstance.interceptors.request.use(defaultInterceptor, error => {
//     Promise.reject(error);
//   });

//   axiosInstance
//     .get(endpointURL, { params, responseType })
//     .then(response => {
//       callback(response.data);
//     })
//     .catch(async err => {
//       console.error('err', err);

//       if (err.response.status === 401) {
//         console.log(
//           '%c xxxxxxxxxxxxxxxxxxx refresh the token when expire xxxxxxxxxxxxxxxxxx',
//           'color: orange'
//         );
//         await Auth.refreshAccessToken();
//         axiosInstance
//           .get(endpointURL, { params })
//           .then(response => {
//             callback(response.data);
//           })
//           .catch(err => {
//             if (err.response.status === 401) {
//               window.location = '/login/index.html';
//             }
//           });
//       }
//     });
// };

// const _post = (callback, endpointURL, payload, options, errCallBack) => {
//   const axiosInstance = axios.create();
//   axiosInstance.interceptors.request.use(defaultInterceptor, error => {
//     Promise.reject(error);
//   });

//   axiosInstance
//     .post(endpointURL, payload, options)
//     .then(response => {
//       callback(response.data);
//     })
//     .catch(async err => {
//       console.log('err', err)
//       if (err.response.status === 401) {
//         console.log(
//           '%c xxxxxxxxxxxxxxxxxxx refresh the token when expire xxxxxxxxxxxxxxxxxx',
//           'color: orange'
//         );
//         await Auth.refreshAccessToken();
//         axiosInstance
//           .post(endpointURL, payload)
//           .then(response => {
//             callback(response.data);
//           })
//           .catch(err_ => {
//             errCallBack(err_.response.data);
//           });
//       } else {
//         errCallBack(err.response.data);
//       }
//     });
// };

// const _put = (callback, endpointURL, payload, errCallBack) => {
//   const axiosInstance = axios.create();
//   axiosInstance.interceptors.request.use(defaultInterceptor, error => {
//     Promise.reject(error);
//   });

//   axiosInstance
//     .put(endpointURL, payload)
//     .then(response => {
//       callback(response.data);
//     })
//     .catch(async err => {
//       if (err.response.status === 401) {
//         console.log(
//           '%c xxxxxxxxxxxxxxxxxxx refresh the token when expire xxxxxxxxxxxxxxxxxx',
//           'color: orange'
//         );
//         await Auth.refreshAccessToken();
//         axiosInstance
//           .put(endpointURL, payload)
//           .then(response => {
//             callback(response.data);
//           })
//           .catch(err_ => {
//             errCallBack(err_.response.data);
//           });
//       } else {
//         errCallBack(err.response.data);
//       }
//     });
// };

// const _delete = (callback, endpointURL, errCallBack) => {
//   const axiosInstance = axios.create();
//   axiosInstance.interceptors.request.use(defaultInterceptor, error => {
//     Promise.reject(error);
//   });

//   axiosInstance
//     .delete(endpointURL)
//     .then(response => {
//       callback(response.data);
//     })
//     .catch(async err => {
//       if (err.response.status === 401) {
//         console.log(
//           '%c xxxxxxxxxxxxxxxxxxx refresh the token when expire xxxxxxxxxxxxxxxxxx',
//           'color: orange'
//         );
//         await Auth.refreshAccessToken();
//         axiosInstance
//           .delete(endpointURL)
//           .then(response => {
//             callback(response.data);
//           })
//           .catch(err_ => {
//             errCallBack(err.response.data);
//           });
//       } else {
//         errCallBack(err.response.data);
//       }
//     });
// };

// const _get_open = (callback, endpointURL, params) => {
//   const axiosInstance = axios.create();
//   axiosInstance.interceptors.request.use(openInterceptor, error => {
//     Promise.reject(error);
//   });
//   axiosInstance
//     .get(endpointURL, { params })
//     .then(response => {
//       const data = response.data;
//       callback(data);
//     })
//     .catch(err => {
//       errorCallback(err);
//     });
// };

// const _post_open = (callback, endpointURL, payload, options, errCallBack) => {
//   const axiosInstance = axios.create();
//   axiosInstance.interceptors.request.use(openInterceptor, error => {
//     Promise.reject(error);
//   });
//   axiosInstance
//     .post(endpointURL, payload, options)
//     .then(response => {
//       callback(response.data);
//     })
//     .catch(async err => {
//       if (err.response.status === 401) {
//         console.log(
//           '%c xxxxxxxxxxxxxxxxxxx refresh the token when expire xxxxxxxxxxxxxxxxxx',
//           'color: orange'
//         );
//         await Auth.refreshAccessToken();
//         axiosInstance
//           .post(endpointURL, payload)
//           .then(response => {
//             callback(response.data);
//           })
//           .catch(err_ => {
//             errCallBack(err_.response.data);
//           });
//       } else {
//         errCallBack(err.response.data);
//       }
//     });
// };

// const _put_open = (callback, endpointURL, payload, errCallBack) => {
//   const axiosInstance = axios.create();
//   axiosInstance.interceptors.request.use(openInterceptor, error => {
//     Promise.reject(error);
//   });
//   axiosInstance
//     .put(endpointURL, payload)
//     .then(response => {
//       callback(response.data);
//     })
//     .catch(async err => {
//       if (err.response.status === 401) {
//         console.log(
//           '%c xxxxxxxxxxxxxxxxxxx refresh the token when expire xxxxxxxxxxxxxxxxxx',
//           'color: orange'
//         );
//         await Auth.refreshAccessToken();
//         axiosInstance
//           .put(endpointURL, payload)
//           .then(response => {
//             callback(response.data);
//           })
//           .catch(err_ => {
//             errCallBack(err_.response.data);
//           });
//       } else {
//         errCallBack(err.response.data);
//       }
//     });
// };
// export { _get, _post, _put, _delete, _get_open, _post_open, _put_open };
