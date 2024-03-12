'use client'
import {isEmpty} from "@nextui-org/shared-utils";

const synth = window.speechSynthesis as SpeechSynthesis;
const utterance = new SpeechSynthesisUtterance();

export function speak(text: string, lang: string) {
  if (!isEmpty(text) && !isEmpty(lang)) {
    utterance.text = text;
    utterance.lang = lang;
    synth.speak(utterance);
  }
}
