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

const TypographyPreview = ({ values }: TypographyPreviewProps) => {
    return <div className="hd-preview hd-preview--font hd-preview--typography" style={{ lineHeight: values?.lineHeight, fontWeight: values?.fontWeight, fontSize: values?.fontSize, fontFamily: values?.fontFamily }}>Aa</div>;
};

export default TypographyPreview;
