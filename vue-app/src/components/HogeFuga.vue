<template>
  <div class="hello">
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
        <!-- <div class="columns">
          <div class="column is-half">
            入力欄2
          </div>
          <div class="column">
            <input type="text" class="input" v-model="textInput" />
          </div>
        </div> -->
      </div>
      <CountButton />
      <!-- <button-counter></button-counter> -->
    </section>
  </div>
</template>

<script>
import CountButton from '../atoms/CountButton.vue'

export default {
  name: 'HogeFuga',
  components: {
    CountButton
  },
  props: {
    msg: String
  }
}
</script>
