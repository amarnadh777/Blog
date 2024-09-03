import actionTypes from "./actionTyoes"

const authorLogin = (data) =>
{
    return {type:actionTypes.LOGIN,payload:{authorInfo:data}}
}
const authorLogout = () =>
{
    return {type:actionTypes.LOGOUT}
}
export default {authorLogin,authorLogout}