<script setup>

// 基本的な使い方
import { ref } from 'vue';
const checked = ref(false);
const checkedNames = ref([])
const picked = ref('');
const selected = ref('');

const selectedFor = ref('A')

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])

// 値のバインディング
const pickedRadio = ref('a')
const toggle = ref(true)
const selectedABC = ref('abc')
</script>

<template>
  <section class="content section">
    <h1 class="title">フォーム入力バインディング</h1>
    <!-- 基本的な使い方 -->
    <div class="container">
      <h3>基本的な使い方</h3>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <div>Picked: {{ picked }}</div>

      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>

      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <div>Selected: {{ selected }}</div>

      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>

      <div>selectedFor: {{ selectedFor }}</div>

      <select v-model="selectedFor">
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <!-- 値のバインディング -->
    <div class="container">
      <h3>値のバインディング</h3>
      <div>
        <!-- チェックされているとき `picked` は文字列 "a" -->
        <input type="radio" name="pickedRadio" id="a" v-model="pickedRadio" value="a" />
        <label for="a">a</label>
        <input type="radio" name="pickedRadio" id="b" v-model="pickedRadio" value="b" />
        <label for="b">b</label>
      </div>
      <div>
        <!-- `toggle` は true か false のいずれか -->
        <input type="checkbox" v-model="toggle" />
      </div>
      <div>
        <!-- 最初のオプションが選択されているとき `selected` は文字列 "abc" -->
        <select v-model="selectedABC">
          <option value="abc">ABC</option>
          <option value="xyz">XYZ</option>
        </select>
      </div>
    </div>
  </section>
</template>
