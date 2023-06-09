"use client";

import React from "react";
import { Button } from "react-aria-components";

import "./copyButton.css";

export const CopyButton = ({ text }: { text: string }) => {
    const [isCopied, setIsCopied] = React.useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 10000);
    };

    return (
        <Button isDisabled={isCopied} onPress={copy} className="hd-copy-button">
            {isCopied ?
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5 11.75 5 5 9-9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                :
                <svg width="16" height="20" viewBox="0 0 116 123" xmlns="http://www.w3.org/2000/svg">
                    {/* eslint-disable-next-line max-len */}
                    <path fillRule="evenodd" clipRule="evenodd" d="M89.62 13.96V21.69H101.81H101.82V21.71C105.67 21.72 109.16 23.28 111.68 25.81C114.18 28.32 115.74 31.79 115.75 35.63H115.77V35.65V108.92V108.93H115.75C115.74 112.77 114.18 116.26 111.65 118.79C109.14 121.29 105.67 122.85 101.83 122.86V122.88H101.81H40.11H40.1V122.86C36.26 122.85 32.76 121.29 30.24 118.76C27.74 116.25 26.18 112.78 26.17 108.94H26.15V108.92V92.51H13.96H13.95V92.49C10.11 92.48 6.61 90.92 4.09 88.39C1.59 85.88 0.03 82.41 0.02 78.57H0V78.55V13.96V13.95H0.02C0.03 10.1 1.6 6.61 4.12 4.09C6.63 1.59 10.1 0.03 13.94 0.02V0H13.96H75.66H75.67V0.02C79.52 0.03 83.01 1.59 85.53 4.12C88.03 6.63 89.59 10.1 89.6 13.94H89.62V13.96ZM79.04 21.69V13.96V13.94H79.06C79.06 13.03 78.67 12.19 78.05 11.57C77.44 10.96 76.59 10.57 75.68 10.57V10.59H75.67H13.97H13.95V10.57C13.04 10.57 12.2 10.96 11.58 11.58C10.97 12.19 10.58 13.04 10.58 13.95H10.6V13.96V78.55V78.57H10.58C10.58 79.48 10.97 80.32 11.59 80.94C12.2 81.55 13.05 81.94 13.96 81.94V81.92H13.97H26.16V35.65V35.64H26.18C26.19 31.79 27.76 28.3 30.28 25.78C32.79 23.28 36.26 21.72 40.1 21.71V21.69H40.12H79.04ZM105.18 108.92V35.65V35.63H105.2C105.2 34.72 104.81 33.88 104.19 33.26C103.58 32.65 102.73 32.26 101.82 32.26V32.28H101.81H40.11H40.09V32.26C39.18 32.26 38.34 32.65 37.72 33.27C37.11 33.88 36.72 34.73 36.72 35.64H36.74V35.65V108.92V108.94H36.72C36.72 109.85 37.11 110.69 37.73 111.31C38.34 111.92 39.19 112.31 40.1 112.31V112.29H40.11H101.81H101.83V112.31C102.74 112.31 103.58 111.92 104.2 111.3C104.81 110.69 105.2 109.84 105.2 108.93H105.18V108.92Z"/>
                </svg>}
        </Button>
    );
};
