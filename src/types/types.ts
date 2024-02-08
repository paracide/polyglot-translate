import {ReactNode} from "react";

export type ComponentLangProps = {
    lang: string;
}
export type NodeProps = {
    children: ReactNode;
    params: { locale: string };
};
