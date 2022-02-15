import axios from 'axios'

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
    const postUrl = `${baseUrl}${url}?${postQuery}`
    postUrl = postUrl.substring(0, postUrl.length - 1)
    return axios.post(postUrl, body)
}