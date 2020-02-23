import React from 'react'
import { NavLink } from 'react-router-dom'
require('./index.scss')
class CardColumn extends React.Component {
  render() {
    return (
      <div>
        <div className="tab-card">
          <nav>
            <NavLink className="item" exact activeClassName="active" to="/home">推荐</NavLink>
            <NavLink className="item" exact activeClassName="active" to="/home/follow">关注</NavLink>
            <NavLink className="item" exact activeClassName="active" to="/home/hot">热榜</NavLink>
          </nav>
        </div>
        <div className="tab-content">{ this.props.children}</div>
      </div>
    )
  }
}
export default CardColumn