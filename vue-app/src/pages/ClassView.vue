<script setup>
import { ref, computed, reactive } from 'vue'

// HTML クラスのバインディング
const isButton = ref(true)
const isPrimary = ref(true)

const classObject = computed(() => ({
  'button': isButton.value,
  'input': !isButton.value,
  'is-primary': isPrimary.value,
  'is-danger': !isPrimary.value,
}))

const styleObject = reactive({
  color: 'red',
  fontSize: '30px'
})

</script>

<template>
  <section class="content section">
    <h1 class="title">クラスとスタイルのバインディング</h1>
    <!-- HTML クラスのバインディング -->
    <div class="container">
      <h3>HTML クラスのバインディング</h3>
      <input :class="classObject" value="button or input" />
      <div>
        <button class="button is-dark" @click="isButton = !isButton">
          button
        </button>
      </div>
      <div>
        <button class="button is-dark" @click="isPrimary = !isPrimary">
          isPrimary
        </button>
      </div>
    </div>
    <!-- インラインスタイルのバインディング -->
    <div class="container">
      <h3>インラインスタイルのバインディング</h3>
      <div :style="styleObject">styleObject</div>
      <h1 style="color: red" :style="'font-size: 1em'">hello</h1>
    </div>
  </section>
</template>
