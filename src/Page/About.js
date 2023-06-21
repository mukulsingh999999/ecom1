import React from 'react'
import Container from "../components/Container"
import {Link} from "react-router-dom"
import bannerimg from "../images/aboutimg.jpg"

const About = () => {
  return (
    <>

    <Container class1="about-wrapper-top py-5">
      <div className="top-wrapper">
        <div className="row">
        <div className="col-12 ">
          <div className="d-flex">
            <div className="col-2">
              <h5 className="about-head">Who We Are</h5>
              </div>
                <div className="col-9">
                  <p className="aboutpara1">        
                    Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon.
                  </p>
                </div>
              </div>
             </div>
          </div>
        </div>
      <div className="middle-wrapper py-5">
        <div className="row">
          <div className="d-flex justify-content-center  ">
            <div className="col-4">
              <div className="about-card p-4 ">
                <h4 className="card-head mb-4">Leadership Principles</h4>
                <p className="card-para ">Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.</p>
                <div className="aboutus-btn ">
                  <Link className="button about-btn">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="about-card p-4 ">
                <h4 className="card-head mb-4">Awards and Recognition</h4>
                <p className="card-para ">We are honoured to be recognised for the work we do on behalf of our customers, employees, and communities every day.</p>
                    <div className="aboutus-btn ">
                      <Link className="button about-btn  ">Learn More</Link>
                    </div>
              </div>
            </div>
            <div className="col-4">
              <div className="about-card p-4 ">
                <h4 className="card-head mb-4">Facts About Amazon</h4>
                <p className="card-para ">Facts about Amazon, its employees, communities, and customers.</p>
                  <div className="aboutus-btn ">
                    <Link className="button about-btn">Learn More</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <Container class1="about-wrapper-middle py-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div className="banner-img">
              <img src={bannerimg} alt="aboutbanner" />
          </div>
          </div>
        </div>
      </div>

      <div className="middle-wrapper-text py-5">
        <div className="row">
          <div className="col-12 ">
            <div className="d-flex  justify-content-center gap-50">

              <div className="col-5">
                <h2 className="para1">Amazon’s “Day 1” mentality is our approach of doing everything with the energy and entrepreneurial spirit of a new organisation on its first day.</h2>
              </div>

            <div className="col-5">
              <p className="para2">Working to earn and keep our customers’ trust is the single biggest driver of Amazon’s Day 1 approach. Amazon’s decision-making process asks employees to consider whether an action is a one-way door—consequential and nearly irreversible—or a two-way door, easy to change course and go back. Discover more about who we are through our Annual Letters to Shareholders from 1997 through today.</p>
            </div>

            </div>
        </div>
      </div>
      </div>

    </Container>
      






    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default About