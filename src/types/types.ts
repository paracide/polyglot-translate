import {ReactNode} from "react";

export type ComponentLangProps = {
  locale: string;
}
export type NodeProps = {
  children: ReactNode;
  params: { locale: string };
};
