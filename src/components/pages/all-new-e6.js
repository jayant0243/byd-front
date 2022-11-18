import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Helmet} from "react-helmet";
import Slider from "react-slick";
import dompurify from 'dompurify';
import configData from '../../config.json'

import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
const Allnewse6 = () => {
	const [cmscontents_Main, setCmscontents_Main] = useState([]);
	const [cmscontents_1, setCmscontents_1] = useState([]);
	const [exteriorCarousal, setExteriorCarousal] = useState([]);
	const [interiorCarousal, setInteriorCarousal] = useState([]);
	const [exteriorCarousalTitle, setExteriorCarousalTitle] = useState([]);
	const [interiorCarousalTitle, setInteriorCarousalTitle] = useState([]);
	const [cmscontents_2, setCmscontents_2] = useState([]);
	const [cmscontents_3, setCmscontents_3] = useState([]);
	const [cmscontents_4, setCmscontents_4] = useState([]);
	const [cmscontents_5, setCmscontents_5] = useState([]);
	const [cmscontents_6, setCmscontents_6] = useState([]);
	const [cmscontents_7, setCmscontents_7] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
	
	 useEffect(() => {
        getCmscontents_Main();
        getExteriorCarousal();
        getInteriorCarousal();
        getCmscontents_1();
		getCmscontents_2();
		getCmscontents_3();
		getCmscontents_4();
		getCmscontents_5();
		getCmscontents_6();
		getCmscontents_7();
    }, []);
	
	function getCmscontents_Main() {
        axios.get(configData.API_URL+'getCmsData.php?sn=2').then(function(response) {
            const head = document.getElementsByTagName('body');
            const head_script = document.querySelector('.body_script');
            if(!head_script){
                var divTag = document.createElement("div");
                divTag.className = 'body_script';
                divTag.innerHTML = response.data.tracking_code_body;
                head[0].appendChild(divTag);
            }
            setCmscontents_Main(response.data);
        });
    }
	function getExteriorCarousal() {
        axios.get(configData.API_URL+'getAllNewEsixCarousal.php?type=Exterior').then(function(response) {
            setExteriorCarousalTitle(response.data[0].title.split(','));
            setExteriorCarousal(response.data);
        });
    }
	function getInteriorCarousal() {
        axios.get(configData.API_URL+'getAllNewEsixCarousal.php?type=Interior').then(function(response) {
            setInteriorCarousalTitle(response.data[0].title.split(','));
            setInteriorCarousal(response.data);
        });
    }
	function getCmscontents_1() {
        axios.get(configData.API_URL+'getCmsData.php?sn=3').then(function(response) {
            setCmscontents_1(response.data.full_description);
        });
    }
    function getCmscontents_2() {
        axios.get(configData.API_URL+'getCmsData.php?sn=4').then(function(response) {
            setCmscontents_2(response.data.full_description);
        });
    }
    function getCmscontents_3() {
        axios.get(configData.API_URL+'getCmsData.php?sn=5').then(function(response) {
            setCmscontents_3(response.data.full_description);
        });
    }
    function getCmscontents_4() {
        axios.get(configData.API_URL+'getCmsData.php?sn=6').then(function(response) {
            setCmscontents_4(response.data.full_description);
            window.checkAccordElement();
        });
    }
	
	function getCmscontents_5() {
        axios.get(configData.API_URL+'getCmsData.php?sn=7').then(function(response) {
            setCmscontents_5(response.data.full_description);
        });
    }
	function getCmscontents_6() {
        axios.get(configData.API_URL+'getCmsData.php?sn=8').then(function(response) {
            setCmscontents_6(response.data.full_description);
        });
    }
	function getCmscontents_7() {
        axios.get(configData.API_URL+'getCmsData.php?sn=9').then(function(response) {
            setCmscontents_7(response.data.full_description);
        });
    }
	
  return (
    <>
    <Header />
    <section class="fluid bg-light-gray all-new-e6-content">
            <div class="container">
                <ul class="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li>All New e6</li>
                </ul>
                <div class="row mb-20 background-white" dangerouslySetInnerHTML={{__html: cmscontents_Main.full_description}}>
                </div>
				<div class="row mb-20 background-white pt-20 pb-20 align-items-center" dangerouslySetInnerHTML={{__html: cmscontents_1}}>
                </div>

                <div class="row mb-20 allnewe6 align-items-center background-white relative">
                    <div class="col-xs-12 col-sm-12 col-md-12 text-center background-white pt-20">
                        <span id="exterior"></span>
                        <p class="heading-3">Exterior</p>						
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 background-white pb-20 text-center" data-eventtype="1">
                        {exteriorCarousal.length > 0 && (<Slider {...settings}>
                            {exteriorCarousal[0].media_all.map((media, mIndex)=> 
                                <div>
                                    <div class="box">
                                        <div class="box-image">
                                            <img src={`${configData.EVENT_THUMB}${media[0]}`} class="img-fluid"/>
                                        </div>
                                        <span class="f14l14"><strong>{exteriorCarousalTitle[mIndex] || ''}</strong></span>
                                    </div>
                                </div>
                            )}
                        </Slider>)}
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 background-white pb-20" dangerouslySetInnerHTML={{__html: cmscontents_2}}>
                    </div>
                </div>

                <div class="row pt-20 mb-20 background-white pb-20 align-items-center relative">
                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                        <span id="interior"></span>
                        <p class="heading-3">Interior</p>
                    </div>
                    <div class="col-12 col-sm-12">
                        <div class="row mobile-align">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 background-white" dangerouslySetInnerHTML={{__html: cmscontents_3}}>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center background-white">
                            {interiorCarousal.length > 0 && (<Slider {...settings}>
                                {interiorCarousal[0].media_all.map((media, mIndex)=> 
                                    <div>
                                        <div class="box">
                                            <div class="box-image">
                                                <img src={`${configData.EVENT_THUMB}${media[0]}`} class="img-fluid"/>
                                            </div>
                                            <span class="f14l14"><strong>{interiorCarousalTitle[mIndex] || ''}</strong></span>
                                        </div>
                                    </div>
                                )}
                            </Slider>)}
                            </div>
                        </div>
                    </div>
                </div>
				<div class="row background-white pt-20 mb-20 pb-20 align-items-center relative" id="comfort" dangerouslySetInnerHTML={{__html: cmscontents_4}}>   
                </div>
               <div class="row background-white pt-20 mb-20 pb-20 align-items-center relative" dangerouslySetInnerHTML={{__html: cmscontents_5}}> 
				</div>
				<div class="row background-white pt-20 pb-20 mb-20 align-items-center" dangerouslySetInnerHTML={{__html: cmscontents_6}}>
                </div>
				<div class="row background-white pt-20 pb-20 mb-20 align-items-center" dangerouslySetInnerHTML={{__html: cmscontents_7}}>
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
        {/* <Helmet>
            <div dangerouslySetInnerHTML={{__html: cmscontents_Main.tracking_code}}></div>
        </Helmet> */}
    </>
  );
};
  
export default Allnewse6;