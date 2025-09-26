<script setup>
import { ref } from 'vue';

import CountButton from '../atoms/CountButton.vue'
import ColumnInput from '../atoms/ColumnInput.vue'

// const props = defineProps({
defineProps({
  msg: {
    type: String,
    required: true,
  }
});

const textInput2 = ref('');
const textInput3 = ref('');

</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 2. 本文 -->
    <!-- レイアウトのためのsection、containerコンポーネント -->
    <section class="section">
      <div class="container">
        セクションとコンテナに囲まれた本文です。
        <div class="columns">
          <div class="column is-half">
            入力欄1
          </div>
          <div class="column">
            <input type="text" class="input">
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            入力欄2
          </div>
          <div class="column">
            <input type="text" class="input" v-model="textInput2" />
          </div>
        </div>
        <ColumnInput v-model="textInput3" />
        <CountButton />
      </div>
      <!-- <button-counter></button-counter> -->
    </section>
  </div>
</template>