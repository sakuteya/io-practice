<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.fullPath)
</script>

<template>

  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
  </head>
  <!-- 1. ヘッダ -->
  <!-- heroコンポーネント -->
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          heroを使ったタイトル
        </h1>
        <h2 class="subtitle is-6">
          <strong>Current route path:</strong>{{ route.fullPath }}
        </h2>
        <h2 class="subtitle is-6">
          <RouterLink to="/">Go to Home</RouterLink>
        </h2>
      </div>
    </div>
  </section>
  <!-- 2. 本文 -->
  <RouterView />
  <!-- 3. フッタ -->
  <!-- footerコンポーネント -->
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        ここはfooterです。
      </p>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
