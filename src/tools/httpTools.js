import axios from 'axios'

const baseUrl = 'http://101.43.188.206:8080'

export const fetchPostQuery = (url, query) => {
    let postQuery = ''
    Object.keys(query).map(item => {
        postQuery += `${item}=${query[item]}&`
    })
    const postUrl = `${baseUrl}${url}?${postQuery}`
    return axios.post(postUrl)
}

export const fetchPostBody = (url, body) => {
    const postUrl = `${baseUrl}${url}`
    return axios.post(postUrl, body)
}