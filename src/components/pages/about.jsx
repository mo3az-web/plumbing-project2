
import React from 'react';
import './About.css';
import senior  from "../../assets/senior plumber.png";
import plumb  from "../../assets/plumbing in general.png";

const About = () => {
  return (
    <div className="about-page">
      <h1>من نحن و ماذا نقدم؟</h1>
      <p>نحن مؤسسة عتيوي الرشيدي</p>

      <div className="timeline">
        {/* شرح 1*/}
        <div className="timeline-item">
          <h2>مختصون في السباكه </h2>
          <p>
           <img src={plumb}></img> يوجد لدينا جميع خدمات السباكه 
          </p>
        </div>

        {/* شرح 2 */}
        <div className="timeline-item">
          <h2>لدينا نخبة من السباكين المحترفين</h2>
          <p>
           <img src={senior}></img>     يمتلك السباكون عندنا خبره تتجاوز ال15 عام من الكفائه و الاتقان
          </p>
        </div>
        </div>
      </div>
  );
};


export default About