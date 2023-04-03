<template>
  <div>
    <div>
      <input v-model="inputData" />
      <button @click="getWord(inputData)">Pobierz dane</button>
    </div>
    <div>{{ word }}</div>
    <div v-if="word">
      <h1>{{ word.word }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DictionaryService from "@/services/DictionaryService.js";

export interface WordData {
  license: any;
  meanings: Array<any>;
  phonetic: any;
  phonetics: any;
  sourceUrls: any;
  word: string;
}

export default defineComponent({
  methods: {
    async getWord(word: string) {
      const wordFetch = await DictionaryService.getWord(word).then((r) =>
        r.json()
      );
      this.word = wordFetch[0] as WordData;
      console.log(this.word);
    },
  },
  data() {
    return { inputData: "", word: null as WordData | null };
  },
});
</script>

<style scoped lang="scss">
h1 {
  font-size: 35px;
}
</style>
