import {proxy, subscribe} from "valtio";
import {proxyMap, subscribeKey} from "valtio/utils";
import {translateAll} from "@/apis/translate";

export const STATE_KEY = "config";
type PersistStore = {
  sourceLang: string,
  targetLang: Array<string>,
}

type ResultStore = {
  input: string,
  results: Map<string, string>
}

export const persistStore = proxy<PersistStore>({
  sourceLang: 'en',
  targetLang: ['zh-CN', 'fr', 'de', 'es', 'ja']
});

export function setTargetLang(arr: Array<string>) {
  persistStore.targetLang = arr;
}

export const resultStore = proxy<ResultStore>({
  input: '',
  results: proxyMap<string, string>()
});

subscribeKey(persistStore, 'sourceLang', v => {
  translateAll();
});

subscribe(persistStore, () => localStorage.setItem(STATE_KEY, JSON.stringify(persistStore)))
