import {proxy} from "valtio";
import {proxyMap, subscribeKey} from "valtio/utils";
import {translateAll} from "@/apis/googleApi";

type storageStore = {
    lang: string,
    targetLang: Array<string>,
}

type resultStore = {
    input: string,
    results: Map<string, string>
}

export const storageStore = proxy<storageStore>({
    lang: 'en',
    targetLang: ['zh-CN'],
});

export const resultStore = proxy<resultStore>({
    input: '',
    results: proxyMap<string, string>()
});

subscribeKey(storageStore, 'lang', v => {
    translateAll();
});
