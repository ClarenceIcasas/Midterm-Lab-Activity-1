import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Helmet', price: 1100 },
      { id: 2, name: 'Jersey', price: 450 },
      { id: 3, name: 'Bibshort', price: 550 },
      { id: 4, name: 'Bartape', price: 150 },
      { id: 5, name: 'Dropbar', price: 800 },
      { id: 6, name: 'Handlebar', price: 700 },
      { id: 7, name: 'Stem', price: 650 },
      { id: 8, name: 'Seatpost', price: 750 },
      { id: 9, name: 'Saddle', price: 600 },
      { id: 10, name: 'Rim', price: 1000 },
      { id: 11, name: 'Tire', price: 1200 },
      { id: 12, name: 'Interior', price: 200 },
    ],
    cart: {}
  },
  mutations: {
    ADD_TO_CART(state, productId) {
      if (state.cart[productId]) {
        state.cart[productId]++;
      } else {
        state.cart[productId] = 1;
      }
    },
    REMOVE_FROM_CART(state, productId) {
      if (state.cart[productId]) {
        state.cart[productId]--;
        if (state.cart[productId] <= 0) {
          delete state.cart[productId];
        }
      }
    }
  },
  actions: {
    addToCart({ commit }, productId) {
      commit('ADD_TO_CART', productId);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    }
  },
  getters: {
    cartItems(state) {
      return Object.entries(state.cart).map(([productId, quantity]) => {
        const product = state.products.find(p => p.id == productId);
        return {
          ...product,
          quantity
        };
      });
    },
    totalItems(state) {
      return Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
    },
    totalPrice(state, getters) {
      return getters.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  }
});
