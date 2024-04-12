"use client";

import React, { useState, type ReactNode } from "react";
import { RadioGroup, Radio, type RadioGroupProps, type RadioProps } from "react-aria-components";
import { IconTable } from "@/app/ui/icons/iconTable/IconTable.tsx";
import { SparklesIcon, SparklesRichIcon, iconNames, richIconNames } from "@hopper-ui/icons";

import "./switcher.css";

interface SwitcherProps {
    type: "react" | "svg";
    iconType: "icon" | "richIcon";
}

type AvailableSizes = "sm"| "md" | "lg" | "xl";

const Switcher = React.memo(({ type, iconType = "icon" }: SwitcherProps) => {
    const [selectedSize, setSelectedSize] = useState<AvailableSizes>(iconType === "icon" ? "md" : "lg");

    const Icon = iconType === "icon" ? SparklesIcon : SparklesRichIcon;
    const iconList = iconType === "icon" ? iconNames : richIconNames;

    return (
        <>
            <RadioGroup className="hd-switcher-picker" defaultValue={selectedSize} onChange={value => setSelectedSize(value as AvailableSizes)}>
                {iconType === "icon" && <SwitcherChoice value="sm" preview={<SparklesIcon size="sm" />} />}
                <SwitcherChoice value="md" preview={<Icon size="md" />} />
                <SwitcherChoice value="lg" preview={<Icon size="lg" />} />
                {iconType === "richIcon" && <SwitcherChoice value="xl" preview={<SparklesRichIcon size="xl" />} />}
            </RadioGroup>
            <IconTable type={type} size={selectedSize} items={iconList} />
        </>
    );
});

interface SwitcherChoiceProps extends RadioProps {
    preview: ReactNode;
    value: AvailableSizes;
}

const SizeMap = {
    sm: {
        title: "Small",
        size: "16x16px"
    },
    md:{
        title: "Medium",
        size: "24x24px"
    },
    lg: {
        title: "Large",
        size: "32x32px"
    },
    xl: {
        title: "Extra Large",
        size: "40x40px"
    }
};


function SwitcherChoice({ preview, value, ...rest }: SwitcherChoiceProps) {
    const { title, size } = SizeMap[value];

    return (
        <Radio className="hd-switcher-choice" value={value} {...rest}>
            <div className="hd-switcher-choice-wrapper">
                <div className="hd-switcher-choice-infos">
                    <span className="hd-switcher-choice-infos__title">{title}</span>
                    <span className="hd-switcher-choice-infos__size">{size}</span>
                </div>
                <div className="hd-switcher-choice-preview">
                    {preview}
                </div>
            </div>
        </Radio>
    );
}

export default Switcher;
