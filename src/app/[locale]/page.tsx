import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
    params: { locale: string };
};

export default function IndexPage(props: Props) {
    // Enable static rendering
    unstable_setRequestLocale(props.params.locale);
    const t = useTranslations('meta');

    return (
        <>
        </>
    );
}
