import React from "react";
import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
const Support = () => {
  return (
    <>
    <Header />
    <section class="fluid">
            <div class="container">
			    <ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Support</li>
               </ul>
               <div class="row pv-30">
                    <div class="col-xs-12 col-sm-12 col-md-12 mb-40">
                        <h1 class="heading-3">Support</h1>
                        <p>Get your queries answered using any of our official communication channels.</p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 mb-20">
                        <a href="tel:+91 44 67191801" class="support-details">
                            <span><i class="icon-phone"></i></span>
                            <p class="mb-0">+91 - 44 - 67191801</p>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 mb-20">
                        <a href="mailto:" class="support-details">
                            <span><i class="icon-envelope"></i></span>
                            <p class="mb-0">bydautoindia@byd.com</p>
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 mb-20">
                        <div class="support-details">
                            <span><i class="icon-location-pin"></i></span>
                            <p class="mb-0">D2 &amp; D8, SIPCOT Industrial Park, Irungattukottai, TK, Sriperumbudur, Tamil Nadu 602105</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 pv-30">
                        <p class="heading-3">Write to us</p>
                        <p>Please share your contact and we will call you.</p>
                        <form class="contact-support" id="supportForm">
                            <div class="fieldset">
                                <input type="text" placeholder="Name" id="spt_name" />
                                <span class="red">Please enter Name</span>
                            </div>
                            <div class="fieldset">
                                <input type="text" placeholder="Contact No." id="spt_phone" />
                                <span class="red">Please enter Contact No.</span>
                                <span class="red">Please enter valide Contact No.</span>
                            </div>
                            <div class="fieldset">
                                <input type="email" placeholder="Email" id="spt_email" />
                                <span class="red">Please enter Email</span>
                            </div>
                            <div class="fieldset textareaWrapper">
                                <textarea rows="2" placeholder="Type your query here ..." id="spt_message"></textarea>
                                <span class="red">Please enter Message</span>
                            </div>
							<div id="sptInfo" class="text-center"></div>
                            <button class="load-more" type="submit" id="spt_submit">SEND</button>
							<div id="sptLoader"></div>
                        </form>
                    </div>
                </div>
			 </div>	
        </section>
        <section class="fluid stay-tuned-banner">
            <i class="icon-envelope"></i>
            <div class="container">
                <div class="row">
                   <Newsletter />
                </div>
            </div>
        </section>
    <Footer />
    </>
  );
};
export default Support;