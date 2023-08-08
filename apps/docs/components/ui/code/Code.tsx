import CopyButton from "@/components/copyButton/CopyButton.tsx";

import "./code.css";

interface CodeProps {
    value: string;
}

const Code = ({ children, value }: React.PropsWithChildren<CodeProps>) => {
    return (
        <div className="hd-code__wrapper">
            <code className="hd-code">{children}</code>
            <CopyButton className="hd-code__copy" size="small" isInlined text={value} />
        </div>
    );
};

export default Code;
