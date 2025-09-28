<script setup>
import { reactive, computed, ref } from 'vue'

// 基本的な例
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 算出 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// 書き込み可能な 算出関数
const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter 関数
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter 関数
  // まれに「書き込み可能な」算出プロパティが必要な場合があります。
  // ↑ほんまか？
  set(newValue) {
    // 注意: ここでは、分割代入構文を使用しています。
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

function fixFullName() {
  fullName.value = 'azusa shirasu'
}

// 前回の値を取得する
const count = ref(2)

// この computed は、count が 3 以下の場合にはその値を返します。
// count が >= 4 の場合は、count が 3 以下になるまで、
// 条件を満たした最後の値が代わりに返されます
const alwaysSmall = computed((previous) => {
  if (count.value <= 3) {
    return count.value
  }

  return previous
})

function countNum(num) {
  count.value = num
}
</script>

<template>
  <section class="content section">
    <h1 class="title">算出プロパティ</h1>
    <!-- 基本的な例 -->
    <div class="container">
      <h3>基本的な例</h3>
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span>
    </div>
    <!-- 書き込み可能な 算出関数 -->
    <div class="container">
      <h3>書き込み可能な 算出関数</h3>
      <p>Full Name: {{ fullName }}</p>
      <button class="button is-danger" @click="fixFullName">
        fixFullName
      </button>
    </div>
    <!-- 前回の値を取得する -->
    <div class="container">
      <h3>前回の値を取得する</h3>
      <button class="button is-dark" @click="count++">
        count++:{{ count }}
      </button>
      <button class="button is-dark" @click="countNum(0)">
        count0
      </button>
      <button class="button is-dark" @click="countNum(100)">
        count100
      </button>
      <div>alwaysSmall:{{ alwaysSmall }}</div>
    </div>
    <!-- hoge -->
    <div class="container">
      <h3>hoge</h3>
    </div>
  </section>
</template>
