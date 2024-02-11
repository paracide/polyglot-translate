import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";

type Props = {
    lang: string;
    content?: string;
}

export default function ResultCard(props: Props) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <h2>{props.lang}</h2>
            </CardHeader>
            <CardContent>
                <p>
                    {props.content}
                </p>
            </CardContent>
        </Card>
    );
};

