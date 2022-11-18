import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import axios from "axios";
import configData from '../../config.json'
import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';

const Thankyou = () => {
    const [cmscontents_2, setCmscontents_2] = useState([]);
    useEffect(() => {
		getCmscontents_2();
    }, []);

    function getCmscontents_2() {
        axios.get(configData.API_URL+'getCmsData.php?sn=28').then(function(response) {
            setCmscontents_2(response.data.full_description);
        });
    }
  return (
   <>
   <Header />
   <section class="fluid test-drive-banner">
        <div class="container">
            <ul class="breadcrumb">
            <li><a href="/">Home</a></li>
            <li>Thank You</li>
        </ul>
            <div class="row mb-20 test-drive-form-wrapper" dangerouslySetInnerHTML={{__html: cmscontents_2}}>
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
  
export default Thankyou;