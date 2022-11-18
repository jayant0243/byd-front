import React, { useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import axios from "axios";
import configData from '../../config.json';
const Footer = ()=>{
    const [searchData, setSearchData] = useState([]);
    const path = window.location.pathname.includes('/news/') ? '../' : './';
    useEffect(() => {
        getSearchContents();
    }, []);
    function getSearchContents() {
        axios.get(configData.API_URL+'searchdata.php').then(function(response) {
            setSearchData(response.data);
        });
    }
  return(
    <>
       <footer class="fluid">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 col-sm-12">
                        <div class="footer-link">
                            <ul>
                                <li>
                                    <a href={`${path}privacy-policy`}>Privacy &amp; legal</a>
                                </li>
                                <li>
                                    <a href={`${path}support`}>Support</a>
                                </li>
                                <li>
                                    <a href={`${path}careers`}>Careers</a>
                                </li>
                                <li>
                                    <a href={`${path}news`}>News</a>
                                </li>
                                <li>
                                    <a href={`${path}events`}>Events</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12">
                        <div class="footer-social-link">
                            <ul>
                                <li>
                                    <span>Follow Us</span>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/byd.india/" target="_blank"><i class="icon-social-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/bydautoind" target="_blank"><i class="icon-social-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/byd-southasia/" target="_blank"><i class="icon-social-linkedin" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCEj2PMGOjP0u4dxXJzlfUig" target="_blank"><i class="icon-social-youtube" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="footer-copyright">
            <p class="footer-company">All Rights Reserved. &copy; 2022 <a href="https://bydautoindia.com">BYD</a><br /><a href={`${path}terms-conditions`}>Terms & Conditions</a></p>
        </div>
        <div class="popup-wrapper">
            <div class="popup-body">
                <p class="heading-4">Privacy & Cookie Policy</p>
                <div class="scrollbar" id="style-4">
                    <div class="force-overflow">
                        <div class="popup-innerbody">
                            <p style={{fontSize: '12px'}}>This <a href="privacy-policy.php">Privacy Policy</a> is an electronic record in the form of an electronic contract. This privacy policy does not require any physical, electronic or digital signature.<br/>This privacy policy is a legally binding document between you and byd india pvt. Ltd.  (“BYD / WE / US”) in electronic form, by clicking on the "I ACCEPT" tab or by use or the website or by other means) and will govern the relationship between you and byd for your use of the website.<br/>Please read this privacy policy carefully. By using the website, you indicate that you understand, agree and consent to this privacy policy. If you do not agree with the terms of this privacy policy, please do not use this website.<br/>This Privacy Policy may be amended / updated from time to time. We suggest that you regularly check this Privacy Policy to apprise yourself of any updates. Your continued use of the Website or provision of data or information thereafter will imply Your unconditional acceptance of such updates to this Privacy Policy.</p>
                        </div>
                    </div>
                </div>
                <button type="button" class="load-more terms-accept" style={{fontSize: '12px'}}>
                    I Accept
                </button>
            </div>
        </div>
        <div class="detailed-menu ">
            <div class="virtual-toure">
                <i class="icon-close close-virtual-toure"></i>
                <iframe src="https://byd.acktec.sg/tutorial/verge3d/BYD_e6/BYD_e6_index" class="virtual-toure-frame"></iframe>
            </div>
            <div class="search-wrapper">
                <i class="icon-close close-search-wrapper"></i>
                <div class="popup">
                    <p class="search-title">What are you looking for?</p>
                  <div class="input-group search-input-wrapper">
                      <i class="icon-magnifier"></i>
                      <input type="text" class="form-control" id="searchKey" placeholder="Search" onChange={getSearchContents}/>
                  </div>
                  <ul class="search-list" id="search-list" dangerouslySetInnerHTML={{__html: searchData}}>
                  </ul>
                </div>
            </div>
            <div class="contact-wrapper">
                <i class="icon-close close-contact-wrapper"></i>
                <div class="popup">
                    <p class="search-title">Contact Us</p>
                    <form class="contact-form" id="ftr_contactForm">
                        <div class="fieldset">
                            <input type="text" placeholder="Name" id="ftr_name" />
                            <span class="red">Please enter Name</span>
                        </div>
                        <div class="fieldset">
                            <input type="tel" placeholder="Contact No." id="ftr_phone"  />
                            <span class="red">Please enter Contact No.</span>
                            <span class="red">Please enter valide Contact No.</span>
                        </div>
                        <div class="fieldset">
                            <input type="email" placeholder="Email" id="ftr_email"  />
                            <span class="red">Please enter Email</span>
                        </div>
                        <div class="fieldset">
                            <div class="custom-drop-down inverted query-dropdown">
                                <span>Select query type</span>
                                <i class="icon-arrow-down"></i>
                                <ul>
                                    <li data-index="1">Sales Query</li>
                                    <li data-index="2">Custom Query</li>
                                </ul>
                            </div>
                            <span class="red">Please select Query Type</span>
                        </div>
                        <div class="fieldset">
                            <textarea rows="4" placeholder="Type your query here ..." id="ftr_message" ></textarea>
                            <span class="red">Please enter Query</span>
                        </div>
						<div id="ftrInfo" class="text-center"></div>
                        <button type="submit" id="ftr_submit" value="SEND">SEND</button>
						<div id="ftrLoader"></div>
                    </form>
                </div>
            </div>
            <div class="test-drive-wrapper">
                <i class="icon-close close-test-drive-wrapper"></i>
                <div class="popup">
                    <p class="search-title">Test Drive</p>
                    <form class="contact-form">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Contact No."/>
                        <input type="text" placeholder="Email"/>
                        <button type="button">SEND</button>
                    </form>
                </div>
            </div>
            <div class="menu-dropdown-wrapper">
                <i class="icon-close close-menu-wrapper"></i>
                <nav class="dropdown-link">
                    <ul>
                        <li className="sub-nav-toggler">
                            <a href="">Models</a>
                            <ul className="sub-nav">
                                <li>
                                    <a href={`${path}byd-atto3`}>BYD-ATTO 3</a>
                                </li>
                                <li>
                                    <a href={`${path}all-new-e6`}>All New e6</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href={`${path}blade-battery`}>Blade Battery</a>
                        </li>
                        <li class="sub-nav-toggler">
                            <a href={`${path}about_byd`}>About BYD</a>
                            <ul class="sub-nav">
                                <li>
                                    <a href={`${path}about_byd?#bydintro`}>BYD Intro</a>
                                </li>
                                <li class="sub-nav-inner-toggler">
                                    <span>Global Corporate</span>
                                    <ul class="sub-nav-inner">
                                        <li>
                                            <a href={`${path}about_byd?#globalization`}>Globalization</a>
                                        </li>
                                        <li>
                                            <a href={`${path}about_byd?#diversification`}>Diversification</a>
                                        </li>
                                        <li>
                                            <a href={`${path}about_byd?#marketperformance`}>Market Performance</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="sub-nav-inner-toggler">
                                    <span>Technology-Oriented</span>
                                    <ul class="sub-nav-inner">
                                        <li>
                                            <a href={`${path}about_byd?#auto`}>Auto</a>
                                        </li>
                                        <li>
                                            <a href={`${path}about_byd?#eplatform`}>ePlatform 3.0</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="sub-nav-inner-toggler">
                                    <span>Green Future</span>
                                    <ul class="sub-nav-inner">
                                        <li>
                                            <a href={`${path}about_byd?#cooltheearth`}>Cool the Earth by 1&deg;C</a>
                                        </li>
                                        <li>
                                            <a href={`${path}about_byd?#pollutioncontrol`}>Pollution Control</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="sub-nav-inner-toggler">
                                    <span>Corporate Presence</span>
                                    <ul class="sub-nav-inner">
                                        <li>
                                            <a href={`${path}about_byd?#csr`}>CSR</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href={`${path}news`}>News</a>
                        </li>
                        <li>
                            <a href={`${path}events`}>Events</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <Helmet>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="./script/main.js"></script>
	<script src="./script/app.js"></script>
    </Helmet>
    </>
  )
}
export default Footer;