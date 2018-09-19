import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import './css/app.css';

import School from './School';
import Activities from './Activities';
import Photos from './Photos';
import TimeLine from './TimeLine';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="home-container">
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
