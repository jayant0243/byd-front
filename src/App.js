import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import AboutBYD from './components/pages/about_byd';
import Allnewe6 from './components/pages/all-new-e6';
import BladeBattery from './components/pages/blade-battery';
import Events from './components/pages/events';
import Finddealer from './components/pages/find-dealer';
import Home from './components/pages/index';
import Jobs from './components/pages/jobs';
import News from './components/pages/news';
import Privacypolicy from './components/pages/privacy-policy';
import Support from './components/pages/support';
import Termsconditions from './components/pages/terms-conditions';
import Testdrive from './components/pages/test-drive';
import Careers from './components/pages/careers';
import Newsdetails from './components/pages/newsdetails';
import Eventsdetails from './components/pages/eventsdetails';
import Thankyou from './components/pages/thankyou';
import NewModel from './components/pages/newmodel';
import Header from './components/Header';
import Homefooter from './components/Homefooter';
import { useSelector, useDispatch } from 'react-redux';
import { apiRequest } from "./api";
import * as PageReducder from './../src/components/Redux/reducers/PageReducer';
import { PageLoad } from './components/pages/PageLoad';

function App() {
	const dispatch = useDispatch();
	const getPagesList = () => {
		apiRequest({
			method: "GET",
			url: "page"
		}).then(resp => {
			// console.log(resp);
			dispatch(PageReducder.actions.pageList(resp.data));
			// setEventList(resp.data);
		}).catch(error => {
			console.log(error);
		});
	}

	useEffect(() => {
		getPagesList();
	}, [])

	const { pageList } = useSelector(({ page }) => page);

	return (
		<Router basename={'/'}>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				{/* <Route path='/about_byd' element={<AboutBYD />} />
					<Route path='/all-new-e6' element={<Allnewe6 />} />
					<Route path='/blade-battery' element={<BladeBattery />} />
					<Route path='/events' element={<Events />} /> */}
				{/* <Route path='/find-dealer' element={<Finddealer />} />
				<Route path='/enquire-now' element={<Testdrive />} /> */}
				{/* {
					pageList.map((item, index) => {
						return <Route path={`${item.sku}`} element={<PageLoad />} />
					})
				} */}
				{/* <Route path='/jobs' element={<Jobs />} />
					<Route path='/news' element={<News />} />
					<Route path="/news/:newsurl" element={<Newsdetails />} />
					<Route path="/events/:eventurl" element={<Eventsdetails />} />
					<Route path='/privacy-policy' element={<Privacypolicy />} />
					<Route path='/support' element={<Support />} />
					<Route path='/terms-conditions' element={<Termsconditions />} />
					<Route path='/enquire-now' element={<Testdrive />} />
					<Route path='/thankyou' element={<Thankyou />} />
					<Route path='/careers' element={<Careers />} />
					<Route path='/byd-atto3' element={<NewModel />} /> */}
			</Routes>
			<Homefooter />
		</Router>
	);
}
export default App;
