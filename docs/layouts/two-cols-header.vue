<!--
  Usage:
```md
---
layout: two-cols-header
---
This spans both
::left::
# Left
This shows on the left
::right::
# Right
This shows on the right
```
-->

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout flex flex-col" :class="layoutClass">
    <div>
      <slot />
    </div>
    <div class="flex-1 flex flex-row gap-8">
      <div class="flex-1" :class="props.class">
        <slot name="left" />
      </div>
      <div class="flex-1" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
