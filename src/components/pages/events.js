import React, { useEffect, useState } from 'react';
import axios from "axios";
import Slider from "react-slick";
import dompurify from 'dompurify';
import configData from '../../config.json'

import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
const Events = () => {
	const [dataset, setDataSet] = useState([]);
    const [cmscontents, setCmscontents] = useState([]);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(() => {
        getCmscontents();
        getDataSet();
    }, []);

    function getCmscontents() {
        axios.get(configData.API_URL+'getCmsData.php?sn=27').then(function(response) {
            setCmscontents(response.data);
            const head = document.getElementsByTagName('body');
            const head_script = document.querySelector('.body_script');
            if(!head_script){
                var divTag = document.createElement("div");
                divTag.className = 'body_script';
                if(response.data.tracking_code_body){
                    divTag.innerHTML = response.data.tracking_code_body;
                    head[0].appendChild(divTag);
                }
            }
        });
    }
    function getDataSet() {
        axios.get(configData.API_URL+'getEventsData.php').then(function(response) {
            setDataSet(response.data);
        });
    }
	
  return (
    <>
    <Header />
    <section class="fluid">
            <div class="container">
			<ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Events</li>
            </ul>
                <div class="row mb-20 background-white">
                    <div class="layout-2">
                        <div class="news-list-thumb" dangerouslySetInnerHTML={{__html:cmscontents.full_description}}>
                                
                        </div>
                    </div>
                </div>
                <div class="row pv-30">
                    <div class="col-xs-12 col-sm-12 col-md-5">
                        <h2 class="mb-0 pdt-5 heading-2">Current Events</h2>
                    </div>
                </div>
                <div class="row">
				{dataset.map((data, Index)=> {
                    if(data.media_all.length === 0) return null;
                    return (<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 event-list pb-20 text-center" keys={`slider_${Index}`}>
                        <div class="carousel-multiple-items-6">
                            <Slider {...settings}>
                                {data.media_all.map((media, mIndex)=> 
                                    <div>
                                        <div class="box">
                                            <div class="box-image">
                                                <img src={`${configData.EVENT_THUMB}${media[0]}`} class="img-fluid"/>
                                            </div>
                                            <span class="f14l14"><strong>{data.title}</strong></span><br/>
                                            <span class="f14l14"><strong>{data.events_date}</strong></span>
                                        </div>
                                    </div>
                                )}
                            </Slider>
						   {/* {data.media_all.map((media, mIndex)=> 
                            <div>
                                <div class="box">
                                    <div class="box-image">
                                        <img src="./images/events/rajapushpahyd2.jpg" class="img-fluid"/>
                                    </div>
                                    <span class="f14l14"><strong>{data.title}</strong></span><br/>
                                    <span class="f14l14"><strong>{data.events_date}</strong></span>
                                </div>
                            </div>
						   )} */}
                        </div>
                    </div>)
                })}
                </div>
                <div class="row pvb-30">
                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                        <button type="button" class="load-more">show more</button>
                    </div>
                </div>
            </div>
        </section>
        <div class="popup-wrapper">
            <div class="popup-body">
                <button class="close-popup">
                    <i class="icon-close"></i>
                </button>
                <img src="" class="img-fluid img-preview" />
            </div>
        </div>
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
export default Events;