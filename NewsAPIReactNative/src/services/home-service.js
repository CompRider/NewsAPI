import {Alert} from 'react-native';
import APIClient from '../APIClient';
import {NEWS_API_KEY} from '../config';

export default HomeService = {
  getNewsData: async category => {
    try {
      const response = await APIClient.get(
        `top-headlines?country=in&category=${category}&apiKey=${NEWS_API_KEY}`,
      );
      if (response?.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      error?.message && Alert.alert('Error', error.message);
      return null;
    }
  },
};
