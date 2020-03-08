const setToken = (token) => ({
  type: 'SETTOKEN',
  token: token
})
const removeToken = () => ({
  type: 'REMOVETOKEN',
  token: ''
})
export default {
  setToken,
  removeToken
}