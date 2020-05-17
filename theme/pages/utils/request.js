import axios from 'axios'



// 请求体拦截
axios.interceptors.request.use(function (config) {

  if (localStorage.getItem('token')) {
    config.headers.Authorization = `${localStorage.getItem('token')}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应体处理
axios.interceptors.response.use(function (response) {

  return response;
}, function (error) {

  // if (error.response) {

  //   switch (error.response.status) {
  //     case 401:
  //       Cookies.remove('access_token')
  //       window.location.href = '/'
  //   }
  // }
  return Promise.reject(error.response.data)

});

//请求函数
export default function request(options = {}, files = false) {

  let myInit = {
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
    }
  }

  if (!files) {
    myInit.headers['Content-Type'] = 'application/json'
  }

  Object.assign(options, myInit);

  return new Promise((resolve, reject) => {
    axios(options).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err)
    });
  })
}
