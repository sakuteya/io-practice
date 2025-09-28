<script setup>
import { ref } from 'vue';
import ColumnInput from '../atoms/ColumnInput.vue'

const type = ref('');

</script>

<template>
  <section class="content section">
    <h1 class="title">条件付きレンダリング</h1>
    <!-- v-else-if -->
    <div class="container">
      <h3>v-else-if</h3>
      <ColumnInput v-model="type" />
      <div v-if="type === 'A'">
        A
      </div>
      <div v-else-if="type === 'B'">
        B
      </div>
      <div v-else-if="type === 'C'">
        C
      </div>
      <div v-else>
        Not A/B/C
      </div>
    </div>
    <!-- <template> に v-if を適用する -->
    <div class="container">
      <h3>template に v-if を適用する</h3>
      <template v-if="true">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </template>
    </div>
    <!-- hoge -->
    <div class="container">
      <h3>hoge</h3>
    </div>
  </section>
</template>
