export const setUserInfo = (objData) => {
    let stringData = JSON.stringify(objData)
    localStorage.setItem('userData', stringData)
}

export const getUserInfo = () => {
    let stringData = localStorage.getItem('userData')
    return JSON.parse(stringData)
}