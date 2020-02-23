import React from 'react';
import { NavLink } from 'react-router-dom'
import { ReactComponent as Icon } from '../images/icon.svg'
require('../styles/main.scss')
class MainComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overviewData: {}
    }
  }
  componentWillMount = () => {
    let token = localStorage.getItem('token')
    if (!token) {
      console.log('请登录')
      return
    }
    console.log('继续')
  }
  // 把goPage绑定this上
  goPage = (value) => {
    console.log('gopage', this.props)
    // this.props.history.push(`/${value}`)
  }
  render() {
    return (
      <div className="main">
        <div className="AppHeader">
          <div className="header">
            <div>
              <Icon className="Icon ZhihuLogo ZhihuLogo--blue Icon--logo"/>
            </div>
            <ul>
              <li className="item">
                <NavLink
                  to="/home"
                  activeClassName="active"
                >首页</NavLink>
              </li>
              <li className="item">
                <NavLink
                  to="/explore"
                  activeClassName="active"
                >发现</NavLink>
              </li>
              <li className="item">
                <NavLink
                  to="/question"
                  activeClassName="active"
                >等你来答</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MainComponent