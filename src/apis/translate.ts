import {persistStore, resultStore} from "@/store/store";
import {goGoogle} from "@/apis/googleApi";

export function translateOne(targetLang: string) {
  if (resultStore.input.trim() === '') {
    resultStore.results.clear();
    return; //
  }
  return goGoogle(persistStore.sourceLang, targetLang, resultStore.input)
    .then(response => resultStore.results.set(targetLang, response[0]))
    .catch(error => console.error('Translation error:', error));
}

export function translateAll() {
  persistStore.targetLang.map(targetLang =>
    translateOne(targetLang)
  );
}
