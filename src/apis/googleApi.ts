import {API_SERVICE} from "../../PT_CONFIG";

//request free google translate api
export async function fetchFreeGoogle(originalLang: string, targetLang: string, text: string): Promise<string[]> {
  const baseUrl = API_SERVICE.google.url;
  const queryParams = new URLSearchParams({
    client: "dict-chrome-ex",
    sl: originalLang,
    tl: targetLang,
    q: text
  });
  const url = `${baseUrl}?${queryParams.toString()}`;
  const response = await fetch(url);
  return await response?.json() as Promise<string[]>;
}

//request google cloud translate api
export async function fetchGoogleCloud(originalLang: string, targetLang: string, text: string) {

}

