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
          subtitle
        </h2>
      </div>
    </div>
  </section>
  <div>
    <HogeFuga msg="from App msg" />
  </div>
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

<script>
import HogeFuga from './components/HogeFuga.vue'

export default {
  name: 'App',
  components: {
    HogeFuga
  }
}

</script>

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
