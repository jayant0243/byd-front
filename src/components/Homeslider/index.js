import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from 'react-carousel-minimal';
import configData from '../../config.json'

const Homeslider = () => {
    const [cmscontents_1, setCmscontents_1] = useState([]);
    const [cmscontents_2, setCmscontents_2] = useState([]);
    const isMobile = window.innerWidth < 768;
    useEffect(() => {
        getCmscontents_1();
        getCmscontents_2();
    }, []);

    function getCmscontents_1() {
        axios.get(configData.API_URL + 'getHomeSlider.php').then(function (response) {
            const slides = [];
            if (response.data.length > 0) {
                response.data.map(item => {
                    slides.push({
                        image: isMobile ? `${configData.HOME_BANNER}/mobile/${item.image_url_mobile}` : `${configData.HOME_BANNER}${item.image_url}`,
                        caption: item.title.trim().length > 0 ? `<div class="term-text"><p>${item.disclaimer}</p></div>						
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="slide-title">${item.title}</p>
                                    <p class="slide-sub-title">${item.sub_title}</p>
                                    <p>
                                        ${item.button1.trim().length > 0 ? `<a class="slide-btn black-white" href="${item.button1_url}">${item.button1}<i class="icon-arrow-right"></i></a>
                                        <a class="slide-btn black-white" href="${item.button2_url}">${item.button2} <i class="icon-arrow-right"></i></a>` : ''}
                                    </p>
                                </div>
                            </div>
                        </div>` : '',
                    });
                });
            }
            setCmscontents_1(slides);
        });
    }
    function getCmscontents_2() {
        axios.get(configData.API_URL + 'getCmsData.php?sn=1').then(function (response) {
            setCmscontents_2(response.data.full_description);
        });
    }
    const data = [
        {
            image: './images/banner/1920x1080_1.jpg',
            caption: `<div class="term-text"><p>*The pictures are for representaion purpose only</p></div>						
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p class="slide-title">All-New e6</p>
                        <p class="slide-sub-title">India’s First Premium Electric MPV</p>
                        <p>
                            <a class="slide-btn black-white" href="test-drive">Test Drive <i class="icon-arrow-right"></i></a>
                            <a class="slide-btn black-white" href="all-new-e6">Explore More <i class="icon-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>`,
        },
        {
            image: './images/banner/1920x1080_2.jpg',
            caption: `<div class="term-text"><p>*The pictures are for representaion purpose only</p></div>						
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p class="slide-title">All-New e6</p>
                        <p class="slide-sub-title">India’s First Premium Electric MPV</p>
                        <p>
                            <a class="slide-btn black-white" href="test-drive">Test Drive <i class="icon-arrow-right"></i></a>
                            <a class="slide-btn black-white" href="all-new-e6">Explore More <i class="icon-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>`,
        }
    ];
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    };
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };
    return (
        <>
            <section className="fluid banner-bg">
                <div id="slides-shop" className="cover-slides">
                    {cmscontents_1.length && (
                        <Carousel
                            data={cmscontents_1}
                            time={5000}
                            width="100%"
                            height="auto"
                            captionStyle={captionStyle}
                            radius="10px"
                            slideNumber={false}
                            slideNumberStyle={slideNumberStyle}
                            captionPosition="top"
                            automatic={false}
                            dots={false}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                            thumbnails={false}
                            thumbnailWidth="100px"
                            showNavBtn={true}
                            style={{
                                textAlign: "center",
                                maxWidth: "100%",
                                maxHeight: "auto",
                                margin: "40px auto",
                            }}
                        />
                    )}
                </div>
            </section>
            <section className="fluid bg-earth" dangerouslySetInnerHTML={{ __html: cmscontents_2 }}>
            </section>
        </>
    )
}

export default Homeslider;