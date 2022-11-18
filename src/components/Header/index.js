import React, { useEffect } from "react";
import { apiRequest } from "../../api";
import * as MenuReducer from "./MenuReducer";
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate, Link } from "react-router-dom";
import { Link } from 'react-router-dom';

export const SubMenuItems = ({ level }) => {
    const path = 'xyaz'
    console.log(level)
    return level ? (
        level.levelValue && level.levelValue.map((item, value) => (
            <ul className="sub-nav">
                <li>
                    <a href={`${path}${level.value}`}>{item.name}</a>
                </li>
                {
                    item.child &&
                    (
                        // <li className="sub-nav-inner-toggler">
                        //     <ul>
                        //         <SubMenuItems level={item.child} />
                        //     </ul>
                        // </li>
                        <li className="sub-nav-inner-toggler">
                            <span>{item.child.name}</span>
                            <ul className="sub-nav-inner">
                                <li>
                                    <a href={`${path}${item.child.name}?#${item.child.name}`}>{item.child.value}</a>
                                </li>
                                {/* <li>
                                    <a href={`${path}about_byd?#diversification`}>Diversification</a>
                                </li>
                                <li>
                                    <a href={`${path}about_byd?#marketperformance`}>Market Performance</a>
                                </li> */}

                            </ul>
                        </li>
                    )
                }
            </ul>
        )
        )
    ) : null;
}

export const MenuItems = ({ headerItem }) => {
    // const navigate = useNavigate();
    const levels = [...headerItem.sku];
    for (let i = levels.length - 1; i > 0; i--) {
        const levelValue1 = levels[i]['levelValue'];
        levelValue1.forEach((item, index) => {
            if (item.parent && item.parent != '') {
                const levelValue2 = levels[i - 1]['levelValue'];
                levelValue2.forEach((item1, index1) => {
                    if (item1.name == item.parent) {
                        levelValue2[index1]['child'] = item;
                        levelValue1.splice(index, 1);
                    }
                })
            }
        })
    }
    console.log("headerItem", headerItem)
    // console.log(levels[0].levelValue)
    // const header = headerMenus.map((item, index) => {
    //     item.sku = JSON.parse(item.sku);
    //     item.title = JSON.parse(item.title);
    //     return item;
    // })
    // console.log(header)
    return (
        <li className="sub-nav-toggler">
            <span >{headerItem.title.name}</span>
            {
                levels.map((levelItem, index) => {
                    return (
                        <SubMenuItems
                            level={levelItem}
                            index={index}
                        />
                    )
                })
            }
        </li>
    )
}


const Header = () => {
    const path = window.location.pathname.includes('/news/') ? '../' : './';
    const dispatch = useDispatch();
    const { menuList } = useSelector(({ menu }) => menu);

    console.log("menuList", menuList)
    let headerMenus = [...menuList];
    headerMenus = headerMenus.filter((item, index) => {
        return item.title.menuPos == 'HEADER'
    })

    const getHeaders = () => {
        apiRequest({
            method: "GET",
            url: "menu"
        }).then(resp => {
            // console.log(resp);
            dispatch(MenuReducer.actions.menuList(resp.data));
            // setEventList(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }


    useEffect(() => {
        getHeaders();
    }, [])

    return (
        <>
            <header className="fluid">
                <div className="fluid top-header">
                    <div className="container">
                        <div className="row">
                            <ul className="top-header-link">
                                <li className="">
                                    <button type="button" className="search-popup">
                                        <i className="icon-magnifier" title="Search this Site"></i>
                                    </button>
                                </li>
                                <li className="">
                                    <a href="tel:+91 44 67191801">
                                        <i className="icon-phone" title="Click to Call"></i>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="support">
                                        <img src="/byd-web/images/icon/customer-service.png" alt="customer service" width="14" height="13" />
                                    </a>
                                </li>
                                <li className=" mail-popup-wrapper">
                                    <a href="mail:" className="mail-to-toggler">
                                        <i className="icon-envelope" title="Write Us"></i>
                                    </a>
                                    <div className="form-wrapper">
                                        <form id="contactUsHead">
                                            <input type="email" name="headEmail" id="headEmail" placeholder="Type your email ID" />
                                            <textarea placeholder="Type your Message..." rows="10" name="headMessage" id="headMessage"></textarea>
                                            <button type="button" id="headSubmit" value="SEND">SEND</button>
                                            <div id="headLoader"></div>
                                            <div id="headInfo"></div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="header">
                            <div>
                                <a href="https://bitm.agency/byd-web" className="logo">
                                    <img src="/byd-web/images/logo.png" alt="Logo" className="img-fluid" />
                                </a>
                            </div>
                            <nav className="nav-link">
                                <ul>
                                    {
                                        headerMenus.map((headerItem, index) => {
                                            return (
                                                <MenuItems headerItem={headerItem} key={index} />
                                            )
                                        })
                                    }


                                    {/* <li className="sub-nav-toggler">
                                        <span>Models</span>
                                        <ul className="sub-nav">
                                            <li>
                                                <a href={`${path}byd-atto3`}></a>
                                            </li>
                                            <li>
                                                <a href={`${path}all-new-e6`}>All New e6</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href={`${path}blade-battery`}>Blade Battery</a>
                                    </li>
                                    <li className="sub-nav-toggler">
                                        <span><a href={`${path}about_byd`}>About BYD</a></span>
                                        <ul className="sub-nav">
                                            <li>
                                                <a href={`${path}about_byd?#bydintro`}>BYD Intro</a>
                                            </li>
                                            <li className="sub-nav-inner-toggler">
                                                <span>Global Corporate</span>
                                                <ul className="sub-nav-inner">
                                                    <li>
                                                        <a href={`${path}about_byd?#globalization`}>Globalization</a>
                                                    </li>
                                                    <li>
                                                        <a href={`${path}about_byd?#diversification`}>Diversification</a>
                                                    </li>
                                                    <li>
                                                        <a href={`${path}about_byd?#marketperformance`}>Market Performance</a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="sub-nav-inner-toggler">
                                                <span>Technology-Oriented</span>
                                                <ul className="sub-nav-inner">
                                                    <li>
                                                        <a href={`${path}about_byd?#auto`}>Auto</a>
                                                    </li>
                                                    <li>
                                                        <a href={`${path}about_byd?#eplatform`}>ePlatform 3.0</a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="sub-nav-inner-toggler">
                                                <span>Green Future</span>
                                                <ul className="sub-nav-inner">
                                                    <li>
                                                        <a href={`${path}about_byd?#cooltheearth`}>Cool the Earth by 1&deg;C</a>
                                                    </li>
                                                    <li>
                                                        <a href={`${path}about_byd?#pollutioncontrol`}>Pollution Control</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-nav-inner-toggler">
                                                <span>Corporate Presence</span>
                                                <ul className="sub-nav-inner">
                                                    <li>
                                                        <a href={`${path}about_byd?#csr`}>CSR</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href={`${path}news`}>News</a>
                                    </li>
                                    <li>
                                        <a href={`${path}events`}>Events</a>
                                    </li> */}
                                </ul>
                                {/* <ul>
                                    <li className="pl-0">
                                        <Link path={`${path}find-dealer`}><i className="icon-location-pin"></i>Dealers</Link>
                                    </li>
                                    <li className="pr-0">
                                        <Link path={`${path}enquire-now`} className="test-drive-link"><img src="/images/icon/icon-02.png" alt="Test Drive" />Enquire Now</Link>
                                    </li>
                                    <li className="menu-toggler-wrapper">
                                        <button type="button" className="menu-toggler">
                                            <i className="icon-menu"></i>
                                        </button>
                                    </li>
                                </ul> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;