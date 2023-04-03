<template>
  <div v-if="wordList">
    <WordListElement
      v-for="word in wordList"
      :key="word"
      :word="word"
    ></WordListElement>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WordList } from "~/types/WordList";
import WordListElement from "./WordListElement.vue";

export default defineComponent({
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      wordList: (require("../assets/data/words.json") as WordList).words,
    };
  },
  components: { WordListElement },
});
</script>

<style scoped lang="scss"></style>
