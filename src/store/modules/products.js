
// initial state
const state = {
  Products: [],
  Product: {},
};

// getters
const getters = {
  allProducts: state => state.Products,
  getProductByID: state => state.Product,
};

// actions
const actions = {
  getAllProducts({ commit }) {
    commit('setProducts', products);
  },
  getProductByID({ commit }, id) {
    commit('setProductByID', products[id - 1]);
  },
};

// mutations
const mutations = {
  setProducts(state, payload) {
    state.Products = payload;
  },
  setProductByID(state, payload) {
    state.Product = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

const products = [
  {
    id: 1,
    manId: 3,
    name: 'Samsung S7 Edge',
    price: 659,
    inventory: 11,
    image: 'http://www.brandsmartusa.com/images/product/large/20208018.jpg',
    description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
    manufacturer: {
      id: 3,
      name: 'Samsung',
    },
  },
  {
    id: 2,
    manId: 1,
    name: 'iPhone 7',
    price: 769,
    inventory: 111,
    image: 'http://www.brandsmartusa.com/images/product/large/20217366.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
    manufacturer: {
      id: 1,
      name: 'Apple',
    },
  },
  {
    id: 3,
    name: 'Xperia XZ',
    price: 649,
    inventory: 115,
    image: 'http://www.brandsmartusa.com/images/product/large/20222515.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
    manufacturer: {
      id: 2,
      name: 'Sony',
    },
  },
  {
    id: 4,
    manId: 3,
    name: 'Samsung S7 Edge',
    price: 659,
    inventory: 1144,
    image: 'http://www.brandsmartusa.com/images/product/large/20208018.jpg',
    description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
    manufacturer: {
      id: 3,
      name: 'Samsung',
    },
  },
  {
    id: 5,
    manId: 1,
    name: 'iPhone 7',
    price: 769,
    inventory: 1154,
    image: 'http://www.brandsmartusa.com/images/product/large/20217366.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
    manufacturer: {
      id: 1,
      name: 'Apple',
    },
  },
  {
    id: 6,
    name: 'Xperia XZ',
    price: 649,
    inventory: 1134,
    image: 'http://www.brandsmartusa.com/images/product/large/20222515.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
    manufacturer: {
      id: 2,
      name: 'Sony',
    },
  },
];
