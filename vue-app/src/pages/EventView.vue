<script setup>
import { ref } from 'vue';

// インラインハンドラー下でのメソッドの呼び出し
function say(message) {
  alert(message)
}

// インラインハンドラーのイベント引数へのアクセス
function warn(message, event) {
  // これでネイティブイベントにアクセスできるようになりました
  if (event) {
    event.preventDefault()
  }
  alert(message)
}

// イベント修飾子
function doThis() {
  alert('doThis')
}
function doThat() {
  alert('doThat')
}
function onSubmit() {
  alert('onSubmit')
}

// キー修飾子
function onPageDown() {
  alert('onPageDown')
}
const hoge = ref('');
function clear() {
  hoge.value = '';
}
function doSomething() {
  alert('doSomething')
}
</script>

<template>
  <section class="content section">
    <h1 class="title">イベントハンドリング</h1>
    <!-- インラインハンドラー下でのメソッドの呼び出し -->
    <div class="container">
      <h3>インラインハンドラー下でのメソッドの呼び出し</h3>
      <button @click="say('hello')">Say hello</button>
      <button @click="say('bye')">Say bye</button>
    </div>
    <!-- インラインハンドラーのイベント引数へのアクセス -->
    <div class="container">
      <h3>インラインハンドラーのイベント引数へのアクセス</h3>
      <!-- インラインでアロー関数を使用する場合 -->
      <button @click="(event) => warn('Form cannot be submitted yet.', event)">
        Submit
      </button>
    </div>
    <!-- イベント修飾子 -->
    <div class="container">
      <h3>イベント修飾子</h3>
      <!-- クリックイベントの伝搬は停止します -->
      <a @click.stop="doThis">doThis</a>

      <!-- サブミットイベントはもはやページをリロードしません -->
      <form @submit.prevent="onSubmit">onSubmit</form>

      <!-- 修飾子は繋げることができます -->
      <a @click.stop.prevent="doThat">doThat</a>

      <!-- 修飾子のみ -->
      <form @submit.prevent>修飾子のみ</form>

      <!-- event.target が要素それ自身であるときだけハンドラーが呼び出されます-->
      <!-- つまり、子要素からではありません -->
      <div @click.self="doThat">doThat...</div>
    </div>
    <!-- キー修飾子 -->
    <div class="container">
      <h3>キー修飾子</h3>
      <div>onPageDown
        <input @keyup.page-down="onPageDown" />
      </div>
      <div>Alt + Enter
        <!-- Alt + Enter -->
        <input @keyup.alt.enter="clear" v-model="hoge" />
      </div>
      <!-- Ctrl + Click -->
      <div @click.ctrl="doSomething">Do something</div>
    </div>
    <!-- hoge -->
    <div class="container">
      <h3>hoge</h3>
    </div>
  </section>
</template>
