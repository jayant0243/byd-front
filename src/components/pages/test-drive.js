import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import configData from '../../config.json'
import { sortingASD } from '../../util'
import Header from '../Header';
import Footer from '../Footer';
import Newsletter from '../Newsletter';

const Testdrive = () => {
    const [cmscontents_1, setCmscontents_1] = useState([]);
    const [filteredDealerList, setFilteredDealerList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [allCityList, setAllCityList] = useState({});
    const [modelList, setModelList] = useState([
        'BYD-ATTO 3', 'All New e6'
    ]);

    console.log(filteredDealerList)

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        model: '',
        state: '',
        city: '',
        dealer: '',
        privacyPolicy: false,
        termCondition: false,
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [dropDownState, setDropDownState] = useState('');
    const [dropDownStateToggle, setDropDownStateToggle] = useState(false);
    const [dropDownCity, setDropDownCity] = useState('');
    const [dropDownCityToggle, setDropDownCityToggle] = useState(false);
    const [dropDownDealer, setDropDownDealer] = useState('');
    const [dropDownDealerToggle, setDropDownDealerToggle] = useState(false);
    const [dropDownModel, setDropDownModel] = useState('');
    const [dropDownModelToggle, setDropDownModelToggle] = useState(false);

    const stateRef = useRef();
    const cityRef = useRef();
    const dealerRef = useRef();
    const modelRef = useRef();

    const handleClick = (event) => {
        if(stateRef.current && !stateRef.current.contains(event.target)){
            setDropDownStateToggle(false);
        }
        if(cityRef.current && !cityRef.current.contains(event.target)){
            setDropDownCityToggle(false);
        }
        if(dealerRef.current && !dealerRef.current.contains(event.target)){
            setDropDownDealerToggle(false);
        }
        if(modelRef.current && !modelRef.current.contains(event.target)){
            setDropDownModelToggle(false);
        }
    };
    const getCmscontents_1 = () => {
        axios.get(configData.BASE_URL+'dealers').then(function(response) {
            const data = response.data.data;
            data.sort(sortingASD);
            const state = [];
            const city = {};
            data.map(item => {
                state.push(item.state);
                if(city[item.state]){
                    if(!city[item.state].includes(item.city)){
                        city[item.state].push(item.city);
                    }
                }else{
                    city[item.state] = [];
                    city[item.state].push(item.city);
                }
            });
            const uniqueState = [];
            state.forEach(elem => {
                if(!uniqueState.includes(elem)) uniqueState.push(elem);
            });
            setStateList(uniqueState);
            setAllCityList(city);
            setCmscontents_1(data);
            setFilteredDealerList(data);
        });
    }
    useEffect(() => {
        getCmscontents_1();
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    const toggleStateDropDown = () => {
        setDropDownStateToggle(!dropDownStateToggle);
    }
    const toggleCityDropDown = () => {
        setDropDownCityToggle(!dropDownCityToggle);
    }
    const toggleDealerDropDown = () => {
        setDropDownDealerToggle(!dropDownDealerToggle);
    }
    const toggleModelDropDown = () => {
        setDropDownModelToggle(!dropDownModelToggle);
    }

    const selectState = (item) => {
        toggleStateDropDown();
        setDropDownState(item);
        setCityList(allCityList[item]);
        setDropDownCity('');
        setDropDownDealer('');
        setIsFormSubmitted(false);
        const filterData = cmscontents_1.filter(itm => itm.state === item);
        setFilteredDealerList(filterData);
        setFormData({
            ...formData,
            state: item,
            city: '',
            dealer: ''
        });
    }
    const selectCity = (item) => {
        toggleCityDropDown();
        setDropDownCity(item);
        setDropDownDealer('');
        setIsFormSubmitted(false);
        const filterData = cmscontents_1.filter(itm => itm.city === item);
        setFilteredDealerList(filterData);
        setFormData({
            ...formData,
            city: item,
            dealer: ''
        });
    }
    const selectDealer = (item) => {
        toggleDealerDropDown();
        setDropDownDealer(item);
        setIsFormSubmitted(false);
        setFormData({
            ...formData,
            dealer: item
        });
    }
    const selectModel = (item) => {
        toggleModelDropDown();
        setDropDownModel(item);
        setIsFormSubmitted(false);
        setFormData({
            ...formData,
            model: item
        });
    }
    const handleCheckbox = (e) => {
        setIsFormSubmitted(false);
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };
    const handleInputChange = (e) => {
        setIsFormSubmitted(false);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = () => {
        console.log(formData);
        if(!formData.name){
            setIsFormSubmitted(true);
            return;
        }
        if(!formData.phone){
            setIsFormSubmitted(true);
            return;
        }
        if(!formData.email){
            setIsFormSubmitted(true);
            return;
        }
        if(!formData.model){
            setIsFormSubmitted(true);
            return;
        }
        if(!formData.state){
            setIsFormSubmitted(true);
            return;
        }
        if(!formData.city){
            setIsFormSubmitted(true);
            return;
        }
        if(!formData.dealer){
            setIsFormSubmitted(true);
            return;
        }
        if(!formData.privacyPolicy){
            setIsFormSubmitted(true);
            return;
        }
        if(!formData.termCondition){
            setIsFormSubmitted(true);
            return;
        }
        console.log('asdasdasd');
        axios.post(configData.BASE_URL+'enquire-now', {
            name: formData.name,
            contact_number: formData.phone,
            email_id: formData.email,
            model_sku: formData.model,
            state: formData.state,
            city: formData.city,
            dealer: formData.dealer,
        }).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    };

  return (
    <>
      <section className="fluid test-drive-banner">
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li>Enquire Now</li>
                </ul>
                <div className="row mb-20 test-drive-form-wrapper">
                    <form name="enquireNowForm" className="enquireNowForm" id="enquireNowForm">
                        <p className="title">Interested to know more about BYD vehicles</p>
                        <p className="sub-title">Please share your contact details and we will connect with you.</p>

                        <div className="fieldset mb-20">
                            <input type="text" className="drive-input" name="name" id="drive_fullname" placeholder="Name" onChange={e => handleInputChange(e)}/>
                            {(isFormSubmitted && !formData.name) && (<span className="red">Please enter Name</span>)}
                        </div>
                        <div className="fieldset mb-20">
                            <input type="tel" className="drive-input" name="phone" id="drive_contact" placeholder="Contact No." onChange={e => handleInputChange(e)}/>
                            {/* <span className="red">Please enter Contact No.</span> */}
                            {(isFormSubmitted && !formData.phone) && (<span className="red validation-error">Please enter valide Contact No.</span>)}
                        </div>
                        <div className="fieldset mb-20">
                            <input type="email" className="drive-input" name="email" id="drive_email" placeholder="Email" onChange={e => handleInputChange(e)}/>
                            {(isFormSubmitted && !formData.email) && (<span className="red">Please enter Email</span>)}
                        </div>
                        <div className="fieldset mb-20">
                            <div className="customDropDown fluid" ref={modelRef}>
                                <div className="dropDownLabel" onClick={toggleModelDropDown}>
                                    <span>{dropDownModel || 'Model'}</span>
                                    <i className="icon-arrow-down"></i>
                                </div>
                                <ul className={dropDownModelToggle ? 'active' : ''}>
                                    {modelList.map((item, index) => (
                                        <li key={`model_${index}`} data-index={index} onClick={() => selectModel(item)}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {(isFormSubmitted && !formData.model) && (<span className="red">Please select Model</span>)}
                        </div>
                        <div className="fieldset mb-20">
                            <div className="customDropDown fluid" ref={stateRef}>
                                <div className="dropDownLabel" onClick={toggleStateDropDown}>
                                    <span>{dropDownState || 'State'}</span>
                                    <i className="icon-arrow-down"></i>
                                </div>
                                <ul className={dropDownStateToggle ? 'active' : ''}>
                                    {stateList.map((item, index) => (
                                        <li key={`state_${index}`} data-index={index} onClick={() => selectState(item)}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {(isFormSubmitted && !formData.state) && (<span className="red">Please select State</span>)}
                        </div>
                        <div className="fieldset mb-20">
                            <div className="customDropDown fluid" ref={cityRef}>
                                <div className="dropDownLabel" onClick={toggleCityDropDown}>
                                    <span>{dropDownCity || 'City'}</span>
                                    <i className="icon-arrow-down"></i>
                                </div>
                                <ul className={dropDownCityToggle ? 'active' : ''}>
                                    {cityList.map((item, index) => (
                                        <li key={`city_${index}`} data-index={index} onClick={() => selectCity(item)}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {(isFormSubmitted && !formData.city) && (<span className="red">Please select City</span>)}
                        </div>
                        <div className="fieldset mb-20">
                            <div className="customDropDown fluid" ref={dealerRef}>
                                <div className="dropDownLabel" onClick={toggleDealerDropDown}>
                                    <span>{dropDownDealer || 'Dealer'}</span>
                                    <i className="icon-arrow-down"></i>
                                </div>
                                <ul className={dropDownDealerToggle ? 'active' : ''}>
                                    {filteredDealerList.map((item, index) => (
                                        <li key={`dealer_${index}`} data-index={index} onClick={() => selectDealer(item.name)}>{item.name}</li>
                                    ))}
                                </ul>
                            </div>
                            {(isFormSubmitted && !formData.dealer) && (<span className="red">Please select Dealer</span>)}
                        </div>
                        <div className="fieldset">
                            <label>
                                <input type="checkbox" className="drive-input" name="privacyPolicy" id="privacypolicy" onChange={e => handleCheckbox(e)}/>
                                <p className="clicking">I have read the <a className="underline-link load-moretd" href="javascript:window.open('privacy-policy.php','mypopuptitle','width=600,height=400')">Privacy Policy</a> before clicking the 'Send' button below.</p>
                            </label>
                            {(isFormSubmitted && !formData.privacyPolicy) && (<span className="red">Please select Privacy Policy</span>)}

                            <label>
                                <input type="checkbox" className="drive-input" name="termCondition" id="term_condition" onChange={e => handleCheckbox(e)}/>
                                <p className="clicking">I agree to the <a className="underline-link load-moretd" href="javascript:window.open('terms-conditions.php','mypopuptitle','width=600,height=400')">Terms & Conditions</a> by clicking the 'Send' button below.</p>
                            </label>
                            {(isFormSubmitted && !formData.termCondition) && (<span className="red">Please select Terms & Conditions</span>)}
                        </div>
                        <button type="button" onClick={handleSubmit}>SEND</button>
                    </form>
                </div>
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
    </>
  );
};
  
export default Testdrive;