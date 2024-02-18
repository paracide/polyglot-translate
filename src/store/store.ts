import {proxy} from "valtio";
import {proxyMap, subscribeKey} from "valtio/utils";
import {translateAll} from "@/apis/googleApi";

type PersistStore = {
    origLang: string,
    targetLang: Array<string>,
}

type ResultStore = {
    input: string,
    results: Map<string, string>
}

export const persistStore = proxy<PersistStore>({
    origLang: 'en',
    targetLang: ['zh-CN']
});

export const resultStore = proxy<ResultStore>({
    input: '',
    results: proxyMap<string, string>()
});

subscribeKey(persistStore, 'origLang', v => {
    translateAll();
});
