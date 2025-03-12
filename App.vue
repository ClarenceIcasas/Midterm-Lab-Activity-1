<template>
  <div id="app" class="container">
    <header>
      <h1>Kurarensu Cycles</h1>
    </header>
    <main>
      <!-- Product list on top -->
      <div class="content">
        <ProductList />
        <Cart />
      </div>
    </main>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import Cart from './components/CartComponent.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    Cart
  }
}
</script>

<style>
/* Container styling */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
  text-align: center;
}

/* Keep the header as it is */
header {
  margin-bottom: 2rem;
}

/* Stack the product list and cart vertically */
.content {
  display: flex;
  flex-direction: column;  /* Stack elements vertically */
  align-items: center;     /* Center elements horizontally */
  gap: 2rem;               /* Space between sections */
  width: 100%;
}

/* Keep original styles for ProductList */
.product-list {
  width: 100%;
}

/* Keep original styles for Cart */
.cart {
  width: 100%;
}
</style>