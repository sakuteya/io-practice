<script setup>
import { ref } from 'vue'
import BlogPost from '@/components/BlogPost.vue.vue'
import CountButton from '@/atoms/CountButton.vue'
import AlertBox from '@/components/AlertBox.vue'
// コンポーネントの使用
// props の受け渡し
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

// イベントの購読
const postFontSize = ref(1)
const emit = defineEmits(['enlarge-text'])

emit('enlarge-text')
</script>

<template>
  <section class="content section">
    <h1 class="title">コンポーネントの基礎</h1>
    <!-- コンポーネントの使用 -->
    <div class="container">
      <h3>コンポーネントの使用</h3>
      <CountButton />
      <CountButton />
      <CountButton />
    </div>
    <!-- props の受け渡し -->
    <div class="container">
      <h3>props の受け渡し</h3>
      <BlogPost v-for="post in posts" :key="post.id" :title="post.title" />
    </div>
    <!-- イベントの購読 -->
    <div class="container">
      <h3>イベントの購読</h3>
      <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="postFontSize += 0.1" />
      </div>
    </div>
    <!-- スロットを使ったコンテンツ配信 -->
    <div class="container">
      <h3>スロットを使ったコンテンツ配信</h3>
      <AlertBox>
        Something bad happened.
      </AlertBox>
    </div>
  </section>
</template>
