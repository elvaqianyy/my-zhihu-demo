import React from 'react'
import { ReactComponent as Icon} from '../../images/arrow-down.svg'
require('./index.scss')
class Recommend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
              <button>赞同</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Recommend