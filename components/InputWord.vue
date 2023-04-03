<template>
  <div>
    <div>
      <input v-model="inputData" />
      <button @click="getWord(inputData)">Pobierz dane</button>
    </div>
    <div>{{ word }}</div>
    <div v-if="word">
      <h1>{{ word.word }}</h1>
      <div v-for="meaning in word.meanings" :key="meaning.partOfSpeech">
        {{ meaning.definitions }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DictionaryService from "~/services/DictionaryService";
import { WordData } from "~/types/Word";

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
