import {proxy} from "valtio";
import {proxyMap} from "valtio/utils";

interface OriginLangStore {
    lang: string,
}

interface InputContentStore {
    input: string,
}

interface ResultStore {
    results: Map<string, string>
}

export const originLangStore = proxy<OriginLangStore>({
    lang: 'en',
});


export const inputContentStore = proxy<InputContentStore>({
    input: '',
});

export const resultStore = proxy<ResultStore>(
    {
        results: proxyMap<string, string>()
    });
