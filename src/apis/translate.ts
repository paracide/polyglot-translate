import {persistStore, resultStore} from "@/store/store";
import {fetchFreeGoogle} from "@/apis/googleApi";

//translate one language by free Google Translate api
export function freeGoogleOne(targetLang: string) {
  //if input is empty, clear all results
  if (resultStore.input.trim() === '') {
    resultStore.results.clear();
    return;
  }
  return fetchFreeGoogle(persistStore.sourceLang, targetLang, resultStore.input)
    .then(response => resultStore.results.set(targetLang, response[0]))
    .catch(error => console.error('Translation error:', error));
}

//translate one language by Deepl api
export async function deeplOne(lang: string) {
  const baseUrl = '/api/translate'
  const queryParams = new URLSearchParams({
    text: resultStore.input,
    targetLang: lang
  });
  const url = `${baseUrl}?${queryParams.toString()}`;
  fetch(url)
    .then(response => response.json())
    .then(data => resultStore.results.set(lang, data.translations[0].text))
    .catch(error => "");
}

//translate all target languages
export function translateAll() {
  persistStore.targetLang.map(targetLang => freeGoogleOne(targetLang));
}
