import React, { useEffect, useState } from 'react';
import axios from "axios"
import dompurify from 'dompurify';
import configData from '../../config.json'

import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
const News = () => {
	const [dataset, setDataSet] = useState([]);
	const [featureNews, setFeatureNews] = useState([]);
    const [cmscontents, setCmscontents] = useState([]);
    const [inputDisable, setInputDisable] = useState(false);
    useEffect(() => {
        getCmscontents();
        getDataSet();
    }, []);

    function getCmscontents() {
        axios.get(configData.API_URL+'getCmsData.php?sn=23').then(function(response) {
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
        axios.get(configData.API_URL+'getNewsData.php').then(function(response) {
            const feature = [];
            const nonfeature = [];
            response.data.map(item => {
                if(item.article_type.toLowerCase() === 'yes' && feature.length < 2){
                    feature.push(item);
                }else{
                    nonfeature.push(item);
                }
            });
            setDataSet(nonfeature);
            setFeatureNews(feature);
        });
    }	
    const onChangeSearch = (e) => {
        console.log(e.target.value);
        if(e.target.value.length > 0){
            setInputDisable(true);
        }else{
            setInputDisable(false);
        }
        if(e.target.value.length >= 3){
            axios.get(configData.API_URL+'getNewsData.php?newskey='+e.target.value).then(function(response) {
                setDataSet(response.data);
            });
        }
    }
	
  return (
    <>
    <Header />
    <section class="fluid bg-light-gray-1">
            <div class="container">
			   <ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>News</li>
               </ul>
                <div class="row pv-30">
                    <div class="col-xs-12 col-sm-12 col-md-5">
                        <h2 class="mb-0 pdt-5 heading-2">Latest News</h2>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-7">
                        <form class="news-search-form" id="newsForm">
                            <div class="fieldset">
                                <input type="text" name="newskey" placeholder="Search" onChange={onChangeSearch}/>
                                <i class="icon-magnifier" id="newsSearchBtn"></i>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row pvb-30">
                    <div class="col-xs-12 col-sm-12 col-md-12" id="newsData">
                        {!inputDisable && (<div class="row mb-30 news-list-wrapper">
                            {featureNews.map((data, Index)=>
                                (<div class="col-xs-12 col-sm-12 col-md-6">
                                    <a href={`./news/${data.url}`} class="custom-news-list-overlap" target="_blank">
                                        <div class="img-wrapper">
                                            <img src={configData.NEWS_IMAGE+data.image_url} class="img-fluid" />
                                        </div>
                                        <div class="custom-news-list-overlap-body">
                                            <p class="news-list-title heading-3">{data.title}</p>
                                            <p class="news-list-date">{data.year}</p>
                                        </div>
                                    </a>
                                </div>)
                            )}
                        </div>)}
                        <div class="row news-list-wrapper">
						{dataset.map((data, Index)=>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 mb-30">
                                <a href={`./news/${data.url}`} class="custom-news-list"  target="_blank">
                                    <div class="img-wrapper">
                                        <img src={configData.NEWS_IMAGE+data.image_url} class="img-fluid" />
                                    </div>
                                    <div class="custom-news-list-body">
                                        <p class="news-list-title heading-3">{data.title}</p>
                                        <p class="news-list-date">{data.year}</p>
                                    </div>
                                </a>
                            </div>
						)}   
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
  
export default News;