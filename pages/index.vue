<template>
  <div class="index_page">
    <InputWord class="sidebar__main" />
    <aside class="sidebar__sidebar"><WordList /></aside>
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

<style lang="scss" scoped>
.index_page {
  display: flex;
  max-width: $content-width-pc;
  height: 700px;
  margin: auto;
}
.sidebar__main {
  min-height: unset;
  padding: 2rem;
}
.sidebar__sidebar {
  margin: 2rem;
  width: $list-width-pc;
  overflow-y: scroll;
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: $primary;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
