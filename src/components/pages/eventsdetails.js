import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import dompurify from 'dompurify';
import configData from '../../config.json'

import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
const Eventsdetails = () => {
    const { newsurl } = useParams();
    const [cmscontents, setCmscontents] = useState([]);
    useEffect(() => {
        getCmscontents();
    }, []);

    function getCmscontents() {
        axios.get(configData.API_URL+'getNewsData.php?nurl='+newsurl).then(function(response) {
            setCmscontents(response.data);
        });
    }
    
	
  return (
    <>
    <Header />
    <section class="fluid">
            <div class="container">
			<ul class="breadcrumb">
                <li><a href={configData.HOME_LINK}>Home</a></li>
                <li>Events</li>
            </ul>
            <div class="row pvb-30">
                    <div class="col-xs-12 col-sm-12 col-md-12 news-detail pv-30" dangerouslySetInnerHTML={{__html:cmscontents}}>
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
export default Eventsdetails;