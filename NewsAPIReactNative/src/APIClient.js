import axios from 'axios';
import {Alert} from 'react-native';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'https://newsapi.org/v2/';

axios.interceptors.request.use(
  request => {
    // console.log('[axios][request] - ', request)
    // Edit request config
    return request;
  },
  error => {
    console.error('[axios][request][error] - ', error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    // console.log("[axios][response] - ",response)
    // Edit response config
    return response;
  },
  error => {
    console.error('[axios][response][error] - ', error);
    return Promise.reject(error);
  },
);

export default class APIClient {
  static async get(url, params = null, showError = true) {
    return await axios.get(url, {params}).catch(error => {
      if (showError) {
        this.errorHandler(error);
      } else {
        throw error;
      }
    });
  }

  static async post(url, body, config, showError = true) {
    return await axios.post(url, body, config).catch(error => {
      if (showError) {
        this.errorHandler(error);
      } else {
        throw error;
      }
    });
  }

  static async put(url, body, showError = true) {
    return await axios.put(url, body).catch(error => {
      if (showError) {
        this.errorHandler(error);
      } else {
        throw error;
      }
    });
  }

  static async delete(url, showError = true) {
    return await axios.delete(url).catch(error => {
      if (showError) {
        this.errorHandler(error);
      } else {
        throw error;
      }
    });
  }

  static async errorHandler(error) {
    if (error) {
      // TODO: all possible error handling
      if (error.message) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Error', 'Something went wrong, please try later.');
      }
    } else {
      Alert.alert('Error', 'Something went wrong, please try later.');
    }
  }
}
