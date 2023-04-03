export interface WordData {
  meanings: Array<MeaningsData>;
  phonetic: any;
  phonetics: Array<PhoneticsData>;
  sourceUrls: any;
  word: string;
}

export interface MeaningsData {
  definitions: Array<any>;
  partOfSpeech: string;
  synonyms: Array<string> | null;
}

export interface DefinitionsData {
  definition: string;
  example: string;
}

export interface PhoneticsData {
  audio: string;
  sorceUrl: string;
  text: string;
}
