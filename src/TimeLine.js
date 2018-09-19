import React from 'react';
import { Timeline } from 'antd';
import memo01 from './images/memo01.webp';
import memo02 from './images/memo02.webp';
import memo03 from './images/memo03.webp';
import memo04 from './images/memo04.webp';
import memo05 from './images/memo05.webp';
import './css/timeline.css';
export default class TimeLine extends React.Component {
  render() {
    return (
      <Timeline mode="alternate" style={{ margin: 20 }} pending="未完待续">
        <Timeline.Item color="green">毕业典礼 by 暨南通</Timeline.Item>
        <Timeline.Item>
          <a
            href="https://mp.weixin.qq.com/s?__biz=MzA4NjIyMDQxNQ==&mid=2650033651&idx=1&sn=6ef368a9c025d0e5949b2047c8062271&chksm=87cce6e3b0bb6ff5de888139fa1f35d1095577871feada01193f445fb285e201edff19cad873&mpshare=1&scene=1&srcid=0627PdG39HQKFKr4AnKEwj3T#rd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reference
          </a>
        </Timeline.Item>
        <Timeline.Item>2018-06-27 我们毕业了</Timeline.Item>
        <Timeline.Item color="red">大一刚到时，只有钟楼是让我第一眼记住的</Timeline.Item>
        <Timeline.Item>
          <div className="timeline-image-container">
            <img src={memo01} alt="memo01" />
          </div>
        </Timeline.Item>
        <Timeline.Item color="red">
          日月湖确实只是个普通的湖，但这不妨碍它养育了一批又一批好吃的烧鸭。
        </Timeline.Item>
        <Timeline.Item>
          <div className="timeline-image-container">
            <img src={memo02} alt="memo02" />
          </div>
        </Timeline.Item>
        <Timeline.Item color="red">"去哪吃" 是个永恒的话题</Timeline.Item>
        <Timeline.Item>
          <div className="timeline-image-container">
            <img src={memo03} alt="memo03" className="moveup-fix" />
          </div>
        </Timeline.Item>
        <Timeline.Item color="red">
          有一种恐惧, 叫做 "马克思主义原理基本概论"
        </Timeline.Item>
        <Timeline.Item>
          <div className="timeline-image-container">
            <img src={memo04} alt="memo04" className="moveup-fix" />
          </div>
        </Timeline.Item>
        <Timeline.Item color="red">
          缓缓开动的歧关大巴, 见证着一次又一次的离别和重逢...
        </Timeline.Item>
        <Timeline.Item>
          <div className="timeline-image-container">
            <img src={memo05} alt="memo05" className="moveup-fix" />
          </div>
        </Timeline.Item>
      </Timeline>
    );
  }
}
