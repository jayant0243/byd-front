import React, { useEffect, useState } from 'react';
import axios from "axios"
import dompurify from 'dompurify';
import configData from '../../config.json'

import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
const Careers = () => {
    const [dataset, setDataSet] = useState([]);
    const [cmscontents, setCmscontents] = useState([]);
    useEffect(() => {
        getCmscontents();
        getDataSet();
    }, []);

    function getCmscontents() {
        axios.get(configData.API_URL+'getCmsData.php?sn=24').then(function(response) {
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
        axios.get(configData.API_URL+'getCareersData.php').then(function(response) {
            setDataSet(response.data);
            window.checkAccordElement();
        });
    }	
  return (
    <>
    <Header />
    <section class="fluid bg-light-gray-1">
            <div class="container">
			   <ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Careers</li>
               </ul>
               <div class="row pv-30 working-with-byd" dangerouslySetInnerHTML={{__html: cmscontents.full_description}}>
                </div>
                <div class="row divider"></div>
                <div class="row background-white pt-20 pb-20 mb-20 align-items-center">
                    <img src="./images/career/official_Sponsor.jpg" alt="careerpage" class="img-fluid" />
                    <div class="col-xs-12 col-sm-12 col-md-12 pt-20 text-center">
                        <h2 class="heading-2">What we're looking for</h2>
                    </div>
                       <ul class="accordian-wrapper jobs-list">

                       {dataset.map((data, Index) =>
                             <li>
                             <a href="#" class="accord-toggler" data-index={Index+1}>                        
                               <div>
                                  <p class="title">{data.name} <span>{data.division}</span></p>
                                  <p>{data.address}</p>
                                </div>
                                   <span class="Job">View Job</span><i class="icon-arrow-down"></i>
                               </a>
                                 <div class="accord-body" data-index={Index+1}>
                                     
                                 <div class="row">
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-2">
                                        <p class="text-end"><strong>Roles & Responsibilities:</strong></p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-10">
                                        <div dangerouslySetInnerHTML={{__html:data.full_description}}/>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-2">
                                        <p class="text-end"><strong>Salary:</strong></p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-10">
                                        <p class="text-justify">{data.salary}</p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-2">
                                        <p class="text-end"><strong>Experience:</strong></p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-10">
                                        <p>{data.experience}</p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-2">
                                        <p class="text-end"><strong>Industry Preferred:</strong></p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-10">
                                        <p>{data.industry_preferred}</p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-2">
                                        <p class="text-end"><strong>Qualification:</strong></p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-10">
                                        <p>{data.qualification}</p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-2">
                                        <p class="text-end"><strong>Competencies:</strong></p>
                                   </div>
                                   <div class="col-12 col-xs-12 col-sm-12 col-md-10">
                                        <p>{data.competencies}</p>
                                   </div>
                                 </div>	
                                 </div>
                               </li>
                        )}
                        </ul>
                        <div class="col-xs-12">
                        <p>Mail us your CV at bydautoindia@byd.com and be sure to mention your preferred role and job location.</p>
                        <p><strong>Disclaimer:</strong><br/>At BYD INDIA our hiring process is based solely on merit. At no point in our recruitment process do we request candidates for monetary benefits from their end. Please beware of external fraudsters.</p>
					  <div>
                </div>
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
  
export default Careers;