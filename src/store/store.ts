import {proxy} from "valtio";
import {proxyMap} from "valtio/utils";

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
