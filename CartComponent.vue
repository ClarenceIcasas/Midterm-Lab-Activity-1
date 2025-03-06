<template>
    <div class="cart">
      <h2>Shopping Cart</h2>
      <div v-if="cartItems.length">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p>₱ {{ item.price }} x {{ item.quantity }}</p>
          </div>
          <button @click="removeItem(item.id)">Remove</button>
        </div>
        <div class="cart-summary">
          <p>Total Items: {{ totalItems }}</p>
          <p>Total Price: ₱ {{ totalPrice }}</p>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'CartComponent',
    computed: {
      ...mapGetters(['cartItems', 'totalItems', 'totalPrice'])
    },
    methods: {
      ...mapActions(['removeFromCart']),
      removeItem(id) {
        this.removeFromCart(id);
      }
    }
  }
  </script>
  
  <style scoped>
  .cart {
    padding: 1rem;
    border-top: 1px solid #ccc;
    margin-top: 2rem;
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
  }
  .item-details h3 {
    margin: 0;
  }
  button {
    padding: 0.3rem 0.6rem;
    border: none;
    background-color: #dc3545;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #c82333;
  }
  .cart-summary {
    margin-top: 1rem;
    font-weight: bold;
  }
  </style>
  