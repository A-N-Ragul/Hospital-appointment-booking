import React from "react";
function Aboutus(){
    return(
        <>
        <section className="section__container about__container" id="about">
        <div className="about__content">
          <h2 className="section__header">About Us</h2>
          <p>
            Welcome to our healthcare website, your one-stop destination for
            reliable and comprehensive health care information. We are committed
            to promoting wellness and providing valuable resources to empower you
            on your health journey.
          </p>
          <p>
            Explore our extensive collection of expertly written articles and
            guides covering a wide range of health topics.
          </p>
          <p>
            Discover practical health tips and lifestyle advice to optimize your
            physical and mental well-being.
          </p>
        </div>
        <div className="about__image">
          <img src={require("../assets/about.jpg")} alt="about" />
        </div>
      </section>
      <section className="section__container why__container" id="blog">
        <div className="why__image">
          <img src={require("../assets/choose-us.jpg")} alt="why choose us" />
        </div>
        <div className="why__content">
          <h2 className="section__header">Why Choose Us</h2>
          <p>
            With a steadfast commitment to your well-being, our team of highly
            trained healthcare professionals ensures that you receive nothing
            short of exceptional patient experiences.
          </p>
          <div className="why__grid">
            <span><i className="ri-hand-heart-line"></i></span>
            <div>
              <h4>Intensive Care</h4>
              <p>
                Our Intensive Care Unit is equipped with advanced technology and
                staffed by team of professionals
              </p>
            </div>
            <span><i className="ri-truck-line"></i></span>
            <div>
              <h4>Free Ambulance Car</h4>
              <p>
                A compassionate initiative to prioritize your health and
                well-being without any financial burden.
              </p>
            </div>
            <span><i className="ri-hospital-line"></i></span>
            <div>
              <h4>Medical and Surgical</h4>
              <p>
                Our Medical and Surgical services offer advanced healthcare
                solutions to address medical needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
    );
}
export default Aboutus;