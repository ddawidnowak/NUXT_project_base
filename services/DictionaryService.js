class DictionaryService {
  async getWord(word) {
    const response = await window.fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return response;
  }
}
export default new DictionaryService();
