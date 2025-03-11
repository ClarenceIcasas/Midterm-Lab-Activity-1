import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
      { id: 4, name: 'Product 4', price: 40 },
      { id: 5, name: 'Product 5', price: 50 },
      { id: 6, name: 'Product 6', price: 60 },
      { id: 7, name: 'Product 7', price: 70 },
      { id: 8, name: 'Product 8', price: 80 },
      { id: 9, name: 'Product 9', price: 90 },
      { id: 10, name: 'Product 10', price: 100 },
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
