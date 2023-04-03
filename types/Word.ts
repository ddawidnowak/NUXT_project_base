export interface WordData {
  meanings: Array<MeaningsData>;
  phonetic: any;
  phonetics: any;
  sourceUrls: any;
  word: string;
}

export interface MeaningsData {
  definitions: Array<any>;
  partOfSpeech: string;
}
