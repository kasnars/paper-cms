import axios from 'axios'
let ui = require('element-ui')

const baseUrl = 'http://101.43.188.206:8080'

export const fetchPostQuery = (url, query) => {
    let postQuery = ''
    Object.keys(query).map(item => {
        postQuery += `${item}=${query[item]}&`
    })
    let postUrl = `${baseUrl}${url}?${postQuery}`
    postUrl = postUrl.substring(0, postUrl.length-1)
    return axios.post(postUrl)
}

export const fetchPostBody = (url, body) => {
    const postUrl = `${baseUrl}${url}`
    return axios.post(postUrl, body)
}

export const fetchPostAll = (url, query, body) => {
    let postQuery = ''
    Object.keys(query).map(item => {
        postQuery += `${item}=${query[item]}&`
    })
    let postUrl = `${baseUrl}${url}?${postQuery}`
    postUrl = postUrl.substring(0, postUrl.length - 1)
    return axios.post(postUrl, body)
}

axios.interceptors.response.use(res => {
    // Do something with response data
    // this.$message.success(res.status);
    if (res.data.status !== 200) {
        ui.Message({
            message: res.data.msg,
            type: 'error'
        })
    }

    return res;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });