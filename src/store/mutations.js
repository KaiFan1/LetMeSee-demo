import {  
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ERROR_MSG
} from './mutation-types';

export const productMutations = {
  [ALL_PRODUCTS](state) {
    state.showLoader = true
    // this[]
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    state.showLoader = false
    state.products = payload
  },
}