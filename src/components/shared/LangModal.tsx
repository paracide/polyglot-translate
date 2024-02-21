import React, {ReactNode} from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";

type Props = {
  title: string;
  children: ReactNode;
};
export default function LangModal(props: Props) {
  const {title, children} = props;
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">{title}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>
              <ScrollArea className="h-96 w-screen">
                {children}
              </ScrollArea>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button>OK</Button>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
