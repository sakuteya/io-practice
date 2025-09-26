<script setup>

const model = defineModel()

</script>

<template>
  <div class="columns">
    <div class="column is-half">
      <!-- {{ label }} -->
      入力欄3
    </div>
    <div class="column">
      <input v-model="model" type="text" class="input">
    </div>
  </div>
</template>