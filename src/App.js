import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import logo from './images/logo.svg';
import './css/app.css';

import School from './components/School';
import Activities from './components/Activities';
import Photos from './components/Photos';
import TimeLine from './components/TimeLine';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="home-container">
          <img className="logo" src={logo} alt="logo" />
          <Menu mode="horizontal" style={{ userSelect: 'none' }}>
            <Menu.Item>
              <Link to="/school">
                <span>
                  <Icon type="appstore" theme="filled" />
                  学校
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/activities">
                <span>
                  <Icon type="appstore" theme="filled" />
                  班级活动
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/photos">
                <span>
                  <Icon type="appstore" theme="filled" />
                  班级合照
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/timeLine">
                <span>
                  <Icon type="appstore" theme="filled" />
                  时间线
                </span>
              </Link>
            </Menu.Item>
          </Menu>

          <Switch>
            <Route exact path="/" component={null} />
            <Route exact path="/school" component={School} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/timeLine" component={TimeLine} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}
