import { createStore } from 'redux'
// import action from './action'
const initState = {
  token: ''
}

// 创建reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SETTOKEN':
      return Object.assign({}, state, {
        token: action.token
      })
    case 'REMOVETOKEN':
      return Object.assign({}, state, {
        token: action.token
      })
    default:
      return initState
  }
}
const store = createStore(reducer)
console.log('初始化：', store.getState())
export default store