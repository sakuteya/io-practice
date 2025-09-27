<script setup>
import { ref, nextTick, reactive } from 'vue'

// リアクティブな状態を宣言する
const count = ref(0)
function increment() {
  count.value++
}

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // これらは期待通りに動作します。
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

async function increment2() {
  count.value++
  await nextTick()
  // DOM が更新されました
}

// reactive()
const state = reactive({ count: 0 })

const raw = {}
const proxy = reactive(raw)

// プロキシはオリジナルと同じではありません。
console.log('proxy === raw')
console.log(proxy === raw) // false
// 同じオブジェクトに対して reactive() を呼び出すと、同じプロキシが返されます
console.log('reactive(raw) === proxy')
console.log(reactive(raw) === proxy) // true
// プロキシに対して reactive() を呼び出すと、プロキシ自体が返されます
console.log('reactive(proxy) === proxy')
console.log(reactive(proxy) === proxy) // true


// 追加の ref アンラップの詳細
const count2 = ref(0)
const state2 = reactive({
  count2
})

console.log('state2.count2') // 0
console.log(state2.count2) // 0

state2.count2 = 1
console.log('count2.value') // 1
console.log(count2.value) // 1

const otherCount = ref(2)

state2.count2 = otherCount
console.log('state2.count2') // 2
console.log(state2.count2) // 2
// 元の ref は state2.count2 から切り離されました
console.log('count2.value') // 1
console.log(count2.value) // 1

</script>

<template>
  <section class="content section">
    <h1 class="title">リアクティビティーの基礎</h1>
    <!-- リアクティブな状態を宣言する -->
    <div class="container">
      <h3>リアクティブな状態を宣言する</h3>
      <button class="button is-info" @click="increment">
        increment:{{ count }}
      </button>
      <button class="button is-info" @click="mutateDeeply">
        mutateDeeply
      </button>
      <div>obj.nested.count:{{ obj.nested.count }}</div>
      <div>obj.arr:{{ obj.arr }}</div>
      <button class="button is-info" @click="increment2">
        increment2:{{ count }}
      </button>
    </div>
    <!-- reactive() -->
    <div class="container">
      <h3>reactive()</h3>
      <button class="button is-dark" @click="state.count++">
        {{ state.count }}
      </button>
    </div>
    <!-- 追加の ref アンラップの詳細 -->
    <div class="container">
      <h3>追加の ref アンラップの詳細</h3>
    </div>
    <!-- hoge -->
    <div class="container">
      <h3>hoge</h3>
    </div>
  </section>
</template>
