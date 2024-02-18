import {persistStore, resultStore} from "@/store/store";

async function goGoogle(originalLang: string, targetLang: string, text: string): Promise<string[]> {
  const baseUrl = "https://clients5.google.com/translate_a/t";
  const queryParams = new URLSearchParams({
    client: "dict-chrome-ex",
    sl: originalLang,
    tl: targetLang,
    q: text
  });
  const url = `${baseUrl}?${queryParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return await response.json() as Promise<string[]>;
}

export function translateOne(targetLang: string) {
  if (resultStore.input.trim() === '') {
    resultStore.results.clear();
    return; // 直接返回，避免执行空的翻译请求
  }
  return goGoogle(persistStore.origLang, targetLang, resultStore.input)
    .then(response => resultStore.results.set(targetLang, response[0]))
    .catch(error => console.error('Translation error:', error));
}

export function translateAll() {
  persistStore.targetLang.map(targetLang =>
    translateOne(targetLang)
  );
}
