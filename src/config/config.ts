export const locales = ['en', 'zh', 'fr', 'de', 'ja', 'es'] as const;

type LocaleName = {
  key: string;
  label: string;
}
export const localesNames: LocaleName[] = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "zh",
    label: "中文",
  },
  {
    key: "fr",
    label: "Français",
  },
  {
    key: "de",
    label: "Deutsch",
  },
  {
    key: "ja",
    label: "日本語",
  },
  {
    key: "es",
    label: "Español",
  },
]

