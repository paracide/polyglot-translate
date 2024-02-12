import {proxy} from "valtio";

type localeStore = {
    lang: string,
    targetLang: Array<string>,
}

type InputContentStore = {
    input: string,
}

export const originLangStore = proxy<localeStore>({
    lang: 'en',
    targetLang: ['zh-CN'],
});

export const inputContentStore = proxy<InputContentStore>({
    input: '',
});
