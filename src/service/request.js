/* eslint-disable */
import axios from "axios";

export default class Request {
  constructor(headers) {
    this.http = axios.create({
      baseURL: headers.API_URL,
      withCredentials: false,
      timeout: headers.timeout ? headers.timeout : 0,
    });

    const getMobileHeader = (config) => {
      Object.assign(config.headers, {
        "okta-accesstoken": headers.TOKEN ? `${headers.TOKEN}` : "",
      });

      return config;
    };

    const getWebHeader = (config) => {
      if (headers.TOKEN != "undefined") {
        Object.assign(config.headers, {
          "okta-accesstoken": headers.TOKEN ? `${headers.TOKEN}` : "",
        });
      }

      return config;
    };

    const handleWebUnhandledRequest = (error) => {
      if (headers.API_PLATFORM === constants.Web) {
        console.log("Request Failed:", error);
        setAPIUnhandledResponse.unhandledResponse(error);
      } else {
        return Promise.reject(error);
      }
    };

    this.http.interceptors.request.use((config) => {
      config.headers = {
        "Content-Type": "application/json",
        "x-api-key": headers.API_KEY,
        siteId: headers.API_SITE_ID,
        storeId: headers.STOREID,
      };

      return config;
    });

    this.http.interceptors.response.use(
      function (response) {
        if (response.status !== responseStatus.OK) {
          return "";
        } else {
          return response;
        }
      },
      function (error) {
        if (error.response) {
          handleWebUnhandledRequest(error);
        }
      }
    );
    for (const method of ["get", "post", "put", "delete"]) {
      this[method] = this.http[method];
    }
  }
}
