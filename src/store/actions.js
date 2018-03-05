import axios from 'axios';
import { API_BASE } from '../config';

import {
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
} from './mutation-types';

export const productActions = {
  allProducts({ commit }) {
    commit(ALL_PRODUCTS);
    //axios.get(`${API_BASE}/products`).then(response =>
      // commit(ALL_PRODUCTS_SUCCESS, response.data),
    //);
  },
};
