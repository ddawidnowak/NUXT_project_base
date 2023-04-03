<template>
  <div>
    <div>
      <input v-model="inputData" />
      <button @click="getWord(inputData)">Pobierz dane</button>
    </div>
    <div v-if="word">
      <h1>{{ word.word }}</h1>
      <h4>PHONETICS:</h4>
      <span
        v-for="(phonetics, id) in word.phonetics"
        :key="id"
        class="phonetics"
      >
        {{ phonetics.text }}
      </span>
      <div
        v-for="meaning in word.meanings"
        :key="meaning.partOfSpeech + meaning.definitions.toString()"
      >
        <div class="partOfSpeech">
          <span>{{ meaning.partOfSpeech }}</span>
        </div>
        <div class="desc">
          <div
            v-for="definition in meaning.definitions"
            :key="definition.definition"
          >
            <div class="def">
              {{ definition.definition }}
            </div>
            <div v-if="definition.example" class="example">
              <p>Example:</p>
              <p>{{ definition.example }}</p>
            </div>
          </div>
          <div
            v-if="meaning.synonyms && meaning.synonyms.length !== 0"
            class="synonyms"
          >
            <p>Synonyms:</p>
            <span v-for="synonym in meaning.synonyms" :key="synonym">{{
              synonym
            }}</span>
          </div>
        </div>
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
  font-size: 45px;
  text-transform: uppercase;
  font-weight: bold;
}
.phonetics {
  color: $primary;
  padding: 7px;
}
h4 {
  color: gray;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
}
.partOfSpeech {
  padding: 22px 0px 12px 0px;
  > * {
    text-transform: uppercase;
    font-weight: bold;
    border: 2px solid $primary;
    border-radius: 26px;
    padding: 0.2em 12px;
    color: $primary;
    font-size: 25px;
  }
}
.desc {
  padding: 20px;
}
.def {
  font-weight: bold;
  font-style: italic;
  padding: 12px 0 12px 0;
}
.example {
  > p {
    padding: 16px 0 16px 0;
    color: $primary;
    &:nth-last-of-type(1) {
      padding: 16px 26px 16px;
      color: black;
    }
  }
}
.synonyms {
  > p {
    padding: 16px 0 16px 0;
    color: $primary;
  }
  > span {
    border: 1px solid black;
    border-radius: 26px;
    padding: 0.2em 12px;
  }
}
</style>
