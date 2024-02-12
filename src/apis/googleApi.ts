import {resultStore} from "@/store/store";

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

export const translateOne = (originLang: string, targetLang: string, text: string) => {
    if (text.trim() === '') {
        resultStore.results.clear();
        return; // 直接返回，避免执行空的翻译请求
    }
    return goGoogle(originLang, targetLang, text)
        .then(response => resultStore.results.set(targetLang, response[0]))
        .catch(error => console.error('Translation error:', error));
}

export const translateAll = (originLang: string, targetLangs: string[], text: string) => {
    const translations = targetLangs.map(targetLang =>
        translateOne(originLang, targetLang, text)
    );
    return Promise.all(translations);
};
