import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
import configData from '../../config.json';

const NewModel = () => {
    const [carColor, setCarColor] = useState(0);
    const [cmscontents, setCmscontents] = useState([]);
    function getCmscontents() {
        axios.get(configData.API_URL+'getCmsData.php?sn=33').then(function(response) {
            setCmscontents(response.data.full_description);
            window.checkAccordElement();
        });
    }
    useEffect(() => {
        getCmscontents();
    }, []);
    const carColorsImg = [
        './images/newmodel/car-colors/blue-car.png',
        './images/newmodel/car-colors/grey-car.png',
        './images/newmodel/car-colors/red-car.png',
        './images/newmodel/car-colors/white-car.png'
    ];
    const isMobile = window.innerWidth < 768;
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };
    const settingsMultipleSlides = {
        dots: false,
        infinite: true,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        speed: 500
    };
    const carousal = [
        {
            image: isMobile ? './images/newmodel/mobile/concept-mobile-01.jpg' : './images/newmodel/concept-01.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Concept and Inspiration</p>
                    <p>BYD-ATTO 3 is India's First Sporty Born E-SUV, which marks the beginning of a new electric era.</p>
                    <p>BYD-ATTO 3 combines six core advantages: Trend-leading Appearance, Rhythmic Interior, Thunderous Power, Fun Settings, Born EV Platform and Ultra-safe Blade Battery.<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/concept-mobile-02.jpg' : './images/newmodel/concept-02.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Concept and Inspiration</p>
                    <p>BYD-ATTO 3 is India's First Sporty Born E-SUV, which marks the beginning of a new electric era</p>
                    <p>BYD-ATTO 3 combines six core advantages: Trend-leading Appearance, Rhythmic Interior, Thunderous Power, Fun Settings, Born EV Platform and Ultra-safe Blade Battery.<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/concept-mobile-04.jpg' : './images/newmodel/concept-04.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">New Generation of Dragon Face Aesthetic</p>
                    <p>The Dragon Face 3.0 family design language, led by BYD's global design ethics, integrates electric and futuristic design.</p>
                    <p>The sharp lines, strong and sporty posture add to the awakening power<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/concept-mobile-05.jpg' : './images/newmodel/concept-05.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Trend-leading Appearance</p>
                    <p>The Dragon Face 3.0 family design language, led by BYD's global design ethics, integrates electric and futuristic design.</p>
                    <p>The sharp lines, strong and sporty posture add to the awakening power<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        }
    ];
    const carousal2 = [
        {
            image: isMobile ? './images/newmodel/mobile/exterior-mobile-01.jpg' : './images/newmodel/exterior-01.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Trend-leading Appearance</p>
                    <p>From the low wind resistance, A-pillar, flat chassis and D-pillar spoiler, through to the optimized hood curves, rear wing angle and rear taillight curves, the BYD-ATTO 3 body is aerodynamic.<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/exterior-mobile-02.jpg' : './images/newmodel/exterior-02.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Power to Impress</p>
                    <p>The BYD-ATTO 3 represents Speed, Energy, and Dynamics. Ripple D Pillar, Sports Wheel hub & One-piece Through LED Headlight Strip add to the Dynamism & Sporty Character.<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/exterior-mobile-03.jpg' : './images/newmodel/exterior-03.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Power to Impress</p>
                    <p>The BYD-ATTO 3 represents Speed, Energy, and Dynamics. Ripple D Pillar, Sports Wheel hub & One-piece Through LED Headlight Strip add to the Dynamism & Sporty Character.<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        }
    ];
    const carousal3 = [
        {
            image: isMobile ? './images/newmodel/mobile/interior-mobile-01.jpg' : './images/newmodel/interior-01.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Rhythmic Interior</p>
                    <p>The advanced intelligent cabin is styled with the concept of sports and  fitness in the BYD-ATTO 3, led by the interior design concept of GYM and MUSIC.</p>
                    <p>The quietness of Eclipse Blue, the purity of Hazy Grey and the passion of Vermilion Red make the overall interior space sporty and dynamic in a calm atmosphere.</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/interior-mobile-02.jpg' : './images/newmodel/interior-02.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Modern, Sporty Premium Interior</p>
                    <p>Step into the BYD-ATTO 3 and you get enveloped in its sporty and youthful interior. The modern style cockpit has dynamism and class written in every detail. The interior of BYD-ATTO 3 exhibits a sense of passion and energy, emphasised through the ability to set the mood.</p>
                    <p>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/interior-mobile-03.jpg' : './images/newmodel/interior-03.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Panoramic Sunroof with Electric Slide and Anti-pinch</p>
                    <p>The Panoramic Sunroof measures 1,261mm long and 849mm wide and extends all the way back to the second row to give you a clear view of the beauty that surrounds above, making you feel like you are riding in nature's lap.<br/>&nbsp;</p>
                </div>
            </div>),
        }
    ];
    const carousal4 = [
        {
            image: isMobile ? './images/newmodel/mobile/safety-mobile-01.jpg' : './images/newmodel/safety-01.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Safety</p>
                    <p>BYD-ATTO 3 is equipped with 7 airbags. The all-round airbag SRS protection system includes: front double airbags, front seat side airbags, side curtain airbags, far-side airbag in driver side and load limit pretensioner safety belts to guard every corner.</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/safety-mobile-02.jpg' : './images/newmodel/safety-02.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">DiPilot</p>
                    <p>Providing an intelligent, safe and reliable driving platform. Intelligent driving systems and multi-sensor layout provide driver with more reliable environment perception and safe driving solutions.<br/>&nbsp;</p>
                </div>
            </div>),
        }
    ];
    const carousal5 = [
        {
            image: isMobile ? './images/newmodel/mobile/e-platform-mobile-01.jpg' : './images/newmodel/e-platform-01.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">e-Platform 3.0</p>
                    <p>e-Platform 3.0 is a highly integrated platform which is exclusively designed for the next generation of pure electric vehicles, deeply integrated with the Blade Battery, 8-in-1 High Efficiency Electric Powertrain, Wide Temperature Range High Efficiency Heat Pump System, and other core technologies.<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/e-platform-mobile-02.jpg' : './images/newmodel/e-platform-02.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Efficiency</p>
                    <p>e-Platform 3.0 features the world’s frst 8-in-1 High Efficiency Electric Powertrain (with motor, motor controller, reducer, onboard charger, DC converter, high-voltage distribution box, vehicle controller, and BMS integrated in 1). The overall efficiency can reach 89%*, world-leading in the industry.<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/e-platform-mobile-03.jpg' : './images/newmodel/e-platform-03.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Wide Temperature Range</p>
                    <p>The Wide Temperature Range High Efficiency Heat Pump System increases thermal efficiency by up to 20% while reducing energy loss, and can work at temperatures from -30℃ to 60℃, which increases the range by up to 20% in winter.<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/e-platform-mobile-04.jpg' : './images/newmodel/e-platform-04.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Safety</p>
                    <p>e-Platform 3.0 is the exclusive body design for pure electric vehicles, which ensures ultra-safety of the vehicle.<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/e-platform-mobile-05.jpg' : './images/newmodel/e-platform-05.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Intelligent</p>
                    <p>e-Platform 3.0 deeply integrates the driving, brakingbraking and the steering system. The independently developed BYD OS decouples hardware and software, offering an elite collaboration system for high levels of intelligent driving.<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        },
        {
            image: isMobile ? './images/newmodel/mobile/e-platform-mobile-06.jpg' : './images/newmodel/e-platform-06.jpg',
            caption: (<div className="newmodel-carousel-1">
                <div className="container text-center">
                    <p className="heading-3">Aesthetics</p>
                    <p>e-Platform 3.0 gives birth to the vehicle features shorter overhangs and a longer wheelbase, significantly expanding the passenger space; a lower body and a longer wheelbase liberate the vehicle's aerodynamic design, decreasing the drag coefficient of BYD-ATTO 3 to 0.29Cd.<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;</p>
                </div>
            </div>),
        }
    ];
    const carousalMultipleSlides = [
        {
            image: './images/newmodel/exterior-thumb-01.jpg',
            caption: 'Crystal LED Combination Headlights',
        },
        {
            image: './images/newmodel/exterior-thumb-02.jpg',
            caption: 'One-piece Through LED Taillight Strip',
        },
        {
            image: './images/newmodel/exterior-thumb-03.jpg',
            caption: 'Powerful and Dynamic Waistlines',
        },
        {
            image: './images/newmodel/exterior-thumb-04.jpg',
            caption: 'Ripple D pillar',
        },
        {
            image: './images/newmodel/exterior-thumb-05.jpg',
            caption: 'Sports Wheelhub',
        },
        {
            image: './images/newmodel/exterior-thumb-06.jpg',
            caption: 'One-Pie through LED Headlight Strip',
        }
    ];
    const carousalMultipleSlides2 = [
        {
            image: './images/newmodel/interior-thumb-01.jpg',
            caption: 'Muscular Streamline Center Console',
        },
        {
            image: './images/newmodel/interior-thumb-02.jpg',
            caption: 'Dumbbell-Style Air Conditioning Vents',
        },
        {
            image: './images/newmodel/interior-thumb-03.jpg',
            caption: 'Grip-Style Door Handles',
        },
        {
            image: './images/newmodel/interior-thumb-04.jpg',
            caption: 'Treadmill-Style Central Armrest',
        },
        {
            image: './images/newmodel/interior-thumb-05.jpg',
            caption: 'Push-Type Electronic Gear Lever',
        },
        {
            image: './images/newmodel/interior-thumb-06.jpg',
            caption: 'Door Trim With String',
        },
        {
            image: './images/newmodel/interior-thumb-07.jpg',
            caption: 'Sport Steering Wheel',
        },
        {
            image: './images/newmodel/interior-thumb-08.jpg',
            caption: 'Multi-Color Rhythmic Interactive Ambient Light',
        }
    ];
    const carousalMultipleSlides3 = [
        {
            image: './images/newmodel/safety-thumb-01.jpg',
            gif: './images/newmodel/safety-thumb-01.jpg',
			caption: 'Body Steel Structure',
        },
        {
            image: './images/newmodel/safety-thumb-02.jpg',
			gif: './images/newmodel/safety-thumb-02.jpg',
            caption: 'Chassis Steel Structure',
        },
        {
            image: './images/newmodel/automatic-emergency-braking.jpg',
			gif: './images/newmodel/automatic-emergency-braking.gif',
            caption: 'Automatic Emergency Braking',
        },
        {
            image: './images/newmodel/adaptive-cruise-control.jpg',
			gif: './images/newmodel/adaptive-cruise-control.gif',
            caption: 'Adaptive Cruise Control',
        },
        {
			image: './images/newmodel/blind-spot-detection.jpg',
			gif: './images/newmodel/blind-spot-detection.gif',
            caption: 'Blind Spot Detection',
        },
        {
			image: './images/newmodel/door-open-warning.jpg',
			gif: './images/newmodel/door-open-warning.gif',
            caption: 'Door Open Warning',
        },
        {
			image: './images/newmodel/Lane-Departure.jpg',
			gif: './images/newmodel/lane-departure-warning.gif',
            caption: 'Lane Departure Warning',
        },
        {
			image: './images/newmodel/adaptive-front-light.jpg',
			gif: './images/newmodel/adaptive-front-light.gif',
            caption: 'Adaptive Front Light',
        }
    ];
    const changeCarColor = (index) => {
        setCarColor(index);
    };
    return (
        <>
            <Header />
            <section className="fluid">
                <div className="container">
                    <div className="row">
                        <ul className="breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li>BYD-ATTO 3</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="fluid relative">
                <img src="./images/newmodel/banner/top-image.jpg" className="img-fluid img-desktop" alt="New Model"/>
                <img src="./images/newmodel/banner/top-image-mobile.jpg" className="img-fluid img-mobile" alt="New Model"/>
                <div className="container newmodel-banner">
                    <img src="./images/newmodel/banner/energy.png" className="img-fluid" alt="New Model"/>
                </div>
            </section>
            <section className="fluid bg-gray">
                <div className="container pv-30 text-center">
                    <p className="heading-3">BYD-ATTO 3</p>
                    <p className="text-uppercase">ATTO IS INSPIRED BY THE ATTOSECOND THE SMALLEST TIME SCALE UNIT IN PHYSICS REPRESENTING THE PURSUIT OF SPEED AND EXCELSIOR</p>
                </div>
            </section>
            <section className="fluid bg-light-gray pt-30">
                <div className="cover-slides newmodel-carousel slides-with-text">
                    {carousal.length > 0 && (
                        <Slider {...settings}>
                            {carousal.map((media, mIndex)=> 
                                <div key={`slider_item_1_${mIndex}`}>
                                    <div className="box">
                                        {media.caption}
                                        <div className="box-image">
                                            <img src={`${media.image}`} className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    )}
                </div>
            </section>
            <section className="fluid bg-light-gray pt-30">
                <div className="cover-slides newmodel-carousel slides-with-text">
                    {carousal2.length > 0 && (
                        <Slider {...settings}>
                            {carousal2.map((media, mIndex)=> 
                                <div key={`slider_item_2_${mIndex}`}>
                                    <div className="box">
                                        {media.caption}
                                        <div className="box-image">
                                            <img src={`${media.image}`} className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    )}
                </div>
            </section>
            <section className="fluid bg-light-gray pt-10">
                <div className="cover-slides newmodel-carousel">
                    {carousalMultipleSlides.length > 0 && (
                        <Slider {...settingsMultipleSlides}>
                            {carousalMultipleSlides.map((media, mIndex)=> 
                                <div key={`slider_item_3_${mIndex}`}>
                                    <div className="box">
                                        <div className="box-image">
                                            <img src={`${media.image}`} className="img-fluid"/>
                                        </div>
                                        <p className="text-center mt-10"><strong>{media.caption}</strong></p>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    )}
                </div>
            </section>
            <section className="fluid bg-light-gray pt-30">
                <div className="cover-slides newmodel-carousel slides-with-text">
                    {carousal3.length > 0 && (
                        <Slider {...settings}>
                            {carousal3.map((media, mIndex)=> 
                                <div key={`slider_item_4_${mIndex}`}>
                                    <div className="box">
                                        {media.caption}
                                        <div className="box-image">
                                            <img src={`${media.image}`} className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    )}
                </div>
            </section>
            <section className="fluid bg-light-gray pt-10">
                <div className="cover-slides newmodel-carousel">
                    {carousalMultipleSlides2.length > 0 && (
                        <Slider {...settingsMultipleSlides}>
                            {carousalMultipleSlides2.map((media, mIndex)=> 
                                <div key={`slider_item_5_${mIndex}`}>
                                    <div className="box">
                                        <div className="box-image">
                                            <img src={`${media.image}`} className="img-fluid"/>
                                        </div>
                                        <p className="text-center mt-10"><strong>{media.caption}</strong></p>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    )}
                </div>
            </section>
            <section className="fluid bg-gray pt-30">
                <div className="container text-center">
                    <p className="heading-3">Fun Settings & Convenience</p>
                    <p>Equipped with functions smart enough to make your journey easier. BYD-ATTO 3 aims to improve your driving experience, making your life efficient and convenient.</p>
                    <p>The VTOL mobile power station function allows the vehicle to be transformed into a super mobile power bank, which supports power up to 3.3kwh, which can satisfy most high-power electrical appliances, outdoor cooking, and enjoy a new comfortable self-driving experience.</p>
                </div>
                <div className="custom-row bg-light-gray newmodel-grid-structure">
                    <div className="col-12 col-sm-12 col-md-6">
                        <img src="./images/newmodel/convenience-hero.jpg" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="custom-row flex-md-row flex-sm-column-reverse flex-column-reverse">
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src="./images/newmodel/convenience-thumb-01.jpg" className="img-fluid"/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center pvh-20">
                                <p className="heading-5">Magic Boot Space</p>
                                <p>The rear seats can be folded down for 60 :40 split and can reach full flat when down, making the space more flexible and adjustable as per your needs.</p>
                            </div>
                        </div>
                        <div className="custom-row">
                            <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center pvh-20">
                                <p className="heading-5">12.8-inch (32.5cm) Adaptive Rotating Suspension Electronic Pad</p>
                                <p>It integrates functions such as voice recognition, intelligent voice reminder, Bluetooth hands-free calling, Bluetooth music, and other functions. The super-large screen can be rotated by a simple finger touch control according to the scene, it provides users with a truly intelligent interactive experience.</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src="./images/newmodel/convenience-thumb-02.jpg" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-row bg-light-gray newmodel-grid-structure">
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="custom-row flex-md-row flex-sm-column-reverse flex-column-reverse">
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src="./images/newmodel/convenience-thumb-03.jpg" className="img-fluid"/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center pvh-20">
                                <p className="heading-5">Mobile Phone Wireless Charging</p>
                                <p>Convenient, fast, smart, and practical.</p>
                            </div>
                        </div>
                        <div className="custom-row">
                            <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center pvh-20">
                                <p className="heading-5">360° Holographic Transparent Imaging System</p>
                                <p>It can look around and even underneath the car, so there is no blind spot.</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src="./images/newmodel/convenience-thumb-04.jpg" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <img src="./images/newmodel/convenience-hero2.jpg" className="img-fluid"/>
                    </div>
                </div>
                <div className="custom-row bg-light-gray newmodel-grid-structure flex-md-row flex-sm-column-reverse flex-column-reverse">
                    <div className="col-12 col-sm-12 col-md-6">
                        <img src="./images/newmodel/convenience-hero3.jpg" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="custom-row">
                            <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center pvh-20">
                                <p className="heading-5">One-touch Electric Control Tailgate</p>
                                <p>One-touch open / close tailgate, tailgate can be opened at a set height and has an opening height memory function.</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src="./images/newmodel/convenience-thumb-05.jpg" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="custom-row flex-md-row flex-sm-column-reverse flex-column-reverse">
                            <div className="col-12 col-sm-12 col-md-6">
                                <img src="./images/newmodel/convenience-thumb-06.jpg" className="img-fluid"/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center pvh-20 border-bottom">
                                <p className="heading-5">NFC Card Key</p>
                                <p>ATTO 3 provides NFC card key. NFC card keys are easy to carry and unlock the vehicle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fluid bg-light-gray pt-30">
                <div className="cover-slides newmodel-carousel slides-with-text">
                    {carousal4.length > 0 && (
                        <Slider {...settings}>
                            {carousal4.map((media, mIndex)=> 
                                <div key={`slider_item_4_${mIndex}`}>
                                    <div className="box">
                                        {media.caption}
                                        <div className="box-image">
                                            <img src={`${media.image}`} className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    )}
                </div>
            </section>
            <section className="fluid bg-light-gray pt-10">
                <div className="cover-slides newmodel-carousel">
                    {carousalMultipleSlides3.length > 0 && (
                        <Slider {...settingsMultipleSlides}>
                            {carousalMultipleSlides3.map((media, mIndex)=> 
                                <div key={`slider_item_5_${mIndex}`}>
                                    <div className="box">
                                        <div className="box-image">
                                            <img src={`${media.image}`} className="static"/>
											<img src={`${media.gif}`} className="active"/>
                                        </div>
                                        <p className="text-center mt-10"><strong>{media.caption}</strong></p>
										
                                    </div>
                                </div>
                            )}
                        </Slider>
                    )}
                </div>
            </section>
            <section className="fluid bg-gray pt-30">
                <div className="container text-center pb-20">
                    <p className="heading-3">Thunderous Power</p>
                    <p>150kW peak power, 310Nm peak torque, a surging and efficient powertrain. From 0 to 100 km/h in as little as 7.3s*, demonstrating the sports style. BYD-ATTO 3 has excellent aerodynamic performance, with a wind resistance coefficient of 0.29Cd*. 521km* Ultra-long range, striving every moment for electrifying driving experiences</p>
                </div>
                <img src="./images/newmodel/thunderous_power.jpg" className="img-fluid img-desktop"/>
                <img src="./images/newmodel/mobile/thunderous_power-mobile.jpg" className="img-fluid img-mobile"/>
            </section>
            <section className="fluid bg-light-gray pt-30">
                <div className="cover-slides newmodel-carousel slides-with-text">
                    {carousal5.length > 0 && (
                        <Slider {...settings}>
                            {carousal5.map((media, mIndex)=> 
                                <div key={`slider_item_4_${mIndex}`}>
                                    <div className="box">
                                        {media.caption}
                                        <div className="box-image">
                                            <img src={`${media.image}`} className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    )}
                </div>
            </section>
            <section className="fluid bg-light-gray newmodel-blade-battery-wrapper">
                <img src="./images/newmodel/blade_battery.jpg" className="img-fluid img-desktop"/>
                <img src="./images/newmodel/mobile/blade-battery-mobile.jpg" className="img-fluid img-mobile"/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-10 text-center bg-light-gray newmodel-blade-battery">
                            <p className="heading-3">Blade Battery</p>
                            <p>BYD-ATTO 3 is equipped with the Blade Battery technology, which sets new benchmarks and redefines the standards of EV safety.</p>
                            <p><strong>Ultra Safe</strong></p>
                            <p>Blade Battery has successfully passed the nail penetration test, the most rigorous way to test the thermal runaway of batteries. We could say the
penetration test is the Mount Everest of the battery safety tests.</p>
                            <p><strong>Ultra Strength</strong></p>
                            <p>Blade Battery completed an extreme strength test that saw a 46-tonne truck driving right over it, once again resetting the bar for power battery
safety.</p>
                            <p><strong>Ultra Driving Range</strong></p>
                            <p>Blade Battery supports BYD-ATTO 3 a range of 521km* as per ARAI test in one charge.</p>
                            <p><strong>Ultra-high Charging and Discharging Capacity</strong></p>
                            <p>Blade Battery can support BYD-ATTO 3 to charge from 0% to 80% within 50 mins*, and enables BYD-ATTO 3 to accelerate from 0-100km/h within
7.3s.</p>
                            <p><strong>Ultra-long Lifespan</strong></p>
                            <p>Blade Battery can support the driving mileage of more than 500,000km* or even more than 1,000,000km.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fluid bg-light-gray pt-30">
                <div className="container text-center">
                    <p className="heading-3">Color Variation</p>
                </div>
                <div className="newmodel-car-colors">
                    <div className="newmodel-colors-thumb">
                        <button type="button" className="newmodel-colors-thumb-img" onClick={() => changeCarColor(0)}>
                            <img src="./images/newmodel/car-colors/blue-color.png" className="img-fluid"/>
                        </button>
                        <button type="button" className="newmodel-colors-thumb-img" onClick={() => changeCarColor(1)}>
                            <img src="./images/newmodel/car-colors/grey-color.png" className="img-fluid"/>
                        </button>
                        <button type="button" className="newmodel-colors-thumb-img" onClick={() => changeCarColor(2)}>
                            <img src="./images/newmodel/car-colors/red-color.png" className="img-fluid"/>
                        </button>
                        <button type="button" className="newmodel-colors-thumb-img" onClick={() => changeCarColor(3)}>
                            <img src="./images/newmodel/car-colors/white-color.png" className="img-fluid"/>
                        </button>
                    </div>
                    <div className="newmodel-colors-car bg-gray-dark-blue text-center">
                        <img src={`${carColorsImg[carColor]}`} className="img-fluid"/>
                    </div>
                </div>
            </section>
            <section className>
                <div className="container">
                    <div className="row" dangerouslySetInnerHTML={{__html: cmscontents}}></div>
                </div>
            </section>
            <section className="fluid stay-tuned-banner">
                <i className="icon-envelope"></i>
                <div className="container">
                    <div className="row">
                        <Newsletter />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NewModel;