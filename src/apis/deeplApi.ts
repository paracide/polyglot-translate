'use server'
import {API_SERVICE} from "../../PT_CONFIG";

//Deepl api response type
type Resp = {
  translations: Array<{
    detected_source_language: string;
    text: string;
  }>;
};

//Deepl api request type
export type Req = {
  text: string | null;
  targetLang: string | null;
}

//Deepl api fetch function
export async function fetchDeepl(req: Req): Promise<Resp> {
  const {text, targetLang} = req;
  //fetch deepl api
  const response = await fetch(API_SERVICE.deepl.url, {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${API_SERVICE.deepl.key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: [text!],
      target_lang: targetLang!
    })
  });
  //return response
  return await response?.json();
}


