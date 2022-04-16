export const setUserInfo = (objData) => {
    let stringData = JSON.stringify(objData)
    localStorage.setItem('userData', stringData)
}

export const getUserInfo = () => {
    let stringData = localStorage.getItem('userData')
    return JSON.parse(stringData)
}

export const setUserLoginStatus = () => {
    localStorage.setItem('isLogin','1')
}

export const setUserLogoutStatus = () => {
    localStorage.setItem('isLogin','0')
}

export const getUserLoginStatus = () => {
    return localStorage.getItem('isLogin') === '1'
}

export const getNowUserPermission = (buttonPermission) => {

        const { level } = getUserInfo()
        return buttonPermission < level

}