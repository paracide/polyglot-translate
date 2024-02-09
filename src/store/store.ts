import {proxy} from "valtio";
import {proxyMap} from "valtio/utils";

interface Store {
    originLang: string,
    targetLang: string[]
    addLang: string
    searchText: string
}

interface ResultStore {
    results: Map<string, string>
}

export const store = proxy<Store>({
    originLang: 'en',
    targetLang: ['zh-CN'],
    addLang: 'en',
    searchText: ''
});

export const resultStore = proxy<ResultStore>(
    {
        results: proxyMap<string, string>()
    });
