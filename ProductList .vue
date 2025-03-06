<template>
    <div class="product-list">
      <h2>Products</h2>
      <div class="products">
        <div v-for="product in products" :key="product.id" class="product-card">
          <h3>{{ product.name }}</h3>
          <p>₱ {{ product.price }}</p>
          <button @click="addProduct(product.id)">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'ProductList',
    computed: {
      ...mapState(['products'])
    },
    methods: {
      ...mapActions(['addToCart']),
      addProduct(id) {
        this.addToCart(id);
      }
    }
  }
  </script>
  
  <style scoped>
  .product-list {
    padding: 1rem;
  }
  
  .products {
    /* Use CSS Grid for a multi-column layout */
    display: grid;
    /* Change 4 to 5 if you want five columns in each row */
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  
  .product-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    text-align: center;
  }
  
  /* Button styling */
  button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
  