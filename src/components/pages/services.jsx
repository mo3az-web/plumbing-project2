import "./services.css";
import React from 'react';
import plumeber_1 from "../../assets/plumbing (1).png"
import plumeber_2 from "../../assets/bathroom (1).png"
import plumeber_3 from "../../assets/pump (1).png"
import plumeber_4 from "../../assets/plumbing in general.png"
const Services = () => {



  const services = [
    {
      id: 1,
      pic: <img src={plumeber_2} />,
      title:" تركيب حمامات",
      description: "نقوم بتركيب الحمامات و اصلاحها."
    },
    {
      id: 2,
      pic: <img src={plumeber_1} />,
      title: "تاسيس ",
      description:"يوجد لدينا تاسيس سباكه معلق و مخفي باتقان"
    },
    {
      id: 3,
      pic: <img src={plumeber_3} />,
      title: "المضخات و التهريب",
      description:  "متخصصون في المضخات و التهريب و التسربات "
    },
    {
      id: 4,
      pic: <img src={plumeber_4} />,
      title: " و المزيد ",
      description:  "" 
    },
  ];

  return (
    <div className="services-page">
      <h1>الخدمات المتوفرة</h1>
      <p>نقدم مجموعة واسعة من الخدمات .</p>

      <div className="services-list">
        
        {services.map((service) => (
        
          <div key={service.id} className="service-card">
            <div>{service.pic}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>


  );
};



export default Services