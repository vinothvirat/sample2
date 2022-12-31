import React from 'react';
import '../Css/Footer.css'
import {Link} from 'react-router-dom';
import { FaFacebookF,FaTiktok,FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>  
    <footer>
        <div className='container-fluid footer-container'>
            <div className='row'>
                <div className='col-lg-3 col-md-4'>
                    <div className='footer-media'>
                        <img src={require('../Images/Group 11859 (1).png')} alt="logo"></img>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                            Iterative approaches to corporate strategy foster collaborative thinking..</p>
                        <div className='icons'>
                            <FaFacebookF className='footer-icon'/>
                            <FaTiktok className='footer-icon'/>
                            <FaInstagram className='footer-icon'/>
                        </div>
                        
                    </div>
                </div>
                <div className='col-lg-9 col-md-8'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 col-lg-3'>
                            <div className='footer-menu'>
                                <h5>resources</h5>
                                <ul>
                                    <li>courses</li>
                                    <li>universities</li>
                                    <li>blogs</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-lg-5'>
                            <div className='footer-menu'>
                                <h5>study guid</h5>
                                <ul>
                                    <li>The German higher education system explained</li>
                                    <li> The German higher education system</li>
                                    <li>The German higher system explained</li>
                                    <li>The German higher education system explained... </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-lg-4'>
                            <div className='footer-menu tools'>
                                <h5>tools</h5>
                                <ul>
                                    <li><img src={require('../Images/calculator (1) 5.png')} alt="calculator"></img>German Grade Calculator</li>
                                    <li><img src={require('../Images/_x33_7.png')} alt="calculator"></img>ECTS Credits Calculator</li>
                                    <li><img src={require('../Images/Group 12828.png')} alt="calculator"></img>Course Comparison</li>
                                    <li><img src={require('../Images/Group 12877.png')} alt="calculator"></img>University Comparison</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-lg-3'>
                            <div className='footer-menu'>
                                <h5>studyoda</h5>
                                <ul>
                                    <li><Link className='link' to="/about">About Us</Link></li>
                                    <li>Career</li>
                                    <li>FAQ</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-lg-5'>
                            <div className='footer-menu'>
                                <h5>popular courses</h5>
                                <ul>
                                    <li>Business Management</li>
                                    <li>Engineering</li>
                                    <li>Humanities</li>
                                    <li>Maths and Computer Sciences </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-lg-4'>
                            <div className='footer-menu pstore'>
                                <h5>download studyoda</h5>
                                <img src={require('../Images/Group 12853.png')} alt="store"></img>
                                <img src={require('../Images/Group 12954.png')} alt="apple"></img>
                                
                            </div>
                        </div>
                       
                    </div>

                </div>
            </div>
        
        </div>
    </footer>
    <div className='container-fluid copyright'>
        <div className='row'>
            <div className='col-lg-12'>
                <div className='footer-copy'>
                    <div className='terms'>
                        <Link className='term-link'>erms and condition</Link>
                         <Link className='term-link'>Cookie Policy</Link>
                        <Link className='term-link'>Privacy Policy</Link>
                    </div>
                    <h6>2022 studyoda. all rights reserved</h6>
                    <span><strong className='clr-white'>23,069 </strong> courses in studyoda</span>
               </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer