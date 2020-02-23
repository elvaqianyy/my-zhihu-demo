import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import MainComponent from '../components/main.js'
import Login from '../components/login/index.js'
import Explore from '../components/explore/index.js'
import Home from '../components/home/index.js'
import Question from '../components/question/index.js'
import Follow from '../components/follow/index.js'
import HotWrap from '../components/hot/index.js'
import Recommend from '../components/recommend/index.js'

require('../styles/content.scss')

class Layout extends React.Component {
  render() {
    return (
      <div className="mm">
        {/* 公共组件部分 */}
        <MainComponent />
        {/* 下面这个标签指，当前组件标签内的所有内容都可以放在下面标签里显示出来，
        方便指定位置，插入组件，
        this.props.children可以是undefined，array，object
        */}
        <div className="content">{ this.props.children }</div>
      </div>
    )
  }
}

const BasicRoute = () => (
  <HashRouter>
    <div className="appWrap">
      <Layout>
        <Switch>
          <Route path="/home" component={() => (
          <div>{this.props.children}</div>)}>
            <Home>
              <Switch>
                <Route path="/home" exact component={Recommend} />
                <Route path="/home/hot" exact component={HotWrap} />
                <Route path="/home/follow" exact component={Follow} />
              </Switch>
            </Home>
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/question" exact component={Question} />
          {/* <Route path="/follow" component={Follow} />
          <Route path="/hot" component={HotWrap} /> */}
          <Redirect path="/" exact replace to="/home" />
        </Switch>
      </Layout>
    </div>
  </HashRouter>
)
export default BasicRoute
