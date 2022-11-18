import axios from 'axios';
import constant from '../config/config';
import { Link, withRouter } from 'react-router-dom';
// import Swal from "sweetalert2";

let API_BASE_URL = constant.baseUrl;
export const apiRequest = async ({
  method,
  url,
  queryParams = {},
  data = null,
  headers = {},
  onUploadProgress,
  onDownloadProgress,
  responseType = 'json',
  newBaseUrl = false
}) => {
  try {
    const baseURL = newBaseUrl ? '' : API_BASE_URL;
    const token = localStorage.getItem('accesstoken');
    // console.log('token', token);
    if (token == null) {
      // move to login
    }
    if (typeof token == 'string' && baseURL !== '') {
      headers.authorization = 'Bearer ' + token;
    }

    const response = await axios.request({
      baseURL: baseURL,
      method,
      url,
      params: queryParams,
      data,
      headers,
      onUploadProgress,
      onDownloadProgress,
      timeout: 3600 * 1000 //3600 seconds
    });
    
    return response.data;
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      // const errorMsg =
      //   error.response.data.message || 'Server is Down :(';
      // if (error && error.response && error.response.data) {
      //   return error.response.data;
      // }
      const errorMsg = error.response.data.statusCode ? error.response.data.statusCode < 500
          ? error.response.data.message
          : "Something went wrong" : error.response.data.message;
      const errorData = error.response.status < 500 ? error.response.data.data : {};
      return Promise.reject({ message: errorMsg, data: errorData });

    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */

      // console.log(error.request);
      // if (error.request.status == 0) {
      //   alert("No Internet")
      // }

      return Promise.reject({
        message: "Something went wrong! Please check your Internet Connection"
      });
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }
  }
};
