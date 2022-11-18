import React, { useEffect, useState } from 'react';
import axios from "axios"
import {Helmet} from "react-helmet";
import dompurify from 'dompurify';
import configData from '../../config.json'

import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
const About = () => {
	const [videoData, setVideoData] = useState([]);
	const [aboutBanner, setAboutBanner] = useState([]);
	const [cmscontents_1, setCmscontents_1] = useState([]);
	const [cmscontents_2, setCmscontents_2] = useState([]);
	const [cmscontents_3, setCmscontents_3] = useState([]);
	const [cmscontents_4, setCmscontents_4] = useState([]);
	const [cmscontents_5, setCmscontents_5] = useState([]);
	const [cmscontents_6, setCmscontents_6] = useState([]);
	const [cmscontents_7, setCmscontents_7] = useState([]);
	const [cmscontents_8, setCmscontents_8] = useState([]);
	const [cmscontents_9, setCmscontents_9] = useState([]);
    useEffect(() => {
        getCmscontents_Video();
        about_banner();
        getCmscontents_1();
		getCmscontents_2();
		getCmscontents_3();
		getCmscontents_4();
		getCmscontents_5();
		getCmscontents_6();
		getCmscontents_7();
		getCmscontents_8();
		getCmscontents_9();
    }, []);
    function getCmscontents_Video() {
        axios.get(configData.API_URL+'getCmsData.php?sn=13').then(function(response) {
            const head = document.getElementsByTagName('body');
            const head_script = document.querySelector('.body_script');
            if(!head_script){
                var divTag = document.createElement("div");
                divTag.className = 'body_script';
                divTag.innerHTML = response.data.tracking_code_body;
                head[0].appendChild(divTag);
            }
            setVideoData(response.data);
        });
    }
    function about_banner() {
        axios.get(configData.API_URL+'getAllNewEsixCarousal.php?type=About_Byd').then(function(response) {
            console.log(response.data[0].media_all);
            setAboutBanner(response.data[0].media_all);
        });
    }
    function getCmscontents_1() {
        axios.get(configData.API_URL+'getCmsData.php?sn=14').then(function(response) {
            setCmscontents_1(response.data);
        });
    }
    function getCmscontents_2() {
        axios.get(configData.API_URL+'getCmsData.php?sn=15').then(function(response) {
            setCmscontents_2(response.data);
        });
    }
    function getCmscontents_3() {
        axios.get(configData.API_URL+'getCmsData.php?sn=16').then(function(response) {
            setCmscontents_3(response.data);
        });
    }
    function getCmscontents_4() {
        axios.get(configData.API_URL+'getCmsData.php?sn=17').then(function(response) {
            setCmscontents_4(response.data);
        });
    }
    function getCmscontents_5() {
        axios.get(configData.API_URL+'getCmsData.php?sn=18').then(function(response) {
            setCmscontents_5(response.data);
        });
    }
    function getCmscontents_6() {
        axios.get(configData.API_URL+'getCmsData.php?sn=19').then(function(response) {
            setCmscontents_6(response.data);
        });
    }
    function getCmscontents_7() {
        axios.get(configData.API_URL+'getCmsData.php?sn=20').then(function(response) {
            setCmscontents_7(response.data);
        });
    }
    function getCmscontents_8() {
        axios.get(configData.API_URL+'getCmsData.php?sn=21').then(function(response) {
            setCmscontents_8(response.data);
        });
    }
    function getCmscontents_9() {
        axios.get(configData.API_URL+'getCmsData.php?sn=22').then(function(response) {
            setCmscontents_9(response.data);
        });
    }
	
  return (
    <>
	<Header />
	  <div class="container">
            <div class="row">
                <ul class="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li>About BYD</li>
                </ul>
                </div>
        </div>
      <section class="fluid" dangerouslySetInnerHTML={{__html: videoData.full_description}}>
      </section>
        {(aboutBanner.length > 0) && (<>
        {console.log(aboutBanner[0][0])}
        <section class="fluid about-sections about-section-1 about-ht" style={{backgroundImage: configData.EVENT_THUMB+''+aboutBanner[0][0]}}>
		    <div class="container">
                <div class="row pt-40 justify-content-center relative" dangerouslySetInnerHTML={{__html: cmscontents_1.full_description}}></div>
		    </div>		
        </section>
        <section class="fluid about-sections about-section-2 about-ht" style={{backgroundImage: `${configData.EVENT_THUMB}${aboutBanner[1][0]}`}}>
		    <div class="container">
                <div class="row pt-40 align-items-center relative" dangerouslySetInnerHTML={{__html: cmscontents_2.full_description}}></div>
		    </div>		
        </section>
        <section class="fluid about-sections about-section-3 about-ht" style={{backgroundImage: `${configData.EVENT_THUMB}${aboutBanner[2][0]}`}}>
		    <div class="container">
                <div class="row pt-40 justify-content-center relative" dangerouslySetInnerHTML={{__html: cmscontents_3.full_description}}></div>
		    </div>		
        </section>
       <section class="fluid about-sections about-section-4 about-ht" style={{backgroundImage: `${configData.EVENT_THUMB}${aboutBanner[3][0]}`}}>
		    <div class="container">
                <div class="row pt-40 justify-content-center relative" dangerouslySetInnerHTML={{__html: cmscontents_4.full_description}}></div>
		   </div>		
        </section>
        <section class="fluid about-sections about-section-5 about-ht" style={{backgroundImage: `${configData.EVENT_THUMB}${aboutBanner[4][0]}`}}>
		    <div class="container">
                <div class="row pt-40 justify-content-center relative" dangerouslySetInnerHTML={{__html: cmscontents_5.full_description}}></div>
		    </div>		
        </section>
        <section class="fluid about-sections about-section-6 about-ht" style={{backgroundImage: `${configData.EVENT_THUMB}${aboutBanner[5][0]}`}}>
		    <div class="container">
                <div class="row pt-40 justify-content-center relative" dangerouslySetInnerHTML={{__html: cmscontents_6.full_description}}></div>
		   </div>		
        </section>
        <section class="fluid about-sections about-section-7 about-ht" style={{backgroundImage: `${configData.EVENT_THUMB}${aboutBanner[6][0]}`}}>
		    <div class="container">
                <div class="row pt-40 justify-content-center relative" dangerouslySetInnerHTML={{__html: cmscontents_7.full_description}}></div>
		    </div>		
        </section>
        <section class="fluid about-sections about-section-8 about-ht" style={{backgroundImage: `${configData.EVENT_THUMB}${aboutBanner[7][0]}`}}>
		    <div class="container">
                <div class="row pt-40 justify-content-center relative" dangerouslySetInnerHTML={{__html: cmscontents_8.full_description}}></div>
		    </div>		
        </section>
        <section class="fluid about-sections about-section-9 mb-20 about-ht" style={{backgroundImage: `${configData.EVENT_THUMB}${aboutBanner[8][0]}`}}>
		    <div class="container">
                <div class="row pt-40 justify-content-center relative" dangerouslySetInnerHTML={{__html: cmscontents_9.full_description}}></div>
		    </div>		
        </section>
        </>)}
        <section class="fluid stay-tuned-banner">
            <i class="icon-envelope"></i>
            <div class="container">
                <div class="row">
                   <Newsletter />
                </div>
            </div>
        </section>
    <Footer />
    {(videoData.meta_description !== undefined) && (<Helmet>
        <meta name="title" content={videoData.meta_title}/>
        <meta name="description" content={videoData.meta_description}/>
        <meta name="keyword" content={videoData.meta_keywords}/>
    </Helmet>)}
  </>
  );
};
export default About;