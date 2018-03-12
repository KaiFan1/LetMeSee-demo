// initial state
const state = {
  added: [],
  checkoutStatus: null,
};

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,

  cartProducts: state => state.added,

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
};

// actions
const actions = {
  // add item to cart
  addProductToCart({ commit }, item) {
    const cartItem = state.added.find(product => product.id === item.product.id);
    if (!cartItem) {
      const order = item.product;
      order.quantity = item.quantity;
      commit('pushProductToCart', order);
    } else {
      cartItem.quantity += item.quantity;
      commit('updateOrderNumber', cartItem);
    }
  },

  // remove item from the cart
  removeProductFromCart({ commit }, item) {
    commit('removeItemFromCart', item);
  },
  
};

// mutations
const mutations = {
  pushProductToCart(state, item) {
    state.added.push(item);
  },

  updateOrderNumber(state, item) {
    state.added.find(n => n.id === item.id).quantity = item.quantity;
  },

  removeItemFromCart(state, item) {
    const itemIndex = state.added.findIndex(p => p.id === item.id);
    state.added.splice(itemIndex, 1);
  },

  setCartItems(state, { items }) {
    state.added = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

