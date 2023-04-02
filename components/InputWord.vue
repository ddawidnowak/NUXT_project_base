<template>
  <div>
    <input v-model="inputData" />
    <button @click="getWord(inputData)">Pobierz dane</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DictionaryService from "@/services/DictionaryService.js";

export default defineComponent({
  methods: {
    async getWord(word) {
      const dupa = await DictionaryService.getWord(word).then((r) => r.json());
      console.log(dupa);
    },
  },
  data() {
    return { inputData: "" };
  },
});
</script>
