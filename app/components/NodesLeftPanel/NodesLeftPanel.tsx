import React from 'react';
import useStore from '@/app/store';
import { Button } from '@nextui-org/react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Input} from "@nextui-org/react";

const NodesLeftPanel = () => {
    const nodes = useStore((state) => state.nodes);

    const handleExport = () => {
        const exportData = nodes.map((node) => {
            return {
                id: node.id,
                label: node.data.label,
            };
        });
    }

    return (
        <div className="grid grid-cols-1 gap-0">
        {nodes.map((node, index) => (
            <Card className="rounded-none">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                <p className="text-md">{node.data.label}</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <Input className="bg-white" label="Text" />
            </CardBody>
            </Card>
        ))};
        </div>
    );
};

export default NodesLeftPanel;