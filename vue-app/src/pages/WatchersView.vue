<script setup>
import { ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// watch 関数は ref を直接扱えます
watch(question, async (newQuestion, oldQuestion) => {
  console.log(`question changed from "${oldQuestion}" to "${newQuestion}"`)
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})

// watchEffect()
const todoId = ref(1)
const data = ref(null)

watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
</script>

<template>
  <section class="content section">
    <h1 class="title">ウォッチャー</h1>
    <!-- 基本の例 -->
    <div class="container">
      <h3>基本の例</h3>
      <p>
        Ask a yes/no question:
        <input v-model="question" :disabled="loading" />
      </p>
      <p>{{ answer }}</p>
    </div>
    <!-- watchEffect() -->
    <div class="container">
      <h3>watchEffect()</h3>
      <p>
        Todo ID:
        <input type="number" v-model.number="todoId" min="1" max="200" />
      </p>
      <div>{{ data }}</div>
    </div>
  </section>
</template>
