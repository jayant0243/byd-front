import React from "react";
import Loadable from "react-loadable";
import Event from '../pages/AfterAuth/Event/index';
import EventEdit from '../pages/AfterAuth/Event/edit';
import EventAdd from '../pages/AfterAuth/Event/add';
import News from '../pages/AfterAuth/News/index';
import NewsAdd from '../pages/AfterAuth/News/add';
import NewsEdit from '../pages/AfterAuth/News/edit';
import DealerListing from '../pages/AfterAuth/Dealers/index';
import DealerAdd from '../pages/AfterAuth/Dealers/add';
import DealerEdit from '../pages/AfterAuth/Dealers/edit';
import PagesAdd from '../pages/AfterAuth/Pages/add';
import PageEdit from "../pages/AfterAuth/Pages/edit";
import Page from '../pages/AfterAuth/Pages/index';
import ChangePassword from "../pages/AfterAuth/ChangePassword";
import Menu from '../pages/AfterAuth/Menu/index';
import MenuAdd from '../pages/AfterAuth/Menu/add';
import MenuEdit from '../pages/AfterAuth/Menu/edit';
import Section from '../pages/AfterAuth/Sections/index';
import SectionAdd from '../pages/AfterAuth/Sections/add';
import SectionEdit from '../pages/AfterAuth/Sections/edit';
import EnquiryNow from '../pages/AfterAuth/EnquireNow/index';
import EnquiryAdd from '../pages/AfterAuth/EnquireNow/EquiryAdd';
import Slider from '../pages/AfterAuth/Slider/index';
import SliderAdd from '../pages/AfterAuth/Slider/add';
import SliderEdit from '../pages/AfterAuth/Slider/edit';
import Reports from '../pages/AfterAuth/Reports/index';

function Loading() {
    return <div />;
}

const Dashboard = Loadable({
    loader: () => import("../pages/AfterAuth/Dashboard/Dashboard"),
    loading: Loading,
});

const routes = [
    {
        path: "/",
        exact: true,
        name: "Home",
        component: Dashboard,
        permissions: [],
    },
    {
      path: "/staging/events",
      exact: true,
      name: "Events",
      component: Event,
      permissions: [],
    },
    {
      path: "/staging/events/edit/:id",
      exact: true,
      name: "Event Edit",
      component: EventEdit,
      permissions: [],
    },
    {
      path: "/staging/events/add",
      exact: true,
      name: "Event Add",
      component: EventAdd,
      permissions: [],
    },
    {
      path: "/staging/news",
      exact: true,
      name: "News",
      component: News,
      permissions: [],
    },
    {
      path: "/staging/news/add",
      exact: true,
      name: "News Add",
      component: NewsAdd,
      permissions: [],
    },
    {
      path: "/staging/news/edit/:id",
      exact: true,
      name: "News Edit",
      component: NewsEdit,
      permissions: [],
    },
    {
      path: "/staging/dealer",
      exact: true,
      name: "Dealers",
      component: DealerListing,
      permissions: [],
    },
    {
      path: "/staging/dealer/add",
      exact: true,
      name: "Dealer Add",
      component: DealerAdd,
      permissions: [],
    },
    {
      path: "/staging/dealer/edit/:id",
      exact: true,
      name: "Dealer Edit",
      component: DealerEdit,
      permissions: [],
    },
    {
      path: "/staging/pages",
      exact: true,
      name: "Page List",
      component: Page,
      permissions: [],
    },
    {
      path: "/staging/pages/add",
      exact: true,
      name: "Page Add",
      component: PagesAdd,
      permissions: [],
    },
    {
      path: "/staging/pages/edit/:id",
      exact: true,
      name: "Page Edit",
      component: PageEdit,
      permissions: []
    },
    {
      path: "/staging/menus",
      exact: true,
      name: "Menu List",
      component: Menu,
      permissions: [],
    },
    {
      path: "/staging/menus/add",
      exact: true,
      name: "Menu Add",
      component: MenuAdd,
      permissions: [],
    },
    {
      path: "/staging/menus/edit/:id",
      exact: true,
      name: "Menu Edit",
      component: MenuEdit,
      permissions: []
    },
    {
      path: "/staging/sliders",
      exact: true,
      name: "Slider List",
      component: Slider,
      permissions: [],
    },
    {
      path: "/staging/sliders/add",
      exact: true,
      name: "Slider Add",
      component: SliderAdd,
      permissions: [],
    },
    {
      path: "/staging/sliders/edit/:id",
      exact: true,
      name: "Slider Edit",
      component: SliderEdit,
      permissions: []
    },
    {
      path: "/staging/sections",
      exact: true,
      name: "Section List",
      component: Section,
      permissions: [],
    },
    {
      path: "/staging/sections/add",
      exact: true,
      name: "Section Add",
      component: SectionAdd,
      permissions: [],
    },
    {
      path: "/staging/sections/edit/:id",
      exact: true,
      name: "Section Edit",
      component: SectionEdit,
      permissions: []
    },
    {
      path: "/staging/enquire-now",
      exact: true,
      name: "Enquiry Form List",
      component: EnquiryNow,
      permissions: []
    },
    {
      path: "/staging/enquire-now/add",
      exact: true,
      name: "Enquiry Add",
      component: EnquiryAdd,
      permissions: []
    },
    {
      path: "/staging/change-password",
      exact: true,
      name: "Change Password",
      component: ChangePassword,
      permissions: [],
    },
    {
      path: "/staging/reports",
      exact: true,
      name: "Reports",
      component: Reports,
      permissions: [],
    }
  ];
  
  export default routes;