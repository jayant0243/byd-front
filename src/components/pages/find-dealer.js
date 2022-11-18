import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import configData from '../../config.json'
import { sortingASD } from '../../util'
import Newsletter from '../Newsletter';
import './style.css';

const Finddealer = () => {
    const [cmscontents_1, setCmscontents_1] = useState([]);
    const [filteredDealerList, setFilteredDealerList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [allCityList, setAllCityList] = useState({});
    const [dropDownState, setDropDownState] = useState('State');
    const [dropDownStateToggle, setDropDownStateToggle] = useState(false);
    const [dropDownCity, setDropDownCity] = useState('City');
    const [dropDownCityToggle, setDropDownCityToggle] = useState(false);
    const [resetFilter, setResetFilter] = useState(false);
    const stateRef = useRef();
    const cityRef = useRef();

    const handleClick = (event) => {
        if (stateRef.current && !stateRef.current.contains(event.target)) {
            setDropDownStateToggle(false);
        }
        if (cityRef.current && !cityRef.current.contains(event.target)) {
            setDropDownCityToggle(false);
        }
    };
    useEffect(() => {
        getCmscontents_1();
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    function getCmscontents_1() {
        axios.get(configData.BASE_URL + 'dealers').then(function (response) {
            const data = response.data.data;
            console.log(data);
            data.sort(sortingASD);
            console.log(data);
            const state = [];
            const city = {};
            data.map(item => {
                state.push(item.state);
                if (city[item.state]) {
                    if (!city[item.state].includes(item.city)) {
                        city[item.state].push(item.city);
                    }
                } else {
                    city[item.state] = [];
                    city[item.state].push(item.city);
                }
            });
            const uniqueState = [];
            state.forEach(elem => {
                if (!uniqueState.includes(elem)) uniqueState.push(elem);
            });
            setStateList(uniqueState);
            setAllCityList(city);
            setCmscontents_1(data);
            setFilteredDealerList(data);
        });
    }

    const toggleStateDropDown = () => {
        setDropDownStateToggle(!dropDownStateToggle);
    }
    const toggleCityDropDown = () => {
        setDropDownCityToggle(!dropDownCityToggle);
    }
    const selectState = (item) => {
        toggleStateDropDown();
        setDropDownState(item);
        setResetFilter(true);
        setCityList(allCityList[item]);
        setDropDownCity('City');
        const filterData = cmscontents_1.filter(itm => itm.state === item);
        setFilteredDealerList(filterData);
    }
    const selectCity = (item) => {
        toggleCityDropDown();
        setDropDownCity(item);
        const filterData = cmscontents_1.filter(itm => itm.city === item);
        setFilteredDealerList(filterData);
    }
    const resetFilterMethod = () => {
        setResetFilter(false);
        setDropDownCity('City');
        setDropDownState('State');
        setCityList([]);
        setFilteredDealerList([...cmscontents_1]);
    };
    return (
        <>
            {/* <Header /> */}
            <section class="fluid background-white">
                <div class="container">
                    <ul class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li>Dealers</li>
                    </ul>
                    <div class="row pv-30">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-30 text-center">
                            <p class="mb-0 heading-4">Kindly, call your dealer and book an appointment before visiting.</p>
                            <p class="mb-0 heading-6">Choose your preferred state and city  from the drop down or scroll down to view the PAN India BYD Dealership.</p>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-30 text-center">
                            <div className="filterWrapper">
                                <div class="customDropDown" ref={stateRef}>
                                    <div className="dropDownLabel" onClick={toggleStateDropDown}>
                                        <span>{dropDownState}</span>
                                        <i class="icon-arrow-down"></i>
                                    </div>
                                    <ul className={dropDownStateToggle ? 'active' : ''}>
                                        {stateList.map((item, index) => (
                                            <li data-index={index} onClick={() => selectState(item)}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div class="customDropDown" ref={cityRef}>
                                    <div className="dropDownLabel" onClick={toggleCityDropDown}>
                                        <span>{dropDownCity}</span>
                                        <i class="icon-arrow-down"></i>
                                    </div>
                                    <ul className={dropDownCityToggle ? 'active' : ''}>
                                        {cityList.map((item, index) => (
                                            <li data-index={index} onClick={() => selectCity(item)}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                {resetFilter && (<button className="resetButton" type="button" onClick={resetFilterMethod}><i className="icon-close"></i></button>)}
                            </div>
                        </div>
                        {filteredDealerList.length && filteredDealerList.map(item => {
                            return (
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-30">
                                    <div class="dealer-card">
                                        <div class="dealer-card-image">
                                            <img src={`${configData.DEALER_THUMB}${item.thumbnail_image}`} class="img-fluid" />
                                        </div>
                                        <div class="dealer-card-body">
                                            <div class="dealer-card-title">
                                                <p class="mb-0 heading-4 text-capitalize">{item.state}</p>
                                                <p class="mb-0 heading-3">{item.name}</p>
                                                <p class="mb-0">{item.address}</p>
                                            </div>
                                            <div class="dealer-card-contacts">
                                                <p class={`d-flex align-items-center ${item.alternative_phoneno ? "mb-0" : "mb-10"}`}>
                                                    <i class="icon-phone"></i> {item.phone_no}
                                                </p>
                                                {(item.alternative_phoneno) && (
                                                    <p class="mb-10 d-flex align-items-center">
                                                        <i class="icon-phone"></i> {item.alternative_phoneno}
                                                    </p>
                                                )}
                                                <p class="mb-0 d-flex align-items-center">
                                                    <i class="icon-envelope"></i> {item.email}
                                                </p>
                                                {(item.alternative_email) && (<p class="mb-0 d-flex align-items-center">
                                                    <i class="icon-envelope"></i> {item.alternative_email}
                                                </p>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
            {/* <Footer /> */}
        </>
    );
};

export default Finddealer;