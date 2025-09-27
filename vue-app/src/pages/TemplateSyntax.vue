<script setup>
const rawHtml = '<span style="color: red;">This is red text</span>';
const dynamicId = 'dynamic-id';
const id = 'id_dayo';
const isButtonDisabled = false
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
const number = 42;
const ok = true;
const message = "xxx-yyy-zzz"

const date = '2025-09-26T12:34:56Z'
function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}
function toTitleDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleString()
}

const seen = true;
const url = 'https://ja.vuejs.org/guide/essentials/template-syntax.html#directives';
</script>

<template>
  <section class="content section">
    <h1 class="title">リアクティビティーの基礎</h1>
    <!-- 生の HTML -->
    <div class="container">
      <h3>生の HTML</h3>
      <p>Using text interpolation: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>
    <!-- 属性バインディング -->
    <div class="container">
      <h3>属性バインディング</h3>
      <div v-bind:id="dynamicId">v-bind:id dynamicId</div>
      <div :id="dynamicId">:id dynamicId</div>
      <!-- :id="id" と同じ -->
      <div :id>:id</div>
      <!-- 同じように動きます -->
      <div v-bind:id>v-bind:id</div>
      <button class="button is-primary" :disabled="isButtonDisabled">Button</button>
      <div v-bind="objectOfAttrs">objectOfAttrs</div>
    </div>
    <!-- JavaScript の式を用いる -->
    <div class="container">
      <h3>JavaScript の式を用いる</h3>
      {{ number + 1 }}
      {{ ok ? 'YES' : 'NO' }}
      {{ message.split('-').reverse().join('_') }}
      <div :id="`list-${id}`">list-id</div>
      <time :title="toTitleDate(date)" :datetime="date">
        {{ formatDate(date) }}
      </time>
    </div>
    <!-- ディレクティブ -->
    <div class="container">
      <h3>ディレクティブ</h3>
      <p v-if="seen">Now you see me</p>
      <p v-if="!seen">Now you not see me</p>
      <div>
        <a v-bind:href="url"> template-syntax.html#directives </a>
      </div>
      <div>
        <!-- 省略記法 -->
        <a :href="url"> template-syntax.html#directives </a>
      </div>
    </div>
  </section>
</template>
