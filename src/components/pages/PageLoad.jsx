import React, {useState, useEffect} from 'react'
import { apiRequest } from "../../api";
// impo

export const PageLoad = () => {
    const [content, setContent] = useState([])
    // const pathname = window.location.pathname;
    // const getPage = () => {
    //     apiRequest({
    //         method: "GET",
    //         url: `page/${pathname}`
    //     }).then(resp => {
    //         setContent(resp.data.body);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    // useEffect(() => {
    //     getPage();
    // },[])
  return (
    <section className="fluid bg-earth" style={{marginTop: "250px"}} dangerouslySetInnerHTML={{ __html: content }}></section>
  )
}
