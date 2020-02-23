import React from 'react'
// import {Route, Switch} from 'react-router-dom';

import CardColumn from './cardColumn/index.js'
// import HotWrap from '../hot/index.js'
require('../../styles/home/home.scss')
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="home">
        <div className="home-main">
          <section className="home-ad">
            <img src={require("../../images/ad1.jpg")} alt="广告" />
          </section>
          <section className="home-cardColumn">
            {/* <HotWrap /> */}
            <CardColumn>
              <div>{this.props.children}</div>
            </CardColumn>
            {/* <div className="tab-card"></div> */}
            {/* <div className="tab-content"></div> */}
          </section>
        </div>
        <div className="home-sidebar">
          侧边栏
        </div>
      </div>
    )
  }
}
export default Home