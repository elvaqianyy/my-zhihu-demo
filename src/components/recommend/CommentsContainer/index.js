import React from 'react'
require('./index.scss')

export default class CommentsContainer extends React.Component {
  render() {
    return (
      <div className="comments-contain">
        <div className="comments">
          <header className="topbar">
            <div className="topbar-title">146 条评论</div>
            <div className="topbar-option">切换为时间排序</div>
          </header>
          <div className="comments-divider">
            精彩评论(13)
          </div>
          <div>
            <ul className="comments-cardList">
              <li className="comments-item">
                <div className="item-top">
                  <div className="avatar">
                    <img src="https://b-ssl.duitang.com/uploads/item/201511/21/20151121171107_zMZcy.jpeg" alt="" />
                  </div>
                  <div>四毛</div>
                </div>
                <div className="item-content">最后一个被某种东西束缚的，我感受特别大，当初我以为抽烟，只要我想戒，就可以戒，后来真是真香打脸！</div>
              </li>
              <li className="comments-item">
                <div className="item-top">
                  <div className="avatar">
                    <img src="https://b-ssl.duitang.com/uploads/item/201511/21/20151121171107_zMZcy.jpeg" alt=""/>
                  </div>
                  <div>四毛</div>
                </div>
                <div className="item-content">最后一个被某种东西束缚的，我感受特别大，当初我以为抽烟，只要我想戒，就可以戒，后来真是真香打脸！</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}