import {useTranslations} from "next-intl";
import langArr from "@/config/langArr";
import LangSelector from "@/components/LangSelector";

const LangSelectorWrap = () => {
    const t = useTranslations("languages");
    let translationMap: Array<[string, string]> = langArr.map(v => [v, t(v)]);

    return (
        <LangSelector langArr={translationMap}></LangSelector>
    );
};
export default LangSelectorWrap;
