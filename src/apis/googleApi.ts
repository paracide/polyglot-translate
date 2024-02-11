import {resultStore} from "@/store/store";

export async function goGoogle(originalLang: string, targetLang: string, text: string): Promise<string[]> {
    const baseUrl = "https://clients5.google.com/translate_a/t";
    const queryParams = new URLSearchParams({
        client: "dict-chrome-ex",
        sl: originalLang,
        tl: targetLang,
        q: text
    });
    const url = `${baseUrl}?${queryParams.toString()}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json() as Promise<string[]>;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error for the caller to handle
    }
}


export const translateOne = async (originLang: string, targetLang: string, text: string) => {
    if (text.trim() === '') {
        resultStore.results.clear();
    }
    try {
        const response = await goGoogle(originLang, targetLang, text);
        resultStore.results.set(targetLang, response[0]);
    } catch (error) {
        console.error('Translation error:', error);
    }
}

export const translateAll = async (originLang: string, targetLang: string[], text: string) => {
    targetLang.forEach(v => {
        translateOne(originLang, v, text).catch(error => {
            console.error(`Translation error for language ${v}:`, error);
        });
    });
};


