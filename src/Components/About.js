import React from 'react';
import '../Css/About.css';
import { FiCheck } from 'react-icons/fi';

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="aboutBanner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="aboutBanner-content text-center">
                <h6>Features<span>.</span><strong>About Us</strong></h6>
                <h1>our mission</h1>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative 
                  approaches to corporate strategy foster collaborative thinking approaches to corporate strategy 
                  foster collaborative thinking..
                </p>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="aboutGallery">
          <div className="row">
            <div className="col-lg-4">
              <div className="aboutGallery-image1 text-right p-10">
                <img src={require('../Images/Rectangle 38790.png')} alt="img1"></img>
              </div>
              <div className="aboutGallery-image2 p-10">
                <img src={require('../Images/Rectangle 38791.png')} alt="img2"></img>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aboutGallery-image3 text-center p-10">
                  <img src={require('../Images/Rectangle 38787.png')} alt="img3"></img>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aboutGallery-image4 p-10">
                  <img src={require('../Images/Rectangle 38788.png')} alt="img4"></img>
              </div>
              <div className="aboutGallery-image5 p-10">
                  <img src={require('../Images/Rectangle 38789.png')} alt="img5"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="rating-container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="rating-content">
                <h1>2022</h1>
                <p>Founded</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="rating-content">
                <h1>5k<span>+</span></h1>
                <p>Courses</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="rating-content">
                <h1>500<span>+</span></h1>
                <p>Universities</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="rating-content">
                <h1>4.9</h1>
                <p>Avg.Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="overview-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="overview-card">
                <h1>what is studyoda</h1>
                <div className="overview-image text-center">
                  <img src={require('../Images/Mask group (1).png')} alt="overview"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="overview-content">
                <h6>Leverage agile frameworks to provide a robust synopsis for high level overviews.</h6>
                <div className="overview-subtitle">
                  <span><FiCheck className="check"/></span>
                  <p>Add a your new customized Note</p>
                </div>
                <div className="overview-subtitle">
                  <span><FiCheck className="check"/></span>
                  <p> Click Open Note button here open full note </p>
                </div>
                <div className="overview-subtitle">
                  <span><FiCheck className="check"/></span>
                  <p>Leverage agile frameworks to provide a robust synopsis</p>
                </div>
                <div className="overview-subtitle">
                  <span><FiCheck className="check"/></span>
                  <p>Click Open Note button here open full note</p>
                </div>
                <div className="overview-subtitle">
                  <span><FiCheck className="check"/></span>
                  <p>Leverage agile frameworks to provide a robust synopsis</p>
                </div>
                <p className="overview-para">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative 
                  approaches to corporate strategy foster collaborative thinking..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="business-container">
          <h6 className="text-center">4+ Bussiness growing with studyoda</h6>
          <div className="company-list">
            <img src={require('../Images/Group.png')} alt="oracle"></img>
            <img src={require('../Images/Group (3).png')} alt="oracle"></img>
            <img src={require('../Images/Group (2).png')} alt="oracle"></img>
            <img src={require('../Images/Group.png')} alt="oracle"></img>
            <img src={require('../Images/Group (3).png')} alt="oracle"></img>
          </div>
          <div className="business-card">
            <div className="row">
              <div className="col-lg-12">
                <div className="business-image">
                  <img src={require('../Images/Group 13015.png')} alt="business card"></img>
                  <div className="business-overlap">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Get our ideas now on mobile app</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="business-store">
                            <img src={require('../Images/Group 11796.png')} alt="apple12"></img>
                            <img src={require('../Images/Group 11797.png')} alt="apple12"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="testimonial about-testimonial">
        <div className="container">
          <div className="testimonial-body">
            <div className="testimonial-title search-content text-center">
              <h1>student testimonial</h1>
            </div>
            <div className="testimonial-carousal">
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">    
                  <div className="carousel-item active">
                    <div className='testimonial-slide'>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="slide-img">
                            <img src={require('../Images/Group 12976.png')} alt="carousal"></img>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="slide-para">
                            <h6>john deo</h6>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                              Iterative approaches to corporate strategy foster collaborative thinking..
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                                        
                  </div>
                  <div className="carousel-item active">
                    <div className='testimonial-slide'>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="slide-img">
                            <img src={require('../Images/Group 12976.png')} alt="carousal"></img>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="slide-para">
                            <h6>john deo</h6>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                              Iterative approaches to corporate strategy foster collaborative thinking..
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                                        
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default About