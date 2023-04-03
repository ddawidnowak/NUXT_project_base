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
  color: red;
}
</style>
