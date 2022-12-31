import React from 'react'
import '../Css/Home.css';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingBag,FaLongArrowAltRight,FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';


const Home = () => {
  

  return (
    <>
    <div className='main-container'>
      <div className='banner'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-md-3'></div>
            <div className='col-lg-6 col-md-6'>
              <div className='banner-card'>
                <h1>Discover the university that suits your dream study in <span className='banner-italic'>Germany</span></h1>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.
                  Iterative approaches to corporate strategy foster collaborative thinking..</p>
                <form>
                  <div className="input-group">
                    <span className="input-group-text"><FaSearch/></span>
                    <input type="text" className="form-control" placeholder="Username"></input>
                  </div>
                </form>
              </div>
            </div>  
            <div className='col-lg-3 col-md-3'></div>
          </div>
          
        </div>
      </div>

      <div className='access-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='access-card'>
                <h6><span className='access-img'><FaShoppingBag/></span>easy to access</h6>
                <p>Our prices are lower than booking with University  directly</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='access-card'>
                <h6><span className='access-img clr-gre'><FaShoppingBag/></span>easy to access</h6>
                <p>Our prices are lower than booking with University  directly</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='access-card'>
                <h6><span className='access-img clr-org'><FaShoppingBag/></span>easy to access</h6>
                <p>Our prices are lower than booking with University  directly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='search-container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='search-content'>
                <h6>global search</h6>
                <h1>Best searching <br/>technology</h1>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                  Iterative approaches to corporate strategy foster collaborative thinking..</p>
                  <button className="btn search" type="submit">go to search <span className='mr-8'><FaLongArrowAltRight/></span></button> 
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='search-pic'>
                <img src={require('../Images/With out metpals 1.png')} alt="pic"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='tool-container'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
              <div className='tool-card'>
                <div className='tool-content'>
                  <h6>tool</h6>
                  <h1>German Grade Calculator </h1>
                  <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                    Iterative approaches to corporate strategy foster collaborative thinking..</p>
                  <div className='tool-pic'>
                    <img src={require('../Images/With out metpals 2.png')} alt="pic"></img>
                  </div>
                  <button className="btn search" type="submit">view more<span className='mr-8'><FaLongArrowAltRight/></span></button>
                </div>
              </div>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='search-container bg-lgreen'>
          <div className='row'>
          <div className='col-lg-6'>
              <div className='search-pic'>
                <img src={require('../Images/With out metpals 3.png')} alt="pic"></img>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='search-content'>
                <h6 className='search-title'>global search</h6>
                <h1>Best searching <br/>technology</h1>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                  Iterative approaches to corporate strategy foster collaborative thinking..</p>
                  <button className="btn search-btn" type="submit">go to search <span className='mr-8'><FaLongArrowAltRight/></span></button> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='note-container'>
        <div className='container note-custom'>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Notes</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Creates</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Status</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

              <div className="note-tab-section">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="note-card">
                      <div className="note-title">
                        <h6>Notes</h6>
                        <span><AiOutlinePlus/></span>
                      </div>
                      <div className="note-body">
                        <div className="note-count">
                          <span>Your Note <strong>03</strong></span>
                          <span className='note-menu'><BsThreeDots/></span>
                        </div>
                        <p>Credibly morph installed base sources whereas distinctive products.Credibly morph
                         installed base sources whereas distinctive products.Credibly morph installed 
                         Credibly morph installed base sources whereas distinctive products.Credibly morph
                          installed base sources whereas distinctive products.Credibly
                      </p>
                      </div>
                      <div className="text-center">
                        <button className="btn open-btn" type="submit">Open Note <span className='mr-8'><FaLongArrowAltRight/></span></button> 
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="note-description">
                      <h2>Studyoda Notes</h2>
                      <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                      <div className='note-mark'>
                        <p>Add a your new customized Note</p>
                        <p>Click Open Note button here open full note </p>
                        <p>Leverage agile frameworks to provide a robust synopsis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">vinoth</div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">kumar</div>
          </div>
        </div>
      </div>

      <div className="course-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className='course-content search-content'>
                <h5><span className='course-img'><FaGraduationCap/></span></h5>
                <h6>courses</h6>
                <h1>1000 + Courses on<br/> studyoda</h1>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                  Iterative approaches to corporate strategy foster collaborative thinking..</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className='course-img'>
                <img src={require('../Images/Ellipse 2888.png')} alt="course logo"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
            
      <div className="testimonial">
        <div className="container">
          <div className="testimonial-body">
            <div className="testimonial-title search-content text-center">
              <h6>testimonial</h6>
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

      <div className="explore-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="explore-image">
                <img src={require('../Images/Group 11771.png')} alt="star"></img>
              </div>
            </div>
            <div className="col-lg-8 text-center">
              <div className="explore-card">
                <h2>Where to study? </h2>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.
                   Iterative approaches to corporate strategy foster collaborative thinking.. 
                </p>
                <button className="btn" type="submit">Explore all universities</button> 
              </div>
            </div>
            <div className="col-lg-2">
              <div className="explore-image">
                <img src={require('../Images/Group 11770 (1).png')} alt="right star"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-container">
        <div className="container">
          <div className="guide-title tool-content">
            <h6>our blog</h6>
            <h1>Recent Study Guides </h1>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
              Iterative approaches to corporate strategy foster collaborative thinking..
            </p>
          </div>
          <div className="guide-slider">
            <div className="row">
              <div className="col-md-4">
                <div className="guide-card">
                  <div className="guide-image">
                    <img src={require('../Images/work-process-5082222-4251183.png')} alt="logo22"></img>
                  </div>
                  <div className="guide-body">
                    <h6>student</h6>
                    <p>Frameworks to provide a robust</p>
                    <div className="guide-date">
                      <span><FaCalendarAlt className='datepick'/> 20 january 2022</span>
                      <span><FaCalendarAlt/></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="guide-card">
                <div className="guide-image bg-ligreen">
                    <img src={require('../Images/initiative-5142757-4310263.png')} alt="logo22"></img>
                  </div>
                  <div className="guide-body">
                    <h6>student</h6>
                    <p>Frameworks to provide a robust</p>
                    <div className="guide-date">
                      <span><FaCalendarAlt className='datepick'/> 20 january 2022</span>
                      <span><FaCalendarAlt/></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="guide-card">
                <div className="guide-image bg-liblue">
                    <img src={require('../Images/online-study-analysis 1.png')} alt="logo22"></img>
                  </div>
                  <div className="guide-body">
                    <h6>student</h6>
                    <p>Frameworks to provide a robust</p>
                    <div className="guide-date">
                      <span><FaCalendarAlt className='datepick'/> 20 january 2022</span>
                      <span><FaCalendarAlt/></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mobileapp-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mobileapp-content">
                <h1>Get our ideas now on mobile app</h1>
                <p>Collaboratively e-enable orthogonal e-services after cutting-edge initiatives. Appropriately network</p>
                <div className="mobileapp-store">
                  <img src={require('../Images/Group 11796.png')} alt="store"></img>
                  <img src={require('../Images/Group 11797.png')} alt="apple store"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mobileapp-image text-center">
                <img src={require('../Images/Group 13022.png')} alt="mobile phone"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Home