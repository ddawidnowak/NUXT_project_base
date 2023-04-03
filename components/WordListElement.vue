<template>
  <div class="word">{{ word }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    word: String,
  },
});
</script>

<style scoped lang="scss">
.word {
  border: 1px solid $primary;
  border-radius: 26px;
  padding: 0.8em 16px;
  transition: background-color 0.4s ease-out 3ms;
}
.word:hover {
  background-color: $primary;
  color: white;
}
</style>
