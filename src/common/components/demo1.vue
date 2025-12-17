<script setup lang="ts">
import { onMounted } from "vue"
import SubComponent from "./sub-demo.vue"

defineProps<{
  msg: string
}>()
onMounted(() => {
  console.log(`HelloWorld is now mounted.`)
})
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h3 data-testid="title">
      title
    </h3>
    <div v-if="false" data-testid="if">
      if button
    </div>
    <SubComponent />
  </div>
</template>
