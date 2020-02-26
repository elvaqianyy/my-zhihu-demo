import React from 'react'
import { ReactComponent as Icon} from '../../images/arrow-down.svg'
import { ReactComponent as AgreeIcon} from '../../images/agree.svg'
import { ReactComponent as ResetIcon} from '../../images/reset.svg'
require('./index.scss')
class Recommend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      agreeNum: '3460',
      commentsNum:'499',
      isAgreeActive: false
    }
  }
  handleAgree = () => {
    console.log('同意')
    // this.setState((state) => ({
    //   agreeNum: +state.agreeNum + 1
    // }))
    this.setState({
      agreeNum: +this.state.agreeNum + 1,
      isAgreeActive: !this.state.isAgreeActive
    })
  }
  handleReset = () => {
    console.log('取消')
  }
  //是否点击同意
  getAgreeClass = () => {
    return this.state.isAgreeActive ? 'isActive' : ''
  }
  render() {
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
            <div className="richContent-action">
              <div className="button-left">
                <span
                  className={`agree ${this.state.isAgreeActive ? 'isActive' : ''}`}
                  onClick={this.handleAgree}
                >
                  <AgreeIcon className="agree-icon"/>
                    <p>赞同 <span>{this.state.agreeNum}</span></p>
                </span>
                <span className="reset" onClick={this.handleReset}>
                  <ResetIcon className="reset-icon"/>
                </span>
              </div>
              <div className="button-right">
                <p className="comments">{this.state.commentsNum}条评论</p>
                <p>分享</p>
                <p>收藏</p>
                <p>喜欢</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Recommend