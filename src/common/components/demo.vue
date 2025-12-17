<script setup lang="ts">
import Button from "./Button.vue"

interface Emits {
  (e: "change", value: string)
  (e: "update:pageIndex", value: number)
  (e: "update:pageSize", value: string, size: number)
}

const emits = defineEmits<Emits>()

function resetPage(value: string) {
  emits("update:pageSize", value, 10)
  emits("update:pageIndex", 1)
  emits("change", value)
}
provide("parentValue", "this is parent data")
</script>

<template>
  <div @click="resetPage('customer')" data-testid="button">
    button
  </div>
  <Button />
</template>
