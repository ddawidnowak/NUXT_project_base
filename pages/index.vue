<template>
  <div class="index_page">
    <InputWord />
    <WordList />
  </div>
</template>

<script>
import InputWord from "../components/InputWord.vue";
import WordList from "~/components/WordList.vue";

export default {
  name: "IndexPage",
  components: { InputWord, WordList },
};
</script>

<style lang="scss" scoped></style>
