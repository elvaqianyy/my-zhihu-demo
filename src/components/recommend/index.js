import React from 'react'
import { ReactComponent as Icon} from '../../images/arrow-down.svg'
import { ReactComponent as AgreeIcon} from '../../images/agree.svg'
import { ReactComponent as ResetIcon} from '../../images/reset.svg'
import CommentsContainer from './component/CommentsContainer/index.js'

import { recommend } from '../../http/getHome.js'
import store from "../../store/store";
require('./index.scss')

class Recommend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [],
      isload:true
    }
  }
  componentDidMount() {
    let state = store.getState()
    let token = state.token
    console.log('token:', token)
    if (!token) {
      this.context.router.history.push('login')
    }
    recommend({
      pageNo: 1
    }).then(({data}) => {
      console.log('推荐接口：', data)
      if(data.code === '000000') {
        this.setState({
          info: data.body,
          isload: false
        })
      }
    })
  }
  // 同意
  handleAgree = (item, i) => {
    console.log('同意', item, i)
    // 如果修改了state，又马上要使用state值，那么就需要像下面这样写
    this.setState((state) => {
      state.info[i].selected = !state.info[i].selected
      state.info[i].reject = false
      return {
        info: state.info
      }
    })
  }
  // 不赞同
  handleReset = (item, i) => {
    console.log('反对',item)
    this.setState((state) => {
      state.info[i].reject = !state.info[i].reject
      state.info[i].selected = false
      return {
        info: state.info
      }
    })
  }
  // 显示评论
  handleShowComments = (item, i) => {
    console.log('显示评论')
    this.setState((state) => {
      state.info[i].isComments = !state.info[i].isComments
      return {
        info: state.info
      }
    })
  }
  
  render() {
    const { info, isload } = this.state
    console.log('info, isload', info, isload)
    if (isload) {
      return (
        <div>loading...</div>
      )
    } else {
      return (
        <div className="cardList">
          {
            info.map((item, i) => (
              <div className="card" key={ i }>
                <h2 className="card-title">{item.title}</h2>
                <div className="richContent">
                  <div className="richContent-inner">
                    <span>
                    {item.content}
                    </span>
                    <button className="readAll">阅读全文
                      <Icon className="arrow-down" />
                    </button>
                  </div>
                  {/* 底部按钮 */}
                  <div className="richContent-action">
                    <div className="button-left">
                      <span
                        className={`agree ${item.selected ? 'isActive' : ''}`}
                        onClick={() => this.handleAgree(item, i)}
                      >
                        <AgreeIcon className="agree-icon"/>
                          <p>赞同 <span>{item.agreeNum}</span></p>
                      </span>
                      {/* 取消 */}
                      <span
                        className={`reset ${item.reject ? 'isActive' : ''}`}
                        onClick={() => this.handleReset(item, i)}
                      >
                        <ResetIcon className="reset-icon"/>
                      </span>
                    </div>
                    <div className="button-right">
                      <p onClick={() => this.handleShowComments(item, i)}>{item.commentsNum}条评论</p>
                      <p>分享</p>
                      <p>收藏</p>
                      <p>喜欢</p>
                    </div>
                  </div>
                  {/* 评论组件 */}
                  {
                    item.isComments ?  <CommentsContainer /> : null
                  }
                </div>
              </div>
            ))
          }
        </div>
      )
    }
  }
}
export default Recommend