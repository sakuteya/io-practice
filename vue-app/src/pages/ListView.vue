<script setup>
import { ref, reactive, computed } from 'vue';

// v-for
const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

// v-for をオブジェクトに適用する
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

// v-for と v-if を組み合わせる場合
const todos = ref([
  { id: 1, name: 'Do the dishes', isComplete: true },
  { id: 2, name: 'Take out the trash', isComplete: false },
  { id: 3, name: 'Mow the lawn', isComplete: false }
])

// フィルタリング/並べ替えの結果を表示する
const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})
</script>

<template>
  <section class="content section">
    <h1 class="title">リストレンダリング</h1>
    <!-- v-for -->
    <div class="container">
      <h3>v-for</h3>
      <li v-for="(item, index) in items" :key="item.message">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </div>
    <!-- v-for をオブジェクトに適用する -->
    <div class="container">
      <h3>v-for をオブジェクトに適用する</h3>
      <ul>
        <li v-for="(value, key, index) in myObject" :key="value">
          {{ index }}. {{ key }}: {{ value }}
        </li>
      </ul>
    </div>
    <!-- v-for で範囲を使用する -->
    <div class="container">
      <h3>v-for で範囲を使用する</h3>
      <span v-for="n in 10" :key="n">{{ n }}</span>
    </div>
    <!-- v-for と v-if を組み合わせる場合 -->
    <div class="container">
      <h3>v-for と v-if を組み合わせる場合</h3>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="!todo.isComplete">
          {{ todo.id }} - {{ todo.name }}
        </li>
      </template>
    </div>
    <!-- フィルタリング/並べ替えの結果を表示する -->
    <div class="container">
      <h3>フィルタリング/並べ替えの結果を表示する</h3>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </div>
  </section>
</template>
