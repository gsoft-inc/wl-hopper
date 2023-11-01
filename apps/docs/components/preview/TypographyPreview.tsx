import "@hopper-ui/tokens/fonts.css";
import "./preview.css";

interface TypographyPreviewProps {
    values?: TypographyValues;
}

interface TypographyValues {
    lineHeight?: string;
    fontWeight?: string;
    fontSize?: string;
    fontFamily?: string;
}

interface TypographyPreviewElemProps {
    className?: string;
    content?: React.ReactNode;
    style?: React.CSSProperties;
}

const TypographyPreview = ({ values }: TypographyPreviewProps) => {
    let TypographyPreviewElem: TypographyPreviewElemProps = {};

    const sampleText = "Aa";

    TypographyPreviewElem = {
        style: { lineHeight: values?.lineHeight, fontWeight: values?.fontWeight, fontSize: values?.fontSize, fontFamily: values?.fontFamily },
        className: "hd-preview--font hd-preview--typography",
        content: <>{sampleText}</>
    };

    return <div className={`hd-preview ${TypographyPreviewElem.className}`} style={TypographyPreviewElem.style}>{TypographyPreviewElem.content}</div>;
};

export default TypographyPreview;
