<template>
  <div>
    <div>
      <input v-model="inputData" />
      <button @click="getWord(inputData)">Pobierz dane</button>
    </div>
    <div>{{ word }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DictionaryService from "@/services/DictionaryService.js";

export default defineComponent({
  methods: {
    async getWord(word) {
      const wordFetch = await DictionaryService.getWord(word).then((r) =>
        r.json()
      );
      this.word = wordFetch;
    },
  },
  data() {
    return { inputData: "", word: {} };
  },
});
</script>
