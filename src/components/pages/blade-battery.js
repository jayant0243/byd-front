import React, { useEffect, useState } from 'react';
import axios from "axios"
import dompurify from 'dompurify';
import configData from '../../config.json'

import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';

const Bladebattery = () => {
    const [cmscontents, setCmscontents] = useState([]);
	const [banner, setBanner] = useState([]);
	const [timeline, setTimeline] = useState([]);
    useEffect(() => {
        getBanner();
        getTimeline();
        getCmscontents();
    }, []);
    function getBanner() {
        axios.get(configData.API_URL+'getCmsData.php?sn=10').then(function(response) {
            setBanner(response.data);
        });
    }
    function getCmscontents() {
        axios.get(configData.API_URL+'getCmsData.php?sn=11').then(function(response) {
            setCmscontents(response.data);
        });
    }
    function getTimeline() {
        axios.get(configData.API_URL+'getCmsData.php?sn=12').then(function(response) {
            setTimeline(response.data);
        });
    }
  return (
    <>
    <Header />
    <section class="fluid bg-light-gray">
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Blade Battery</li>
            </ul>                        
            <div class="row mb-20 background-white" dangerouslySetInnerHTML={{__html: banner.full_description}}>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12" dangerouslySetInnerHTML={{__html: cmscontents.full_description}}>
                </div>
            </div>
        </div>
    </section>
	<section class="fluid pv-30">
        <div class="container">
            <div class="row" dangerouslySetInnerHTML={{__html: timeline.full_description}}>
			    
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
  
export default Bladebattery;