import React from 'react'
import { ReactComponent as Icon} from '../../images/arrow-down.svg'
import { ReactComponent as AgreeIcon} from '../../images/agree.svg'
import { ReactComponent as ResetIcon} from '../../images/reset.svg'
import CommentsContainer from './component/CommentsContainer/index.js'

import { recommend } from '../../http/getHome.js'
require('./index.scss')

class Recommend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      agreeNum: '3460',
      commentsNum:'499',
      isAgreeActive: false,
      isAgreeActive2: false,
      select: '',
      showComments: true
    }
  }
  componentDidMount() {
    recommend({
      pageNo: 1
    }).then(res =>{
      console.log('推荐接口：', res)
    })
  }
  // 同意
  handleAgree = () => {
    console.log('同意')
    this.setState({
      isAgreeActive: !this.state.isAgreeActive,
      isAgreeActive2: false,
      agreeNum: this.state.isAgreeActive? (+this.state.agreeNum - 1) : (+this.state.agreeNum + 1)
    })
  }
  // 撤销同意
  handleReset = () => {
    console.log('取消')
    this.setState({
      isAgreeActive2: !this.state.isAgreeActive2,
      isAgreeActive: false,
      agreeNum: this.state.isAgreeActive2? (+this.state.agreeNum + 1) : (+this.state.agreeNum - 1)
    })
  }
  // 显示评论
  handleShowComments = () => {
    console.log('显示评论')
    this.setState({
      showComments: !this.state.showComments
    })
  }
  
  render() {
    let commentsContainer = null
    if (this.state.showComments) {
      commentsContainer = <CommentsContainer />
    }
    return (
      <div className="cardList">
        <div className="card">
          <h2 className="card-title">摧毁一个汉字有多简单？</h2>
          <div className="richContent">
            <div className="richContent-inner">
              <span>
              纤雀：贬损他，不遗余力的贬损他。 吃饭掉粒米，就用筷子打着他的手关节骂：吃饭都不会，猪都比你强。 走路摔一跤，就用小棍拍着他的小腿肚骂：走路都能摔跤，你…
              </span>
              <button className="readAll">阅读全文
                <Icon className="arrow-down" />
              </button>
            </div>
            {/* 底部按钮 */}
            <div className="richContent-action">
              <div className="button-left">
                <span
                  className={`agree ${this.state.isAgreeActive ? 'isActive' : ''}`}
                  onClick={this.handleAgree}
                >
                  <AgreeIcon className="agree-icon"/>
                    <p>赞同 <span>{this.state.agreeNum}</span></p>
                </span>
                {/* 取消 */}
                <span
                  className={`reset ${this.state.isAgreeActive2 ? 'isActive' : ''}`}
                  onClick={this.handleReset}
                >
                  <ResetIcon className="reset-icon"/>
                </span>
              </div>
              <div className="button-right">
                <p onClick={this.handleShowComments}>{this.state.commentsNum}条评论</p>
                <p>分享</p>
                <p>收藏</p>
                <p>喜欢</p>
              </div>
            </div>
            {/* 评论组件 */}
            { commentsContainer }
          </div>
        </div>
      </div>
    )
  }
}
export default Recommend