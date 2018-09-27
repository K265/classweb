import React from 'react';
import photo1 from '../images/classphotos/1.jpg';
import photo2 from '../images/classphotos/2.jpg';
import photo3 from '../images/classphotos/3.jpg';
import photo4 from '../images/classphotos/4.jpg';
import photo5 from '../images/classphotos/5.jpg';
import photo6 from '../images/classphotos/6.jpg';
import '../css/photo.css';
export default class Photos extends React.Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <div class="responsive">
          <div class="img">
            <a target="_blank">
              <img src={photo1} alt="企业参观" width="300" height="200"></img>
            </a>
            <div class="desc">企业参观</div>
          </div>
        </div>

        <div class="responsive">
          <div class="img">
            <a target="_blank">
              <img src={photo2} alt="男生节" width="600" height="400"></img>
            </a>
            <div class="desc">男生节</div>
          </div>
        </div>

        <div class="responsive">
          <div class="img">
            <a target="_blank">
              <img src={photo3} alt="正装大合照" width="600" height="400"></img>
            </a>
            <div class="desc">正装大合照</div>
          </div>
        </div>

        <div class="responsive">
          <div class="img">
            <a target="_blank">
              <img src={photo4} alt="男生正装合照" width="600" height="400"></img>
            </a>
            <div class="desc">男生正装合照</div>
          </div>
        </div>

        <div class="responsive">
          <div class="img">
            <a target="_blank">
              <img src={photo5} alt="女生正装合照" width="600" height="400"></img>
            </a>
            <div class="desc">女生正装合照</div>
          </div>
        </div>

        <div class="responsive">
          <div class="img">
            <a target="_blank">
              <img src={photo6} alt="烧烤活动" width="600" height="400"></img>
            </a>
            <div class="desc">烧烤活动</div>
          </div>
        </div>

      </div>
    );
  }
}
