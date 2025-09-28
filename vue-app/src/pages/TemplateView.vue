<script setup>
import { ref, useTemplateRef, onMounted } from 'vue'

// 参照へのアクセス
// 最初の引数は、テンプレートの ref の値に一致させる必要があります。
const input = useTemplateRef('my-input')

onMounted(() => {
  input.value.focus()
})

// v-for の中の参照
const list = ref(['foo', 'bar', 'baz'])

const itemRefs = useTemplateRef('items')

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <section class="content section">
    <h1 class="title">テンプレート参照</h1>
    <!-- 参照へのアクセス -->
    <div class="container">
      <h3>参照へのアクセス</h3>
    </div>
    <input ref="my-input" />
    <!-- v-for の中の参照 -->
    <div class="container">
      <h3>v-for の中の参照</h3>
      <ul>
        <li v-for="item in list" ref="items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
