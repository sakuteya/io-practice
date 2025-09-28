<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.fullPath)
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <RouterLink to="/hoge-fuga">Go to HogeFuga</RouterLink>
      </div>
      <div class="columns">
        <RouterLink to="/template-syntax">テンプレート構文</RouterLink>
      </div>
      <div class="columns">
        <RouterLink to="/reactivity-fundamentals">リアクティビティーの基礎</RouterLink>
      </div>
      <div class="columns">
        <RouterLink to="/computed">算出プロパティ</RouterLink>
      </div>
      <div class="columns">
        <RouterLink to="/class-and-style">クラスとスタイルのバインディング</RouterLink>
      </div>
      <div class="columns">
        <RouterLink to="/conditional">条件付きレンダリング</RouterLink>
      </div>
      <div class="columns">
        <RouterLink to="/list">リストレンダリング</RouterLink>
      </div>
      <div class="columns">
        <RouterLink to="/tmp">TmpView</RouterLink>
      </div>
    </div>
  </section>
</template>
