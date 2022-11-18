import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import dompurify from 'dompurify';
import configData from '../../config.json'

import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
const Newsdetails = () => {
    const { newsurl } = useParams();
    const [cmscontents, setCmscontents] = useState([]);
    useEffect(() => {
        getCmscontents();
    }, []);

    function getCmscontents() {
        axios.get(configData.API_URL+'getSingleNewsData.php?nurl='+newsurl).then(function(response) {
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
    

  return (
    <>
    <Header />
    <section class="fluid">
            <div class="container">
			<ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="/news">News</a></li>
                <li>{newsurl.replaceAll('_', ' ').substring(0, 20)}...</li>
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
export default Newsdetails;