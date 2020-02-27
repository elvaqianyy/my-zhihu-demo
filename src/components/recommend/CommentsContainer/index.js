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
          <div>
            内容
          </div>
        </div>
      </div>
    )
  }
}