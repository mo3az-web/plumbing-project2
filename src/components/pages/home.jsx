import React from 'react';
import "../pages/home.css"



const Home = () => {
  const currentyear = new Date().getFullYear();
  const elements=[
    { 
      id:1,
      title:"سرعه في حل المشكله ",
      description: "نقوم بحل مشاكل السباكه بسرعه ."
    
  }
  ,
  {
      id: 2,
      title:" اسعار تنافسيه",
      description: "اسعارنا جيده جدا."
  },
  {
      id:3,
      title:" خبره و دقه عاليه",
      description: "يمتاز سباكونا بالبخبره و الدقه العاليه "
  }
];
  return(     
    <div className="home-page">
    <header className="header">
      <h1>مؤسسة عتيوي الرشيدي </h1>
      <p>اختيارك الاول في خدمات السباكه</p>
      <a className="cta-button" href='/plumbing-project/contact'>اتصل بنا الان!</a>
    </header>

    <section className="about-section">
      <h2>عنا</h2>
      <p>
        نحن نؤسسة عتيوي الرشيدي مختصون في اعمال السباكه في المملكه العربيه السعوديه مدينة الرياض, لدينا عمال  شغوفون بالعمل بخبره تصل الي 15 عام من الاتقان
      </p>
    </section>

    <div className="features-section">
      <h2>ما يميزنا</h2>
      <div className="features-grid">
        {elements.map((elements) => (
        
        <div key={elements.id} className="feature">
          <h1>{elements.title}</h1>
          <p>{elements.description}</p>
        </div>
         ))}
          </div>
      </div>
    <footer className="footer">
      <p> جميع الحقوق محفوظه لمؤسسة عتيوي الرشيدي  {currentyear}&copy;</p>
    </footer>
  </div>
  );
};




export default Home