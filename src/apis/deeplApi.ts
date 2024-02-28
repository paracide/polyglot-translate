'use server'
import {API_SERVICE} from "../../PT_CONFIG";
import _ from "lodash";

type Resp = {
  translations: Array<{
    detected_source_language: string;
    text: string;
  }>;
};

export type Req = {
  text: string | null;
  targetLang: string | null;
}

export const fetchDeepl = async (req: Req): Promise<Resp> => {
  const {text, targetLang} = req;
  if (_.isEmpty(text) || _.isEmpty(targetLang)) {
    throw new Error('Empty Input');
  }

  const response = await fetch(API_SERVICE.deepl.url, {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${API_SERVICE.deepl.key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: [text],
      target_lang: targetLang
    })
  });

  if (!response.ok) {
    console.log(response.json());
    throw new Error('response is not ok');
  }
  return await response.json();
};


